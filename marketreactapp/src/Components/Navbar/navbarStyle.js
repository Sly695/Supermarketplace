import styled from 'styled-components'; 

export const NavbarContainer = styled.div`
    width: 70%;
    height: 7%;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    border-radius: 10px;
    margin: 5px auto;
    display: flex;
    background-color: #FFF;

    @media screen and (max-width: 900px){
        width: 100%;
        border-radius: 0;
        height: 15%;
    }
`;

export const NavbarUserWrap = styled.div`
    width: 50%;
    margin: auto;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
`;

export const NavbarUsername = styled.p`
    font-weight: 800;
    font-size: 1em;

    @media screen and (max-width: 700px){
        font-size: 0.7em;  
    }
`;

export const NavbarWrapLogout = styled.div`
    width: 10%;
    height: 30px;
    margin: auto;
    border-radius: 10px;
    display: flex;
    background-color: #000;

    &:hover{
        cursor: pointer;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }

    @media screen and (max-width: 500px){
        border-radius: 25%;
    }
`;

export const NavbarWrap = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
`;

export const SupermarketTitle = styled.h1``;

export const SupermarketWrap = styled.div`
    border: 1px solid black;
    width: 100%;
`;
