import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import registerLottie from '../../Lottie/Register.json'
import Lottie from 'lottie-react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import SocialLogin from '../../Component/SocialLogin/SocialLogin';

const Register = () => {
    const {updateUser,signUpUser}=useAuth()
    const axiosPublic=useAxiosPublic()
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
        
    } = useForm();
    const onSubmit = data => {
        const { name,email,photo, password } = data
        console.log(name,email,photo, password)

        signUpUser(email, password)
        .then((result) => {
            console.log(result.user)
            updateUser(name, photo)
                .then((result) => {
                    console.log(result)
                })
                .catch(error => {
                    console.log(error)
                })
            axiosPublic.post('/users', { name, email })
                .then(res => {
                    if (res.data.insertedId) {

                        Swal.fire({
                            title: "Signed Up Successfully!",
                            icon: "success",
                        });
                        reset()
                        navigate("/")
                    }
                })
                .catch(error => {
                    console.log("error:", error)
                })
        })
        .catch(error => {
            console.log("error:", error)
        })
}
    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col gap-10 lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
                        <Lottie className='w-[450px]' animationData={registerLottie} loop={true}></Lottie>
                    </div>
                    <div className="card bg-base-100 border-4 w-full max-w-sm shrink-0 shadow-xl rounded-none">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name")} type="text" placeholder="Your name" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="email" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-Url</span>
                                </label>
                                <input {...register("photo")} type="url" placeholder="Photo-url" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
                                })} type="password" placeholder="password" className="input input-bordered rounded-none" required />
                                {errors.password && <span className="text-red-600 mt-2">Password should contain at least one special character,one uppercase,one lowercase,one number and 6 characters</span>}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-success rounded-none text-white">Sign-Up</button>
                            </div>

                        </form>
                            <div className='p-8 pt-0'>
                            <SocialLogin></SocialLogin>
                            
                            <p className='text-center text-lg mb-5'><small >Already registered?<Link className='text-blue-700' to={"/login"} > Go to log in </Link></small></p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;









