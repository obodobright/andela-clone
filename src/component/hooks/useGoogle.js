import { auth } from "../../firebase/base";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router";
export const useGoogle = () => {
    const navigate = useNavigate();
    const GoogleSignIn = async() => {
        try {
            const provider = new GoogleAuthProvider();
            const res = await signInWithPopup(auth, provider);
            navigate("/");
            console.log(res);
        } catch (error) {
            console.log(error.message);
        }
    };
    return { GoogleSignIn };
};