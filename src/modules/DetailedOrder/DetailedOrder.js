import React, { useEffect, useState } from 'react';
import { Card, Descriptions, Divider, List, Button, Tag, Space, Spin } from "antd";
import { useParams } from 'react-router-dom';
import { Order, User, OrderDish, Dish, OrderStatus } from '../../models';
import { DataStore } from 'aws-amplify';

const DetailedOrder = () => {
    const statusToColor = {
        [OrderStatus.NEW]: 'green',
        [OrderStatus.COOKING]: 'orange',
        [OrderStatus.READY_FOR_PICKUP]: 'red',
        [OrderStatus.ACCEPTED]: 'blue',
    }

    const { id } = useParams();
    const [currentOrder, setCurrentOrder] = useState();
    const [currentCustomer, setCurrentCustomer] = useState();
    const [currentDishes, setCurrentDishes] = useState([]);
    const [dishesList, setDishesList] = useState([]);

    const getThisOrder = async () => {
        const order = await DataStore.query(Order, id)

        const orderDishes = await order.OrderDishes.values;
        setCurrentDishes(orderDishes);

        let dishes = [];
        for (let i = 0; i < orderDishes.length; i++) {
            const dish = await orderDishes[i].dishes;
            const meal = {
                ...orderDishes[i],
                ...dish
            }
            dishes.push(meal);
        }
        setDishesList(dishes);
        setCurrentOrder(order);
        const customer = await DataStore.query(User, order?.userID)
        setCurrentCustomer(customer);
    }

    useEffect(() => {
        getThisOrder();
    }, [id])
    // console.log(currentOrder.status===OrderStatus.NEW)

    const onAccept = async () => {
        updateOrderStatus(OrderStatus.COOKING)
    }

    const onDecline = async () => {
        updateOrderStatus(OrderStatus.DECLINED_BY_RESTAURANT)
    }

    const onReady = async () => {
        updateOrderStatus(OrderStatus.READY_FOR_PICKUP);
    }

    const updateOrderStatus = async (newStatus) => {
        const updatedOrder = await DataStore.save(
            Order.copyOf(currentOrder, updated => {
                updated.status = newStatus;
            }))
        setCurrentOrder(updatedOrder);
    }

    if (!currentOrder) {
        return <Space size="middle">
            <Spin size="large" />
        </Space>
    }

    return (
        <Card title={`Order ${id}`} style={{ margin: 20 }}>
            <Space>
                <Tag color={statusToColor[currentOrder?.status]}
                    key={currentOrder?.status}>{currentOrder?.status}</Tag>
            </Space>
            <Descriptions bordered column={{ lg: 1, md: 1, sm: 1 }}>
                <Descriptions.Item label="Customer">
                    {currentCustomer?.name}
                </Descriptions.Item>
                <Descriptions.Item label="Customer Address">
                    {currentCustomer?.address}
                </Descriptions.Item>
            </Descriptions>
            <Divider />
            <List style={{ backgroundColor: '#e9faf09f', borderRadius: '7px' }}
                dataSource={dishesList}
                renderItem={items => (
                    <List.Item>
                        <div style={{ fontWeight: 'bold' }}>{items?.name} × {items?.quantity}</div>
                        <div>$ {(items?.price) * (items?.quantity)}</div>
                    </List.Item>
                )}
            />
            <Divider />
            <div style={styles.totalSumContainer}>
                <h2>Total:</h2>
                <h2 style={styles.totalPrice}>${currentOrder?.total}</h2>
            </div>
            <Divider />
            {currentOrder?.status === 'NEW' && (
                <div style={styles.buttonContainer}>
                    <Button
                        block type="default"
                        size="large"
                        style={styles.button}
                        onClick={onDecline}
                    >
                        Decline Order
                    </Button>
                    <Button
                        block type="primary"
                        size="large"
                        style={styles.button}
                        onClick={onAccept}
                    >
                        Accept Order
                    </Button>
                </div>
            )}
            {currentOrder?.status === 'COOKING' && (
                <Button
                    block
                    type="primary"
                    size="large"
                    onClick={onReady}
                >
                    Food Is Done
                </Button>
            )}
        </Card >
    )
}

const styles = {
    totalSumContainer: {
        flexDirection: 'row',
        display: 'flex'
    },
    totalPrice: {
        marginLeft: 'auto',
        fontWeight: 'bold'
    },
    buttonContainer: {
        display: 'flex',
        paddingBottom: 30
    },
    button: {
        marginRight: 20,
        marginLeft: 20
    }
}

export default DetailedOrder;
