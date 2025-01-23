import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';



const UpdateScholarshipModal = ({ item, refetch }) => {
    const { _id, applicationFee, category, city, country, deadline, degree, email, postDate, rank, scholarship, serviceCharge, subject, tuitionFee, details, university } = item;

    const today = new Date().toISOString().split("T")[0];
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,

    } = useForm();
    const onSubmit = async (data) => {

        console.log(data)
        axiosPublic.patch(`/scholarship/${_id}`, data)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    title: "Updated the Scholarship",
                    icon: "success",
                    timer:"1500"
                });
            })
            .catch(err => console.log(err))
        document.getElementById(`edit${_id}`).close()
        refetch()
    };

    // input style css 
    const style = "border-[#79D7BE] border outline-none px-4 w-full py-3 focus:border-[#3B9DF8] focus:border-b transition-colors duration-300 placeholder-[#2E5077] bg-white"

    return (
        <div>
            <dialog id={"edit" + _id} className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box rounded-none">
                    <form onSubmit={handleSubmit(onSubmit)} className='grid  md:grid-cols-2 gap-5'>

                        <label >
                            <span> Scholarship Name</span>
                            <input required type="text" {...register("scholarship")} defaultValue={scholarship} id="name" placeholder=" Scholarship Name" className={style}
                            />
                        </label>
                        <label >
                            <span> University Name</span>
                            <input required type="text"  {...register("university")} defaultValue={university} id="name" placeholder="University Name" className={style}
                            />
                        </label>


                        <label >
                            <span> University Country</span>
                            <input required type="text"  {...register("country")} defaultValue={country} id="name" placeholder=" University Country" className={style}
                            />
                        </label>
                        <label >
                            <span> University city</span>
                            <input required type="text"  {...register("city")} defaultValue={city} id="name" placeholder=" University city" className={style}
                            />
                        </label>
                        <label className='md:col-span-2'>
                            <span> Scholarship details</span>
                            <textarea required type="number" min={1} max={1500} {...register("details")} defaultValue={details} id="name" placeholder=" Scholarship Details" className={style + "h-24 "}
                            />
                        </label>
                        <label >
                            <span> University World Rank</span>
                            <input required type="number" min={1} max={1500} {...register("rank")} defaultValue={rank} id="name" placeholder=" University World Rank" className={style}
                            />
                        </label>


                        <label >
                            <span> Subject Category</span>
                            <select required defaultValue={subject}  {...register("subject")} className={style}>
                                <option className='text-black' value="default" disabled>--Subject category--</option>
                                <option className='text-black' value="Doctor" >Doctor</option>
                                <option className='text-black' value="Engineering" >Engineering</option>
                                <option className='text-black' value="Agriculture" >Agriculture</option>
                            </select>
                        </label>

                        <label >
                            <span> Scholarship Category</span>
                            <select required defaultValue={category}  {...register("category")} className={style}>
                                <option className='text-black' value="default" disabled>--Scholarship category--</option>
                                <option className='text-black' value="Full fund" >Full fund</option>
                                <option className='text-black' value="Partial" >Partial</option>
                                <option className='text-black' value="Self-fund" >Self-fund</option>
                            </select>
                        </label>
                        <label >
                            <span> Degree</span>
                            <select required defaultValue={degree}  {...register("degree")} className={style}>
                                <option className='text-black' value="default" disabled>--Degree--</option>
                                <option className='text-black' value="Bachelor" >Bachelor</option>
                                <option className='text-black' value="Diploma" >Diploma</option>
                                <option className='text-black' value="Masters" >Masters</option>
                            </select>
                        </label>

                        <label >
                            <span> Tuition Fees</span>
                            <input required type="number" min={150000} max={15000000} {...register("tuitionFee")} defaultValue={tuitionFee} id="name" placeholder=" Tuition fees" className={style}
                            />
                        </label>

                        <label >
                            <span> Application Fees</span>
                            <input required type="number" min={5000} max={30000} {...register("applicationFee")} defaultValue={applicationFee} id="name" placeholder=" Application fees" className={style}
                            />
                        </label>
                        <label >
                            <span> Service Charge</span>
                            <input required type="number" min={700} max={1500} {...register("serviceCharge")} defaultValue={serviceCharge} id="name" placeholder=" Service charge" className={style}
                            />
                        </label>

                        <label >
                            <span> Posted User Email</span>
                            <input required type="text"  {...register("email")} value={email} id="name" placeholder="   Posted User Email" className={style}
                            />
                        </label>


                        <label >
                            <span> Application Deadline</span>
                            <input required type="date"  {...register("deadline")} defaultValue={deadline} id="name" placeholder=" Application Deadline" className={style}
                            />
                        </label>
                        <label >
                            <span > Scholarship post Date</span>
                            <input required type="date"   {...register("postDate")} defaultValue={postDate} id="name" placeholder="  Scholarship post Date" className={style}
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

export default UpdateScholarshipModal;