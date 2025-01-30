"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { ISupportForm } from "@/app/types/support";
import supportListFilm from "@/assets/supportListFilm.webp";
import Image from "next/image";

const SupportMain = () => {
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreeToTerms: false,
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

  return (
    <div className="flex flex-col lg:flex-row gap-[50px]">
      <div className="lg:w-[429px]">
        <h1 className="text-white text-[28px] font-bold mb-2 lg:text-[38px]">
          Welcome to our support page!
        </h1>
        <p className="text-default text-sm font-medium mb-10 lg:text-base">
          We`re here to help you with any problems you may be having with our
          product.
        </p>
        <Image
          src={supportListFilm}
          alt="support picture"
          className="bg-[#0F0F0F] border border-[#262626] rounded-md"
        ></Image>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#0F0F0F] p-6 lg:p-10 border border-[#262626] rounded-[10px] flex flex-col gap-5 lg:gap-10 lg:flex-grow xl:grid xl:grid-cols-2 xl:grid-rows-[auto auto auto auto] xl:gap-x-6 xl:gap-y-4"
        autoComplete="off"
      >
        <div className="flex flex-col gap-3">
          <label
            htmlFor="firstName"
            className="text-white leading-6 font-semibold"
          >
            First Name
          </label>
          <input
            className="bg-[#141414] border border-[#262626] rounded-md p-4 text-white placeholder:text-default placeholder:leading-[21px]"
            id="firstName"
            {...register("firstName", {
              required: "This field is required!",
              minLength: {
                value: 3,
                message: "The name must be more than 3 symbols",
              },
            })}
            placeholder="Enter First Name"
          />
          {errors.firstName && (
            <span className="text-red-600 font-medium">
              {errors.firstName.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="lastName"
            className="text-white leading-6 font-semibold"
          >
            Last Name
          </label>
          <input
            className="bg-[#141414] border border-[#262626] rounded-md p-4 text-white placeholder:text-default placeholder:leading-[21px]"
            id="lastName"
            {...register("lastName", {
              required: true,
              minLength: {
                value: 3,
                message: "The name must be more than 3 symbols",
              },
            })}
            placeholder="Enter Last Name"
          />
          {errors.lastName && (
            <span className="text-red-600 font-medium">
              {errors.lastName.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-white leading-6 font-semibold">
            Email
          </label>
          <input
            className="bg-[#141414] border border-[#262626] rounded-md p-4 text-white placeholder:text-default placeholder:leading-[21px]"
            id="email"
            {...register("email", {
              required: true,
              minLength: {
                value: 3,
                message: "The name must be more than 8 symbols",
              },
            })}
            placeholder="Enter your Email"
          />
          {errors.email && (
            <span className="text-red-600 font-medium">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="phone" className="text-white leading-6 font-semibold">
            Phone Number
          </label>
          <input
            className="bg-[#141414] border border-[#262626] rounded-md p-4 text-white placeholder:text-default placeholder:leading-[21px]"
            id="phone"
            {...register("phone", {
              required: true,
              minLength: {
                value: 3,
                message: "The name must be more than 6 symbols",
              },
            })}
            placeholder="Enter Phone Number"
          />
          {errors.phone && (
            <span className="text-red-600 font-medium">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3 col-span-2">
          <label
            htmlFor="message"
            className="text-white leading-6 font-semibold"
          >
            Message
          </label>
          <textarea
            className="bg-[#141414] border border-[#262626] rounded-md p-4 text-white placeholder:text-default placeholder:leading-[21px] resize-none"
            id="message"
            rows={5}
            {...register("message", {
              required: true,
              minLength: {
                value: 3,
                message: "The message must be more than 1 word",
              },
            })}
            placeholder="Enter your Message"
          />
          {errors.message && (
            <span className="text-red-600 font-medium">
              {errors.message.message}
            </span>
          )}
        </div>

        <div className="hidden xl:flex items-center gap-2">
          <input
            className="bg-[#0F0F0F] border border-[#262626] rounded-[4px]"
            type="checkbox"
            id="agreeToTerms"
            {...register("agreeToTerms", {
              required: "You must agree to the terms and conditions",
            })}
          />
          <label htmlFor="agreeToTerms" className="text-default leading-6">
            I agree with Terms of Use and Privacy Policy
          </label>
          {errors.agreeToTerms && (
            <span className="text-red-600 font-medium">
              {errors.agreeToTerms.message}
            </span>
          )}
        </div>

        <div>
          <button className="bg-[#E50000] rounded-md text-white font-semibold leading-5 px-5 py-[14px] w-full hover:bg-[#e50000eb]">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupportMain;
