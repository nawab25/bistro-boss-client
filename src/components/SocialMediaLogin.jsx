import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialMediaLogin = () => {
    const { loginByGoogle } = useAuth();
    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const signInByGoogle = () => {
        loginByGoogle()
            .then(result => {
                const userInfo = {
                    name: result?.user?.displayName,
                    email: result?.user?.email
                }
                console.log(result.user);
                axiosPublic.post('/users', userInfo)
                    .then(res => console.log(res.data));
                navigate(from, { replace: true });
            })
    }

    return (
        <div className="-mt-4">
            <button onClick={signInByGoogle} className="btn btn-info w-full">
                <FaGoogle></FaGoogle>
                Sign in by Google
            </button>
        </div>
    );
};

export default SocialMediaLogin;