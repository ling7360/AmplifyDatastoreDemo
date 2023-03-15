import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Auth, DataStore } from 'aws-amplify';
import { setCurrentUser } from '../redux/userSlice';
import { setCurrentRestaurant } from '../redux/restaurantSlice';
import { Restaurant } from '../models';
// import { setDetailedOrder } from '../redux/detailedOrderSlice';

export default function AuthCheck({ children }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.value);

    const getUser = async () => {
        const data = await Auth.currentAuthenticatedUser({ bypassCache: true })
        dispatch(setCurrentUser({
            username: data.username,
            attributes: data.attributes
        }))
        const restaurant = await DataStore.query(Restaurant, c => c?.adminSub?.eq(data?.attributes?.sub))
        dispatch(setCurrentRestaurant(restaurant[0]));
    }

    useEffect(() => {
        getUser();
    }, []);

    return user ? (
        <div>{children}</div>
    ) : <div>loading</div>
}
