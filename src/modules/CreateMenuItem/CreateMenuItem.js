import { Form, Input, Button, Card, InputNumber, message } from 'antd';
import { Dish } from '../../models';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DataStore } from 'aws-amplify';

const { TextArea } = Input;

const CreateMenuItem = () => {
    const restaurant = useSelector((state) => state.restaurant.value);
    const navigate = useNavigate();

    const onFinish = ({ name, description, price }) => {
        DataStore.save(
            new Dish({
                name,
                description,
                price,
                restaurantID: restaurant.id
            }))
        message.success("Dish was created");
        
        navigate('/menu')
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card title='New Menu Item' style={{ margin: 20 }}>
            <Form
                layout='vertical'
                wrapperCol={{ span: 12 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label='Dish Name'
                    name='name'
                    rules={[{ required: true }]}
                    required
                >
                    <Input placeholder='Enter dish name' />
                </Form.Item>
                <Form.Item label='Dish Description' name='description' required>
                    <TextArea rows={4} placeholder='Enter dish description' />
                </Form.Item>
                <Form.Item
                    label='Price ($)'
                    name='price'
                    rules={[{ required: true }]}
                    required
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType="submit"> Submit</Button>
                </Form.Item>
            </Form>
        </Card >
    )
}

export default CreateMenuItem;