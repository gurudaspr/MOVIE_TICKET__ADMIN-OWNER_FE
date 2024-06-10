import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { baseUrl } from '../../baseUrl/baseUrl';
import { toast } from 'react-hot-toast'; 

const movieSchema = Yup.object().shape({
  title: Yup.string().required("Enter movie title"),
  duration: Yup.number().required("Enter movie duration in minutes"),
  genre: Yup.string().required("Enter movie genre"),
  description: Yup.string().required("Enter movie description").max(200),
  language: Yup.string().required("Enter movie language"),
  image: Yup.string().required("Upload movie image"),
});

export default function AddEditModel({ isOpen, onClose, }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(movieSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    console.log(data, 'Movie Data');
    try {
      setLoading(true);
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const fileInput = document.getElementById("image");

      if (fileInput && fileInput.files[0]) {
        formData.append("image", fileInput.files[0]);
      }
  
       await axios.post(`${baseUrl}/api/add-movie`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
        withCredentials: true,
      });


      toast.success('Movie added successfully');
      reset();
      onClose();
    } catch (error) {
      console.error('Error adding movie:', error.message);
      toast.error('Failed to add movie');
    } finally {
      setLoading(false);
    }
  };
  const handleClose = () => {
    reset();
    onClose();
  };
  return (
    <>
      <div className={`modal ${isOpen ? 'modal-open ' : ''}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">ADD MOVIE</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='overflow-x-auto'>
              <div className="my-3 text-center px-2">
                <label htmlFor="title" className="block text-left text-sm mb-2 font-medium ">Title</label>
                <input type="text" placeholder="Title" className="input input-bordered input-primary w-full "
                  {...register("title")} />
                {errors.title && (
                  <span className="text-left text-error block text-sm mt-1 ml-2">
                    {errors.title.message}
                  </span>
                )}
              </div>
              <div className="my-3 text-center px-2">
                <label htmlFor="genre" className="block  text-left  text-sm mb-2 font-medium">Genre</label>
                <input type="text" placeholder="Genre" className="input input-bordered input-primary  w-full"
                  {...register("genre")} />
                {errors.genre && (
                  <span className="text-left text-error block text-sm mt-1 ml-2">
                    {errors.genre.message}
                  </span>
                )}
              </div>
              <div className="my-3 text-center px-2">
                <label htmlFor="language" className="block text-left  text-sm mb-2 font-medium ">Language</label>
                <input type="text" placeholder="Language" className="input input-bordered input-primary w-full "
                  {...register("language")} />
                {errors.language && (
                  <span className="text-left text-error block text-sm mt-1 ml-2">
                    {errors.language.message}
                  </span>
                )}
              </div>
              <div className="my-3 text-center px-2">
                <label htmlFor="duration" className="block text-left  text-sm mb-2 font-medium">Duration(Minutes)</label>
                <input type="number" placeholder="Duration(Minutes)" className="input input-bordered input-primary w-full "
                  {...register("duration")} />
                {errors.duration && (
                  <span className="text-left text-error block text-sm mt-1 ml-2">
                    {errors.duration.message}
                  </span>
                )}
              </div>
              <div className="my-3 text-center px-2">
                <label htmlFor="description" className="block text-left mb-2 text-sm font-medium ">Description</label>
                <textarea
                  id="description"
                  {...register('description')}
                  placeholder='Description'
                  className='input input-bordered input-primary w-full h-16'
                />
                {errors.description && (
                  <span className="text-left text-error block text-sm mt-1 ml-2">
                    {errors.description.message}
                  </span>
                )}
              </div>
              <div className="mb-3 text-center px-2">
                <label htmlFor="image" className="block text-left mb-2 text-sm font-medium ">Image</label>
                <input type="file" className="file-input file-input-bordered file-input-primary w-full"
                   name='image' id="image" />
                {errors.image && (
                  <span className="text-left text-error block text-sm mt-1 ml-2">
                    {errors.image.message}
                  </span>
                )}
              </div>
            </div>
            <div className="text-center px-2 mt-2">
            <button className="btn btn-primary" disabled={loading}>{loading ? <span className='loading loading-spinner bg-primary '></span> : "Submit"}</button>
            </div>
          </form>
          <div className="modal-action">
            <button className="btn" onClick={handleClose}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}
