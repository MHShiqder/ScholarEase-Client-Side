import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const SocialLogin = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { signUpGoogleUser } = useAuth();
    const handleGoogleSignIn = () => {
        signUpGoogleUser()
            .then(res => {
                console.log(res)
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Logged in succesfully",
                    showConfirmButton: false,
                    timer: 1000
                });

                axiosPublic.post('/users', {
                    name: res.user.displayName,
                    email: res.user.email,
                    role:"User"
                })
                    .then(res => {
                        console.log(res.data)
                    })
                navigate("/")
            }
            )
            .catch(err => console.log(err))
    }
    return (
        <div className="flex justify-center">
            {/* <GoogleButton onClick={handleGoogleSignIn}></GoogleButton> */}
            <button
                onClick={handleGoogleSignIn}
                className="bg-[#3B9DF8] text-white  py-[5px] pl-[5px] pr-4 flex items-center justify-center gap-4 text-[1rem] hover:bg-blue-500 transition-all duration-200 w-full">
                <div className="p-2 rounded-full bg-white">
                    <img src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png"
                        alt="google logo"
                        className="w-[23px]" />
                </div>
                Sign in with Google
            </button>
        </div>
    );
};

export default SocialLogin;