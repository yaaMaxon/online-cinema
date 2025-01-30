"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { IReviews } from "../../types/review";
import { AiFillStar } from "react-icons/ai";
import { MdClose } from "react-icons/md";

type Props = {
  setModalState: (state: boolean) => void;
  isModalOpen: boolean;
};

const ModalReviewsForm = ({ setModalState, isModalOpen }: Props) => {
  const defaultValues = {
    userName: "",
    rating: 6,
    review: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IReviews>({ defaultValues });

  const rating = watch("rating");

  const onSubmit: SubmitHandler<IReviews> = (data) => {
    console.log(data);

    reset();
  };

  const handleModalClose = () => {
    setModalState(false);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed left-0 top-0 w-full h-full bg-black/30 backdrop-blur-sm z-[100] flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative w-full max-w-[600px] p-4 sm:p-8 bg-[#1A1A1A] border-[3px] border-[#262626] rounded-md mx-4"
          >
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
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
                      onClick={() => {
                        setValue("rating", star * 2);
                      }}
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
                {errors.userName && (
                  <span className="text-[#E50000]">
                    {errors.userName.message}
                  </span>
                )}
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
                  rows={5}
                  {...register("review", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "The review must be more than 1 word",
                    },
                  })}
                  className="bg-[#0F0F0F] text-default border-[3px] border-[#262626] rounded-md resize-none p-4 w-full"
                  placeholder="Write your review here"
                />
                {errors.review && (
                  <span className="text-[#E50000]">
                    {errors.review.message}
                  </span>
                )}
              </div>
              <button className="text-center bg-[#E50000] text-white text-base font-semibold rounded-md px-5 py-3.5 cursor-pointer hover:bg-[#e50000eb] transition-colors w-full sm:w-[250px] mx-auto">
                Send
              </button>
            </form>
            <MdClose
              className="absolute top-1 right-1 lg:top-4 lg:right-4 fill-[#999] w-6 h-6 cursor-pointer"
              onClick={handleModalClose}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalReviewsForm;
