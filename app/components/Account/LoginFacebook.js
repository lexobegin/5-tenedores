import React from "react";
import { SocialIcon } from "react-native-elements";

export default function LoginFacebook() {

    const login = () => {
        console.log("Login...");
    };

    return (
        <SocialIcon
            title="Inisiar sesion con Facebook"
            button
            type="facebook"
            onPress={login}
        />
    )
}