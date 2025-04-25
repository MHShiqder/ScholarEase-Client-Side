
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

// image hosting key 
const imageKey = import.meta.env.VITE_image_hosting_key;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageKey}`;


const PaymentModal = ({ info }) => { 
    const { university, subject, category, id,city,country,applicationFee,serviceCharge,scholarshipName,deadline } = info
    const navigate=useNavigate()
    // retrieving the current user info from database 
    const {user:currentUser}=useAuth()
    const {  data: user = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user?email=${currentUser.email}`)
            return res.data;
        }
    })
    console.log(user,"user")
    const today = new Date().toISOString().split("T")[0];
    const axiosPublic = useAxiosPublic()

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = async (data) => {

        // image hosting 
        const imageFile = { image: data.photo[0] }
        const res = await axiosPublic.post(imageHostingApi, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
       
        const imageUrl = res.data.data.display_url;
        const modalInfo={
            ...data,
            photo:imageUrl,
            userName:user?.name,
            userEmail:user?.email,
            userId:user?._id,
            scholarshipId:id,
            university,
            subject,
            category,
            applyDate:today,
            universityAddress:city+", "+country,
            applicationFee,
            serviceCharge,
            scholarshipName:scholarshipName,
            deadline
        }
        
        axiosPublic.post('/appliedScholarship', modalInfo)
            .then(res => {
                
                Swal.fire({
                    title: "Your application has been received",
                    icon: "success",
                });
            })
            .catch(err => console.log(err))
            reset()
            document.getElementById(`${id}`).close()
            navigate('/all-scholarship')
    };
    const style = "border-[#79D7BE] border outline-none px-4 w-full py-3 focus:border-[#3B9DF8] focus:border-b transition-colors duration-300 placeholder-[#2E5077] bg-white"


    return (
        <div>
            <dialog id={id} className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box rounded-none">
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 flex flex-col '>
                        <label className='space-y-2'>
                            <span className=''>Phone Number*</span>
                            <input required type="number"  {...register("phone")} id="name" placeholder="Your Phone Number" className={style}
                            />
                        </label>
                        <label className='space-y-2'>
                            <span>Your Image*</span>
                            <input required type="file"  {...register("photo")} id="name" placeholder=" University image" className={"  outline-none w-full  bg-white file:py-3 file:px-4 file:border file:bg-[#4DA1A9] file:text-white file:hover:bg-[#2E5077]"}
                            />
                        </label>
                        <label className='space-y-2'>
                            <span className=''>Address (ex: village, district, country)*</span>
                            <input required type="text"  {...register("address")} placeholder="Your Address" className={style}
                            />
                        </label>
                        <label className='space-y-2'>
                            <span className=''>Gender*</span>
                            <select required defaultValue={"default"}  {...register("gender")} className={style}>
                                <option className='text-black' value="default" disabled>--Select Gender--</option>
                                <option className='text-black' value="Male" >Male </option>
                                <option className='text-black' value="Female" >Female</option>

                            </select>
                        </label>
                        <label className='space-y-2'>
                            <span className=''>Apllicants applying degree*</span>
                            <select required defaultValue={"default"}  {...register("degree")} className={style}>
                                <option className='text-black' value="default" disabled>--Degree--</option>
                                <option className='text-black' value="Bachelor" >Bachelor</option>
                                <option className='text-black' value="Diploma" >Diploma</option>
                                <option className='text-black' value="Masters" >Masters</option>
                            </select>
                        </label>
                        <label className='space-y-2'>
                            <span className=''>SSC Result*</span>
                            <input required type="number" step={"0.01"} {...register("ssc")} placeholder="Your SSC GPA" className={style}
                            />
                        </label>
                        <label className='space-y-2'>
                            <span className=''>HSC Result*</span>
                            <input required type="number" step={"0.01"}  {...register("hsc")} placeholder="Your HSC GPA" className={style}
                            />
                        </label>
                        <label className='space-y-2'>
                            <span className=''>Apllicants Study Gap</span>
                            <select  defaultValue={"default"}  {...register("gap")} className={style}>
                                <option className='text-black' value="default" disabled>--Study Gap in Years--</option>
                                <option className='text-black' value="0" >0</option>
                                <option className='text-black' value="1" >1</option>
                                <option className='text-black' value="2" >2</option>
                                <option className='text-black' value="3" >3</option>
                            </select>
                        </label>
                        <label className='space-y-2'>
                            <span className=''>University Name</span>
                            <input required type="text" value={university} readOnly className={style}
                            />
                        </label>
                        <label className='space-y-2'>
                            <span className=''>Subject Category</span>
                            <input required type="text" value={subject} readOnly className={style}
                            />
                        </label>
                        <label className='space-y-2'>
                            <span className=''>Scholarship Category</span>
                            <input required type="text" value={category} readOnly className={style}
                            />
                        </label>



                        {/* submit button  */}
                        <input required className='btn rounded-none bg-[#4DA1A9] md:col-span-2 hover:bg-[#2E5077] text-white' type="submit" value="Submit" />
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

export default PaymentModal;