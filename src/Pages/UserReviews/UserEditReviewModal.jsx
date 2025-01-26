import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';



const UserEditReviewModal = ({ item,refetch }) => {
    const { review,_id } = item;

    
    // retrieving the current user info from database 
    const { user } = useAuth()
    const today = new Date().toISOString().split("T")[0];
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        reset
    } = useForm();


    const onSubmit = async (data) => {




        const modalInfo = {
            
            review:data.review,
            

        }
        console.log(modalInfo,"modal")

        axiosPublic.patch(`/review?id=${_id}`, modalInfo)
            .then((res) => {
                console.log(res.data)
                Swal.fire({
                    title: "Your review has been posted",
                    icon: "success",
                });
                refetch()
            })
            .catch(err => console.log(err))
        reset()
        document.getElementById(`${_id}`).close()
        
    };

    // input style css 
    const style = "border-[#79D7BE] border outline-none px-4 w-full py-3 focus:border-[#3B9DF8] focus:border-b transition-colors duration-300 placeholder-[#2E5077] bg-white"


    return (
        <div>
            <dialog id={_id} className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box rounded-none">
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 flex flex-col '>
                        

                        <label className='space-y-2'>
                            <span className=''>Review *</span>
                            <textarea required type="text"  {...register("review")} defaultValue={review}  placeholder="Put Your Review" className={style}
                            />
                        </label>

                        {/* submit button  */}
                        <input required className='btn rounded-none bg-[#4DA1A9] md:col-span-2 hover:bg-[#2E5077] text-white' type="submit" value="Update" />
                    </form>

                    <div className="modal-action">
                        <form method="dialog " className='w-full '>
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn w-full rounded-none">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default UserEditReviewModal;



















