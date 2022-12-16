import React from 'react'
import ListProducts from '../../Components/ListProducts/listProducts'
import Navbar from '../../Components/Navbar/navbar'
import {
    DashboardContainer
} from './dashboardStyle'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const Dashboard = () => {

    const user = useSelector((state) => state.user);

    if (user.token == undefined) {
        return (
            <Navigate to={{
                pathname: "/",
            }}>
            </Navigate>
        )
    }

    return (
        <>
            <DashboardContainer>
                <Navbar />
                <ListProducts />
            </DashboardContainer>
        </>
    )
}

export default Dashboard