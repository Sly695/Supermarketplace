import React, { useState } from 'react';
import {
    NavbarContainer,
    NavbarUserWrap,
    NavbarUsername,
    NavbarWrapLogout,
    NavbarWrap,
} from './navbarStyle';

import { useSelector } from "react-redux";
import { LogoutOutlined } from '@ant-design/icons';
import { Navigate } from 'react-router-dom';

const Navbar = () => {
    
    const user = useSelector((state) => state.user)
    const [logout, setLogout] = useState(false)

    if (logout) {
        return (
            <Navigate to={{
                pathname: "/",
            }}>
            </Navigate>
        )
    }

    let role = "";

    if (user.status == 1) {
        role = "Admin"
    } else {
        role = "Client"
    }

    var indexUser = user.email.split('@')[0].toUpperCase()

    return (

        <NavbarContainer>
            <NavbarWrap>
                <NavbarUserWrap>
                    <NavbarUsername>{role} : {indexUser}</NavbarUsername>
                </NavbarUserWrap>
                <NavbarWrapLogout>
                    <LogoutOutlined onClick={() => setLogout(!logout)} style={{ margin: "auto", color: "#FFF" }} />
                </NavbarWrapLogout>
            </NavbarWrap>
        </NavbarContainer>
    )
}

export default Navbar