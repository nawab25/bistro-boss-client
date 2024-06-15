import { useContext, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const captchaRef = useRef();
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleForm = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value)) {
            login(email, password)
                .then(result => {
                    console.log(result.user);
                    navigate(from, {replace: true});
                    toast.success('Successfully signed in!')
                })
                .catch(err => {
                    toast.error(err.message);
                })
        }
        else {
            alert('Captcha Does Not Match');
        }
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign in</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center w-full lg:text-left">
                        <h1 className="text-4xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-xl border-2 bg-base-100">
                        <form onSubmit={handleForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* Captcha  */}
                            <div className="form-control">
                                <span><LoadCanvasTemplate /></span>
                                <input ref={captchaRef} name="captcha" type="text" placeholder="Type the above text" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Login" />
                            </div>
                            <p className='text-center'>
                                <span>New here?</span>
                                <Link className='text-blue-500 underline' to='/sign-up'>Sign up</Link>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;