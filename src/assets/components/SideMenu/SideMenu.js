import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { useSelector } from 'react-redux';

const SideMenu = () => {
    const navigate = useNavigate();
    const restaurant = useSelector((state) => state.restaurant.value);

    const onClickHandler = async menuItem => {
        if (menuItem.key === 'signOut') {
            await Auth.signOut();
            window.location.reload();
        } else {
            navigate(menuItem.key);
        }
    };

    const mainMenuItems = [
        {
            key: '/',
            label: 'Orders'
        },
        {
            key: 'menu',
            label: 'Menu'
        },
        {
            key: 'order-history',
            label: 'Order History'
        },
    ]

    const menuItems = [
        ...(restaurant ? mainMenuItems : []),
        {
            key: 'settings',
            label: 'Settings'
        },
        {
            key: 'signOut',
            label: 'Sign Out',
            danger: 'true'
        }
    ];

    return (
        <>
            {restaurant && <h2>{restaurant.name}</h2>}
            <Menu
                items={menuItems}
                onClick={onClickHandler} 
                defaultSelectedKeys={['/']}
            />
        </>
    )
}

export default SideMenu;