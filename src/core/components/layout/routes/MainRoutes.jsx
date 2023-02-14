import { Component } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import BrandList from "../../../../pages/brands/BrandList";
import CarAdd from "../../../../pages/cars/CarAdd";
import CarDetail from "../../../../pages/cars/CarDetail";
import CarList from "../../../../pages/cars/CarList";
import Home from "../../../../pages/home/Home";
import NotFound from "../../../../pages/home/NotFound";

class MainRoutes extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/brands" caseSensitive element={<BrandList />} />
                <Route path="/cars">
                    <Route path="detail/:id" element={<CarDetail />} />
                    <Route path="add" element={<CarAdd />} />
                    <Route index element={<CarList />} />
                </Route>
                <Route path="404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="404" replace />} />
            </Routes>
        );
    }
}

export default MainRoutes;