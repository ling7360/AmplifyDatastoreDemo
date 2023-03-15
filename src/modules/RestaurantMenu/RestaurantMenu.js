import { Card, Table, Button, Popconfirm, message } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Dish } from '../../models';
import { useSelector } from 'react-redux';

const RestaurantMenu = () => {
    const [menuDishes, setMenuDishes] = useState([]);
    const restaurant = useSelector((state) => state.restaurant.value);

    const getMenu = function () {
        if (restaurant?.id) {
            DataStore.query(Dish, c => c.restaurantID.eq(restaurant.id))
                .then(setMenuDishes)
        }
    }

    useEffect(() => {
        getMenu();
    }, [restaurant?.id, menuDishes])    // console.log(menuDishes)

    const deleteDish = (dish) => {
        /* const modelToDelete = DataStore.query(Dish, dish.id);
        DataStore.delete(modelToDelete);
        setMenuDishes(menuDishes.filter(d => d.id !== dish.id)) */
        DataStore.delete(dish);
        // setMenuDishes(menuDishes.filter(d => d.id !== dish.id))
        // console.log("click!")
        getMenu();
    }

    const tableColumns = [
        {
            title: 'Menu Item',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `${'$ ' + price}`
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, item,) =>
                <Popconfirm
                    placement="topLeft"
                    title={"Are you sure you want to delete this dish?"}
                    onConfirm={() => deleteDish(item)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="dashed"
                        style={{ backgroundColor: 'crimson', color: '#fff' }}
                        danger
                    >Remove</Button>
                </Popconfirm>
        }
    ];

    const renderNewItemButton = () => {
        return (
            <Link to={'create'}>
                <Button type='primary'>New Item</Button>
            </Link>
        )
    }

    return (
        <Card title={'Menu'} style={{ margin: 20 }} extra={renderNewItemButton()} >
            <Table
                dataSource={menuDishes}
                columns={tableColumns}
                rowKey="id"
            />
        </Card >
    )
}

export default RestaurantMenu;
