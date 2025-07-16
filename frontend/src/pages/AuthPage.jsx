import { useState, useEffect } from "react";
import AuthForm from "../components/AuthForm";

const AuthPage = ({ initialMethod }) => {
    const [method, setMethod] = useState(initialMethod);


    useEffect(() => {
        setMethod(initialMethod);
    }, [initialMethod]);

    const route = method === 'login' ? 'auth/token/' : 'auth/register/';

    return (
        <div>
            <AuthForm route={route} method={method} />
        </div>
    );
};

export default AuthPage;