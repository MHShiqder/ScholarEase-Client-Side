import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaTrash } from 'react-icons/fa';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const ReviewCard = ({ item,refetch }) => {
    const axiosSecure=useAxiosSecure()
    const { photo, rating, review, reviewDate, userName, subject, university,_id } = item;
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/allReview/${_id}`)
                .then(res=>{
                    console.log(res.data)
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      refetch()
                })
                .catch(err=>{
                    console.log(err)
                    Swal.fire({
                        title:"Something went wrong",
                        icon:"error"
                    })
                })
            }
          });
    }


    return (

        <div>
            <div className="border border-gray-300 rounded-md p-5">

                {/* product image */}
                <img alt="reviewer/image" src={photo}
                    className="w-full h-64 object-cover  mt-2" />

                {/* product details */}
                <div className="mt-3">

                    <div className=''>
                        <h3 className="text-base font-semibold">Reviewer: {userName}</h3>
                        <h3 className="text-base "><span className='font-semibold'>University:</span>  {university}</h3>
                        <p><span className='font-semibold'>Review:</span> <br /> {review}</p>
                    </div>


                    {/* rating area */}
                    <div className="flex items-center gap-[10px] mt-2">
                        <span className='font-semibold'>Rating:</span>
                        <div className="flex items-center space-x-1">
                            <Rating style={{ maxWidth: 100 }} readOnly value={rating} />
                        </div>
                        <span className="text-[0.9rem] text-gray-500">({rating})</span>
                    </div>

                    <div className="flex items-end justify-between mt-2">
                        <div>
                            <p className="text-[0.9rem] text-gray-500">Subject: {subject}</p>
                            <p className="text-sm font-semibold mt-1 ">Date: {reviewDate}</p>
                        </div>

                        <button
                            onClick={handleDelete}
                            className="py-2 px-4 bg-[#0FABCA] text-white rounded-md flex items-center gap-[0.5rem] text-[0.9rem] hover:bg-[#0195af] transition-all duration-200">
                            Delete
                            <FaTrash />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;









