import { auth } from "../../firebase/base";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignUp = () => {
    const signUp = async(email, password) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log(res);
        } catch (error) {
            console.log(error.message);
        }
    };
    return { signUp };
};