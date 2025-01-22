
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';




const UserEditApplicationModal = ({ item,refetch }) => { 
    const { phone, _id,ssc,hsc,gap,gender,address,degree } = item
    
    const axiosPublic = useAxiosPublic()

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = async (data) => {
        
        axiosPublic.patch(`/appliedScholarship?id=${_id}`, data)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    title: "Your application has been received",
                    icon: "success",
                });
                refetch()
            })
            .catch(err => console.log(err))
            reset()
            document.getElementById(`edit${_id}`).close()
    };
    const style = "border-[#79D7BE] border outline-none px-4 w-full py-3 focus:border-[#3B9DF8] focus:border-b transition-colors duration-300 placeholder-[#2E5077] bg-white"


    return (
        <div>
            <dialog id={"edit"+_id} className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box rounded-none">
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 flex flex-col '>
                        <label className='space-y-2'>
                            <span className=''>Phone Number*</span>
                            <input required type="number"  {...register("phone")} id="name"  defaultValue={phone}  placeholder="Your Phone Number" className={style}
                            />
                        </label>
                       
                        <label className='space-y-2'>
                            <span className=''>Address (ex: village, district, country)*</span>
                            <input required type="text"  {...register("address")} defaultValue={address} placeholder="Your Address" className={style}
                            />
                        </label>
                        <label className='space-y-2'>
                            <span className=''>Gender*</span>
                            <select required defaultValue={gender}  {...register("gender")} className={style}>
                                <option className='text-black' value="default" disabled>--Select Gender--</option>
                                <option className='text-black' value="Male" >Male</option>
                                <option className='text-black' value="Female" >Female</option>

                            </select>
                        </label>
                        <label className='space-y-2'>
                            <span className=''>Apllicants applying degree*</span>
                            <select required defaultValue={degree}  {...register("degree")} className={style}>
                                <option className='text-black' value="default" disabled>--Degree--</option>
                                <option className='text-black' value="Bachelor" >Bachelor</option>
                                <option className='text-black' value="Diploma" >Diploma</option>
                                <option className='text-black' value="Masters" >Masters</option>
                            </select>
                        </label>
                        <label className='space-y-2'>
                            <span className=''>SSC Result*</span>
                            <input required type="number" step={"0.01"} {...register("ssc")}  defaultValue={ssc}  placeholder="Your SSC GPA" className={style}
                            />
                        </label>
                        <label className='space-y-2'>
                            <span className=''>HSC Result*</span>
                            <input required type="number" step={"0.01"}  {...register("hsc")}  defaultValue={hsc}  placeholder="Your HSC GPA" className={style}
                            />
                        </label>
                        <label className='space-y-2'>
                            <span className=''>Apllicants Study Gap</span>
                            <select  defaultValue={gap}  {...register("gap")} className={style}>
                                <option className='text-black' value="default" disabled>--Study Gap in Years--</option>
                                <option className='text-black' value="0" >0</option>
                                <option className='text-black' value="1" >1</option>
                                <option className='text-black' value="2" >2</option>
                                <option className='text-black' value="3" >3</option>
                            </select>
                        </label>
                        



                        {/* submit button  */}
                        <input  className='btn rounded-none bg-[#4DA1A9] md:col-span-2 hover:bg-[#2E5077] text-white' type="submit" value="Update" />
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

export default UserEditApplicationModal;