import { useForm } from 'react-hook-form';
import DashboardTitle from '../../Component/DashboardTitle/DashboardTitle';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const imageKey = import.meta.env.VITE_image_hosting_key;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageKey}`;


const AddScholarship = () => {
    const today = new Date().toISOString().split("T")[0];
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { user } = useAuth()
    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const onSubmit = async (data) => {
        // const {applicationFee,category,city,country,deadline,degree,email,postDate,rank,scholarship,serviceCharge,subject,tuitionFee,university}=data;
        const { photo, ...remainingProperties } = data;
        console.log(data)
        // image hosting to imgBB
        const imageFile = { image: data.photo[0] }
        console.log(imageFile)
        const res = await axiosPublic.post(imageHostingApi, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        const imageUrl = res.data.data.display_url;
        // adding the image url 
        // scholarshipData={applicationFee,category,city,country,deadline,degree,email,postDate,rank,scholarship,serviceCharge,subject,tuitionFee,university,imageUrl}
        const scholarshipData = { ...remainingProperties, imageUrl }
        console.log(scholarshipData)
        axiosPublic.post('/scholarship', scholarshipData)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    title: "Added the Scholarship to database",
                    icon: "success",
                });
            })
            .catch(err => console.log(err))

        reset()
    };



    const style = "border-[#79D7BE] border-b outline-none px-4 w-full py-3 focus:border-[#3B9DF8] focus:border-b-2 transition-colors duration-300 placeholder-[#2E5077] bg-white"
    return (
        <div className='p-10 '>
            <DashboardTitle title="Add Scholarship"></DashboardTitle>

            <form onSubmit={handleSubmit(onSubmit)} className='grid  md:grid-cols-2 gap-5'>

                <input required type="text" {...register("scholarship")} id="name" placeholder=" Scholarship Name" className={style}
                />
                <input required type="text"  {...register("university")} id="name" placeholder="University Name" className={style}
                />
                <input type="text" placeholder="Choose University Image --->" disabled className={style}
                />
                <input required type="file"  {...register("photo")} id="name" placeholder=" University image" className={"  outline-none w-full  bg-white file:py-3 file:px-4 file:border file:bg-[#4DA1A9] file:text-white file:hover:bg-[#2E5077]"}
                />
                <input required type="text"  {...register("country")} id="name" placeholder=" University Country" className={style}
                />
                <input required type="text"  {...register("city")} id="name" placeholder=" University city" className={style}
                />
                <textarea required type="number" min={1} max={1500} {...register("details")} id="name" placeholder=" Scholarship Details" className={style+"h-24 md:col-span-2"}
                />
                <input required type="number" min={1} max={1500} {...register("rank")} id="name" placeholder=" University World Rank" className={style}
                />
                <select required defaultValue={"default"}  {...register("subject")} className={style}>
                    <option className='text-black' value="default" disabled>--Subject category--</option>
                    <option className='text-black' value="doctor" >Doctor</option>
                    <option className='text-black' value="engineering" >Engineering</option>
                    <option className='text-black' value="agriculture" >Agriculture</option>
                </select>
                <select required defaultValue={"default"}  {...register("category")} className={style}>
                    <option className='text-black' value="default" disabled>--Scholarship category--</option>
                    <option className='text-black' value="Full fund" >Full fund</option>
                    <option className='text-black' value="Partial" >Partial</option>
                    <option className='text-black' value="Self-fund" >Self-fund</option>
                </select>
                <select required defaultValue={"default"}  {...register("degree")} className={style}>
                    <option className='text-black' value="default" disabled>--Degree--</option>
                    <option className='text-black' value="Bachelor" >Bachelor</option>
                    <option className='text-black' value="Diploma" >Diploma</option>
                    <option className='text-black' value="masters" >Masters</option>
                </select>

                <input required type="number" min={150000} max={15000000} {...register("tuitionFee")} id="name" placeholder=" Tuition fees" className={style}
                />
                <input required type="number" min={5000} max={30000} {...register("applicationFee")} id="name" placeholder=" Application fees" className={style}
                />
                <input required type="number" min={700} max={1500} {...register("serviceCharge")} id="name" placeholder=" Service charge" className={style}
                />
                <input required type="text"  {...register("email")} value={user.email} id="name" placeholder="   Posted User Email" className={style}
                />
                <label >
                    <span className='ml-3 pb-2 flex items-center'> Application Deadline</span>
                    <input required type="date" min={today} {...register("deadline")} id="name" placeholder=" Application Deadline" className={style}
                    />
                </label>
                <label >
                    <span className='ml-3 pb-2 flex items-center'> Scholarship post Date</span>
                    <input required type="date"   {...register("postDate")} id="name" placeholder="  Scholarship post Date" className={style}
                />
                </label>
                
                <input required className='btn rounded-none bg-[#4DA1A9] md:col-span-2 hover:bg-[#2E5077] text-white' type="submit" value="Add Scholarship" />
            </form>

        </div>
    );
};

export default AddScholarship;