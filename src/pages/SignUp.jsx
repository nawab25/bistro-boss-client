import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SocialMediaLogin from "../components/SocialMediaLogin";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const {
        createUser,
        logOut,
        updateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleForm = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUser(name, photo)
                    .then(() => {
                        axiosPublic.post('/users', { name, email })
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('successfully posted user data');
                                }
                            })
                    })
                logOut()
                navigate('/login');
            })
            .catch(err => {
                console.log(err.message);
            })

    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign-up</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center w-full lg:text-left">
                        <h1 className="text-4xl font-bold">Sign up here</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-xl border-2 bg-base-100">
                        <form onSubmit={handleForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo" type="text" placeholder="Photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Sign up" />
                            </div>

                        </form>
                        <div className="px-8">
                            <SocialMediaLogin></SocialMediaLogin>
                            <p className="text-center">
                                <span>Already have an account?</span>
                                <Link className="text-blue-500 underline" to='/login'>Sign in</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;