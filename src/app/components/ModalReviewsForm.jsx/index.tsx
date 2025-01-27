"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { ISupportForm } from "@/app/types/support";
import { AiFillStar } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const ModalReviewsForm = ({ setModalState }) => {
  const [rating, setRating] = useState(6);
  const defaultValues = {
    userName: "",
    review: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISupportForm>({ defaultValues });

  const onSubmit: SubmitHandler<ISupportForm> = (data) => {
    console.log(data);

    reset();
  };

  const handleSetRating = (star: number) => {
    setRating(star * 2);
  };

  const handleModalClose = () => {
    setModalState(false);
  };

  return (
    <div
      onSubmit={handleSubmit(onSubmit)}
      className="fixed left-0 top-0 w-full h-full bg-black/70 z-[100] flex items-center justify-center"
    >
      <div className="relative w-full max-w-[600px] p-4 sm:p-8 bg-[#1A1A1A] border-[3px] border-[#262626] rounded-md mx-4">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-default text-base lg:text-2xl font-bold">
              Write an honest review about this movie/show
            </p>
            <div className="flex items-center gap-4">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <AiFillStar
                  key={index}
                  className="w-6 h-6 sm:w-[32px] sm:h-[32px] cursor-pointer"
                  style={{ color: rating >= star * 2 ? "#E50000" : "#999" }}
                  onClick={() => handleSetRating(star)}
                />
              ))}
              <span className="text-default text-lg sm:text-2xl font-bold">
                {rating}/10
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label
              className="text-default text-base lg:text-2xl font-bold"
              htmlFor="name"
            >
              Write Your Name
            </label>
            <input
              id="userName"
              type="text"
              {...register("userName", {
                required: true,
                minLength: {
                  value: 3,
                  message: "The name must be more than 3 symbols",
                },
              })}
              className="bg-[#0F0F0F] text-default border-[3px] border-[#262626] rounded-md resize-none p-4 w-full"
              placeholder="Write your name here"
            />
            {errors.userName && <span>{errors.userName.message}</span>}
          </div>
          <div className="flex flex-col gap-4">
            <label
              className="text-default text-base lg:text-2xl font-bold"
              htmlFor="review"
            >
              Write Your Review
            </label>
            <textarea
              id="review"
              rows="5"
              {...register("message", {
                required: true,
                minLength: {
                  value: 3,
                  message: "The review must be more than 1 word",
                },
              })}
              className="bg-[#0F0F0F] text-default border-[3px] border-[#262626] rounded-md resize-none p-4 w-full"
              placeholder="Write your review here"
            />
            {errors.review && <span>{errors.review.message}</span>}
          </div>
          <button
            type="button"
            className="text-center bg-[#E50000] text-white text-base font-semibold rounded-md px-5 py-3.5 cursor-pointer hover:bg-[#e50000eb] transition-colors w-full sm:w-[250px] mx-auto"
          >
            Send
          </button>
        </form>
        <MdClose
          className="absolute top-1 right-1 lg:top-4 lg:right-4 fill-[#999] w-6 h-6 cursor-pointer"
          onClick={handleModalClose}
        />
      </div>
    </div>
  );
};

export default ModalReviewsForm;
