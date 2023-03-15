import React, { useEffect, useState } from 'react';
import { Form, Input, Card, Button, message } from 'antd';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import { DataStore } from 'aws-amplify';
import { Restaurant } from '../../models';
import { setCurrentRestaurant } from '../../redux/restaurantSlice';
import { useSelector, useDispatch } from 'react-redux';

const Settings = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState(null);
    const [coordinates, setCoordinates] = useState(null);

    const restaurant = useSelector((state) => state.restaurant.value);
    const sub = useSelector((state) => state.user?.value?.attributes?.sub);
    const dispatch = useDispatch();

    // With an existing restaurant
    useEffect(() => {
        if (restaurant) {
            setName(restaurant.name);
            setCoordinates({ lat: restaurant.lat, lng: restaurant.lng })
        }
    }, [restaurant])

    const getAddressLatLng = async (address) => {
        setAddress(address);
        const geoCode = await geocodeByAddress(address.label);
        const latLng = await getLatLng(geoCode[0]);
        setCoordinates(latLng);
    };

    // See if there is a restaurant
    const onSubmit = async () => {
        if (!restaurant) {
            await createNew();
        } else {
            await toUpdateRestaurant();
        }
    }

    const createNew = async () => {
        const newRestaurant = await DataStore.save(
            new Restaurant({
                name,
                image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
                deliveryFee: 0,
                minDeliveryTime: 15,
                maxDeliveryTime: 55,
                address: address.label,
                lat: coordinates.lat,
                lng: coordinates.lng,
                adminSub: sub,
            }
            ));
        dispatch(setCurrentRestaurant(newRestaurant));
        message.success('Restaurant has been created !');
    }

    const toUpdateRestaurant = async () => {
        const updatedRestaurant = await DataStore.save(
            // Use the imported model Restaurant and its method 'copyOf'
            Restaurant.copyOf(restaurant, (updated) => {
                updated.name = name;
                updated.address = address.label;
                updated.lat = coordinates.lat;
                updated.lng = coordinates.lng;
            })
        )
        dispatch(setCurrentRestaurant(updatedRestaurant));
        message.success('Restaurant updated !')
    }

    return (
        <Card title='Restaurant Details' style={{ margin: 20 }}>
            <Form layout='vertical' wrapperCol={{ span: 9 }} onFinish={onSubmit}>
                <Form.Item label="Restaurant Name" required>
                    <Input
                        placeholder='Enter restaurant name here'
                        value={name}
                        onChange={e => setName(e.target.value)} />
                </Form.Item>
                <Form.Item label="Restaurant Address" required>
                    <GooglePlacesAutocomplete
                        apiKey='AIzaSyCHAZHstFdcy-S7sPBoeaHBxTty0SBeqP0'
                        selectProps={{
                            value: address,
                            onChange: getAddressLatLng
                        }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <span>
                {coordinates?.lat}-{coordinates?.lng}
            </span>
        </Card>
    )
}

export default Settings
