import styled from 'styled-components';

export const SupermarketTitle = styled.h1`
    margin: auto;
    font-size: 150%;
`;

export const SupermarketWrap = styled.div`
    display: flex;
    height: 20%;
`;

export const SignInSignUpContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #C8C8C8;

`;

export const SignInSignUpWrap = styled.div`
    width: 30%;
    height: 80%;
    display: flex;
    flex-direction: column;
    margin: auto;
    border-radius: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: #F9F9F9;
    padding: 20px;

    @media screen and (max-width: 900px){
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }
`;


//SignUp
export const SignUpTitle = styled.h1`
    font-size: 20px;
`;

export const SignUpWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto;

`;
export const SignUpEmailLabel = styled.p`

`;


export const SignUpEmailInput = styled.input`
    border-radius: 10px;
    border: 1px solid black;
    height: 35px;
    padding-left: 10px;
    margin: 10px 0px 10px 0;
`;
export const SignUpPasswordLabel = styled.p`

`;

export const SignUpPasswordInput = styled.input`
    border-radius: 10px;
    border: 1px solid black;
    height: 35px;
    padding-left: 10px;
    margin: 10px 0px 10px 0;
`;

export const SignUpSubmitButton = styled.button`
    margin: 10px auto;
    border-radius: 10px;
    border: 1px solid black;
    height: 35px;
    width: 100%;
    background-color: #000;
    color: #FFF;

    &:hover{
        cursor: pointer;
    }
`;

export const SignUpStatusAdminInput = styled.input`
    border-radius: 10px;
`;

export const SignUpStatusCustomerInput = styled.input`
    border-radius: 10px;
    border: 1px solid black;
`;
export const SignUpStatusWrap = styled.div`
    margin: auto;
    display: flex;
    width: 100%;
`;

export const SignUpStatusAdminLabel = styled.label`

`;


export const SignUpStatusCustomerLabel = styled.label`

`;

export const SignUpErrorMessage = styled.p`
    color: red;
`;


//SignIn
export const SignInTitle = styled.h1`
    font-size: 20px;
`;

export const SignInWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 50%;
    margin: 10px auto;
`;
export const SignInEmailLabel = styled.p``;

export const SignInEmailInput = styled.input`
    border-radius: 10px;
    border: 1px solid black;
    height: 35px;
    margin: 10px 0px 10px 0;
    padding-left: 10px;
`;

export const SignInPasswordLabel = styled.p``;

export const SignInPasswordInput = styled.input`
    border-radius: 10px;
    border: 1px solid black;
    height: 35px;
    margin: 10px 0px 10px 0;
    padding-left: 10px;
`;
export const SignInSubmitButton = styled.button`
    margin: 10px auto;
    border-radius: 10px;
    border: 1px solid black;
    height: 35px;
    width: 100%;
    background-color: #000;
    color: #FFF;

    &:hover{
        cursor: pointer;
    }
`;

export const SignInErrorMessage = styled.p`
    color: red;
`;

