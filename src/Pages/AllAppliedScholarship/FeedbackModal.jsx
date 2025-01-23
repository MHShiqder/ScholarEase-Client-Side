import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const FeedbackModal = ({id}) => {
    const axiosSecure=useAxiosSecure()
    const handleFeedback = (e) => {
        e.preventDefault()
       const info={feedback:e.target.feedback.value}
        axiosSecure.patch(`/appliedScholarship?id=${id}`,info)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount>0){
                Swal.fire({
                    title:"Done",
                    text:"Your Feedback is updated",
                    icon:"success",
                    timer:"1500"
                })
                document.getElementById(`feedback${id}`).close()
            }
        })
        .catch(err=>{
            console.log("error",err)
            Swal.fire({
                title:"Error",
                icon:"error",
                timer:"1500"
            })
        })

    }
    return (
        <div>
            <dialog id={"feedback" + id} className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box rounded-none ">

                    <form
                    className='flex flex-col gap-5 mt-10 items-center '
                    onSubmit={handleFeedback}>
                        <textarea className='h-24 w-full input input-bordered rounded-none' placeholder='Give Your Feedback Here' name="feedback" id=""></textarea>
                        <input className='btn w-full rounded-none bg-[#4DA1A9]' type="submit" value="Submit Feedback" />
                    </form>

                    <div className="modal-action">
                        <form method="dialog " className='w-full '>
                            {/* if here is a button in form, it will close the modal */}
                            <button className="btn w-full rounded-none">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default FeedbackModal;