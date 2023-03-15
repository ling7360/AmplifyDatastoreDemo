import { Routes, Route } from 'react-router-dom';
import DetailedOrder from "../../../modules/DetailedOrder/DetailedOrder";
import Orders from "../../../modules/Orders/Orders";
import RestaurantMenu from "../../../modules/RestaurantMenu/RestaurantMenu";
import CreateMenuItem from "../../../modules/CreateMenuItem/CreateMenuItem";
import OrderHistory from "../../../modules/OrderHistory/OrderHistory";
import Settings from '../../../modules/Settings/Settings';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<Orders />} />
            <Route path="order/:id" element={<DetailedOrder />} />
            <Route path="menu" element={<RestaurantMenu />} />
            <Route path="menu/create" element={<CreateMenuItem />} />
            <Route path="order-history" element={<OrderHistory />} />
            <Route path='settings' element={<Settings />} />
        </Routes>
    )
}

export default AppRoutes;