import { useState } from "react";
import { auth } from "../../firebase/base";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useSignIn = () => {
    const [pending, setPending] = useState(false);
    const [isError, setIsError] = useState(null);

    const signIn = async(email, password) => {
        setPending(true);
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            console.log(res);
            setPending(false);
            setIsError(false);
        } catch (error) {
            console.log(error.message);
        }
    };
    return { pending, isError, signIn };
};