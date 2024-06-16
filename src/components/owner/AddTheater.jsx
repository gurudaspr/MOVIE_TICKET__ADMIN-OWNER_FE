import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';

export default function AddTheater() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(),
    });


    const onSubmit = (data) => {
        console.log(data, 'Theater Data');
    }
    return (
        <div className=" min-h-screen bg-base-100 flex flex-col  lg:justify-start pt-20 items-center">
            <div className='bg-base-200 p-10 rounded-lg w-[100%] lg:w-[70%]'>
                <h3 className="font-bold text-lg lg:text-3xl text-center">ADD THEATER</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='overflow-x-auto'>
                        <div className="my-3 text-center px-2  ">
                            <label htmlFor="title" className="block text-left text-sm mb-2 font-medium ">Theater Name</label>
                            <input type="text" placeholder="Theater Name" className="input input-bordered input-primary w-full "
                                {...register("name")} />
                            {errors.name && (
                                <span className="text-left text-error block text-sm mt-1 ml-2">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>
                        <div className="my-3 text-center px-2 ">
                            <label htmlFor="location" className="block  text-left  text-sm mb-2 font-medium">Location</label>
                            <input type="text" placeholder="Location" className="input input-bordered input-primary  w-full"
                                {...register("location")} />
                            {errors.location && (
                                <span className="text-left text-error block text-sm mt-1 ml-2">
                                    {errors.location.message}
                                </span>
                            )}
                        </div>
                        <div className="my-3 text-center px-2">
                            <div className="collapse ">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-base-100 rounded-2xl  ">
                                    Generate Seating Pattern
                                </div>
                                <div className="collapse-content bg-base-200 border border-primary rounded-lg p-2 my-3">
                                    <p>hello</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-2 mt-2">
                            <button className="btn btn-primary">Add Theater</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
