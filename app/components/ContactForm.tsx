"use client"
import React from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
interface formValues{
    name:string,
    email:string,
    message:string
}
const ContactForm = () => {
    const schema = yup.object().shape({
        name:yup.string().min(2,"The name must be of 2 characters least").required(),
        email:yup.string().email("Please enter a valid email").required(),
        message:yup.string().min(2,"The message must be of 2 characters least").required()
    })
    const {register,handleSubmit,formState:{errors}}=useForm<formValues>({
        resolver:yupResolver(schema)
    })
    const onSubmit = (data:formValues)=>{
        console.log(data);
    }
  return (
    <form className="flex items-end gap-5 w-full lg:w-[calc(50%-20px)] flex-col " onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <label className="text-gray-700">Name</label>
        <div>
          <input className="min-w-full bg-inherit border-b-[2px] focus:outline-none text-white" {...register("name")} />
        </div>
      </div>
      <p className="text-[red]">{errors.name?.message}</p>
      <div className="w-full">
        <label className="text-gray-700">E-mail Address</label>
        <div>
          <input className="min-w-full bg-inherit border-b-[2px] focus:outline-none text-white" {...register("email")}/>
        </div>
      </div>
      <p className="text-[red]">{errors.email?.message}</p>
      <div className="w-full">
        <label className="text-gray-700">Message</label>
        <div>
          <textarea className="min-w-full bg-inherit border-b-[2px] h-[100px] focus:outline-none text-white" {...register("message")}></textarea>
        </div>
      </div>
      <p className="text-[red]">{errors.message?.message}</p>
      <div className="hover:scale-110 duration-700 transition-transform">
        <button
          className=""
          type="submit"
          style={{
            background: "rgb(31, 98, 250)",
            color: "white",
            borderRadius: "16px 0px",
            padding: "10px 25px",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          SEND MESSAGE
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
