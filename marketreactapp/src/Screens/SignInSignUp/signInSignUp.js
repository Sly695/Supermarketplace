import React, { useState } from 'react';
import {

    SupermarketTitle,
    SupermarketWrap,
    
    SignInSignUpContainer,
    SignInSignUpWrap,

    //SignUp
    SignUpTitle,
    SignUpWrap,
    SignUpEmailInput,
    SignUpPasswordInput,
    SignUpSubmitButton,
    SignUpStatusAdminInput,
    SignUpStatusCustomerInput,
    SignUpStatusWrap,
    SignUpStatusAdminLabel,
    SignUpStatusCustomerLabel,
    SignUpErrorMessage,

    //SignIn
    SignInTitle,
    SignInWrap,
    SignInEmailInput,
    SignInPasswordInput,
    SignInSubmitButton,
    SignInErrorMessage
} from './SignInSignUpStyle';

import { useDispatch } from 'react-redux'

import { Navigate } from 'react-router-dom';

const SignInSignUp = () => {


    //SignUp
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [signUpStatus, setSignUpStatus] = useState("");
    const [signUpResponse, setSignUpResponse] = useState(false);
    const [signUpError, setSignUpError] = useState("");

    //SignIn
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const [signInResponse, setSignInResponse] = useState(false);
    const [signInError, setSignInError] = useState("");
    const [signUpCheckedAdmin, setSignUpCheckedAdmin] = useState(false);
    const [signUpCheckedCustomer, setSignUpCheckedCustomer] = useState(false);

    const dispatch = useDispatch()

    async function submitSignUp() {
        let rawResponse = await fetch('/users/signUp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `email=${signUpEmail}&password=${signUpPassword}&status=${signUpStatus}`
        });

        let response = await rawResponse.json();


        if(response.result){
            setSignUpResponse(response.result);
            dispatch({ type: "sendUser", user: response.newUser });
            
        } else {
            setSignUpError(response.error[0]);
        }
    }


    async function submitSignIn() {
        let rawResponse = await fetch('/users/signIn', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `email=${signInEmail}&password=${signInPassword}`
        });

        let response = await rawResponse.json();

        if(response.result){
            setSignInResponse(response.result);
            dispatch({ type: "sendUser", user: response.user });
            window.localStorage.setItem('user', response.user );
        } else {
            setSignInError(response.error);
        }

    }

    if (signInResponse || signUpResponse) {

        

        return (
            <Navigate to={{
                pathname: "/dashboard",
            }}>
            </Navigate>)
    }

    return (
        <>
            <SignInSignUpContainer>

                <SignInSignUpWrap>
                    <SupermarketWrap>
                        <SupermarketTitle>SUPERMARKETPLACE</SupermarketTitle>
                    </SupermarketWrap>
                    <SignUpWrap>
                        <SignUpTitle>INSCRIPTION</SignUpTitle>
                        <SignUpEmailInput required placeholder='Email' onChange={(arg) => setSignUpEmail(arg.target.value)}></SignUpEmailInput>
                        <SignUpPasswordInput required placeholder='Mot de passe' onChange={(arg) => setSignUpPassword(arg.target.value)}></SignUpPasswordInput>
                        <SignUpStatusWrap>
                            <SignUpStatusAdminLabel>Admin</SignUpStatusAdminLabel>
                            <SignUpStatusAdminInput required checked={signUpCheckedAdmin} onChange={() => (setSignUpStatus(true), setSignUpCheckedAdmin(true), setSignUpCheckedCustomer(false))} type="checkbox"></SignUpStatusAdminInput>
                            <SignUpStatusCustomerLabel>Client</SignUpStatusCustomerLabel>
                            <SignUpStatusCustomerInput required checked={signUpCheckedCustomer} onChange={() => (setSignUpStatus(false), setSignUpCheckedAdmin(false), setSignUpCheckedCustomer(true))} type="checkbox"></SignUpStatusCustomerInput>
                        </SignUpStatusWrap>
                        <SignUpSubmitButton onClick={() => submitSignUp()}>S'inscrire</SignUpSubmitButton>
                        <SignUpErrorMessage>{signUpError}</SignUpErrorMessage>
                    </SignUpWrap>
                    <SignInWrap>
                        <SignInTitle>CONNEXION</SignInTitle>
                        <SignInEmailInput placeholder='Email' onChange={(arg) => setSignInEmail(arg.target.value)}></SignInEmailInput>
                        <SignInPasswordInput placeholder='Mot de passe' onChange={(arg) => setSignInPassword(arg.target.value)}></SignInPasswordInput>
                        <SignInSubmitButton onClick={() => submitSignIn()}>Se connecter</SignInSubmitButton>
                        <SignInErrorMessage>{signInError}</SignInErrorMessage>
                    </SignInWrap>
                </SignInSignUpWrap>
            </SignInSignUpContainer>
        </>
    )
}

export default SignInSignUp