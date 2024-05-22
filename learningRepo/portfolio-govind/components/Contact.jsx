import React from "react";
import SocialMedia from "./SocialMedia";
import FormInput from "./FormInput";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";


const Contact = () => {
  return (
    <div id='contact' className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#2c69af]">
          Contact
        </p>
        <h2 className="py-4"> Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left*/}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={`https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2096&q=80`}
                  alt="Icon"
                />
              </div>
              <div>
                <h2 className="py-2">Name here</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  {" "}
                  I am available for full-time positions. Contact me and lets
                  talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <SocialMedia
                  parentDivClassName={"py-4"}
                  childDivClassName={" p-6 hover:scale-110"}
                />
              </div>
            </div>
          </div>
          {/* right*/}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form action="https://getform.io/f/6de3807a-2f35-46e9-b460-0a9e4139fd8e" method="POST">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <FormInput title={"name"} inputType="text" nameType='name' />
                  <FormInput title={"phone number"} inputType="number" nameType='phone' />
                </div>
                <FormInput
                  title={"email"}
                  inputType="email"
                  mainClassName={"py-2"}
                  nameType='email'
                />
                <FormInput
                  title={"subject"}
                  inputType="text"
                  mainClassName={"py-2"}
                  nameType='subject'
                />
                <FormInput
                  title={"Message"}
                  inputType="text"
                  mainClassName={"py-2"}
                  Message
                  nameType='message'
                />
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href={"/"}>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer ease-in duration-300 hover:scale-110">
              <HiOutlineChevronDoubleUp className="text-[#2c69af]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
