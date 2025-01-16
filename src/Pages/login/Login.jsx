import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginLottie from '../../Lottie/Login.json'
import Lottie from 'lottie-react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../../Component/SocialLogin/SocialLogin';
const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const { logInUser } = useAuth()
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = data => {
        const { email, password } = data
        console.log(email, password)
        logInUser(email, password)
            .then((res) => {
                console.log(res)
                Swal.fire({
                    title: "Logged in",
                    icon: "success",
                });
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    };
    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <Lottie className='w-96' animationData={loginLottie} loop={true}></Lottie>

                    </div>
                    <div className="card bg-base-100 border-4 w-full max-w-sm shrink-0 shadow-xl rounded-none">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="email" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password")} type="password" placeholder="password" className="input input-bordered rounded-none" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success
                                 rounded-none text-white">Login</button>
                            </div>
                        </form>
                        <div className='p-8 pt-0'>
                            <SocialLogin></SocialLogin>
                            <p className='text-center text-lg mb-5'><small >New here?<Link className='text-blue-700' to={"/register"} > Go to sign up </Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;