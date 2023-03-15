import { Card, Table, Tag } from 'antd';
import { OrderStatus, Order } from '../../models';
import { DataStore } from 'aws-amplify';
import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {
    const restaurant = useSelector((state) => state.restaurant.value);
    const [history, setHistory] = useState();
    const navigate = useNavigate();

    const getOrderHistory = async () => {
        const data = await DataStore.query(Order, c =>
            c.and(c => [
                c.orderRestaurantId.eq(restaurant?.id),
                c.or(c => [
                    c.status.eq(OrderStatus.PICKED_UP),
                    c.status.eq(OrderStatus.COMPLETED),
                    c.status.eq(OrderStatus.DECLINED_BY_RESTAURANT)
                ])
            ])
        )
        setHistory(data);
    }

    useEffect(() => {
        getOrderHistory()
    }, [])

    const renderStatus = orderStatus => {
        const statusToColor = {
            [OrderStatus.COMPLETED]: 'green',
            [OrderStatus.PICKED_UP]: 'yellow',
            [OrderStatus.READY_FOR_PICKUP]: 'red',
            [OrderStatus.ACCEPTED]: 'purple',
        }
        return <Tag color={statusToColor[orderStatus]}>{orderStatus}</Tag>
    }

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
            render: (price) => `$ ${price?.toFixed(2)}`
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: renderStatus,
        }
    ];

    return (
        <Card title={'History Orders'} style={{ margin: 20 }}>
            <Table
                dataSource={history}
                columns={tableColumns}
                rowKey="id"
                onRow={orderItem => ({
                    onClick: () => navigate(`order/${orderItem.id}`)
                })}
            />
        </Card>)
};

export default OrderHistory;
