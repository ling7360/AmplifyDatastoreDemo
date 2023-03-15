import { Card, Table, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { OrderStatus, Order } from '../../models';
import { DataStore } from 'aws-amplify';
import { React, useEffect, useState } from 'react';

const Orders = () => {
    const navigate = useNavigate();
    const restaurant = useSelector(state => state.restaurant.value);
    const [orders, setOrders] = useState([]);

    const renderOrderStatus = orderStatus => {
        const statusToColor = {
            [OrderStatus.NEW]: 'green',
            [OrderStatus.COOKING]: 'orange',
            [OrderStatus.READY_FOR_PICKUP]: 'red',
            [OrderStatus.ACCEPTED]: 'blue',
        }
        return <Tag color={statusToColor[orderStatus]} key={orderStatus}>{orderStatus}</Tag>
    };

    const getOrder = async () => {
        const data = await DataStore.query(Order, c =>
            c.and(c => [
                c.orderRestaurantId.eq(restaurant?.id),
                c.or(c => [
                    c.status.eq(OrderStatus.NEW),
                    c.status.eq(OrderStatus.COOKING),
                    c.status.eq(OrderStatus.READY_FOR_PICKUP),
                    c.status.eq(OrderStatus.ACCEPTED),
                ])
            ])
        )
        setOrders(data);
    }

    useEffect(() => {
        if (!restaurant) {
            return;
        }
        getOrder();
    }, [restaurant])

    // When the component mounts, we need to start listening for updates
    useEffect(() => {
        const subscription = DataStore.observe(Order).subscribe(msg => {
            // console.log(msg)
            const { opType, element } = msg;
            // Check if this order is for current Restaurant
            if (msg.opType === 'INSERT' && element.orderRestaurantId === restaurant.id) {
                setOrders((existingOrders) => [element, ...existingOrders])
            }
        });
        return () => subscription.unsubscribe;
    }, [])

    const tableColumns = [
        {
            title: 'Order ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Price',
            dataIndex: 'total',
            key: 'total',
            render: (price) => `$ ${price.toFixed(2)}`
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: renderOrderStatus,
        }
    ];

    return (
        <Card title={'Orders'} style={{ margin: 20 }}>
            <Table
                dataSource={orders}
                columns={tableColumns}
                rowKey="id"
                onRow={orderItem => ({
                    onClick: () => navigate(`/order/${orderItem.id}`)
                })}
            />
        </Card>
    )
}

export default Orders;