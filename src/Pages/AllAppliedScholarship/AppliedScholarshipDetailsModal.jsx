import React from 'react';

const AppliedScholarshipDetailsModal = ({item}) => {
    const {_id,university,degree,scholarshipName,category}=item;
    return (
        <div>
            <dialog id={"details"+_id} className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box rounded-none ">
                    
                    <div className='text-center text-lg'>
                        <h3><span className='font-semibold'>University Name</span> {university}</h3>
                        <h3><span className='font-semibold'>Scholarship Name</span> {scholarshipName}</h3>
                        <h3><span className='font-semibold'>Scholarship Category</span> {category}</h3>
                        <h3><span className='font-semibold'>Degree</span> {degree}</h3>
                    </div>
                     

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

export default AppliedScholarshipDetailsModal;