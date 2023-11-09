// import React from "react";
import { BiPaperPlane } from "react-icons/bi";

// import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsLetter = () => {
  // const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    console.log(email);
    if (email) {
      toast("Subscribe SuccessFul");
    }
  };

  return (
    <div className="flex  py-14 lg:flex-row flex-col items-center gap-10 mx-5 ">
      <div className=" w-full lg:flex-1  py-5 lg:pl-16 space-y-4">
        <h1 className="text-5xl font-semibold text-[#FFFFFF]">Newsletter</h1>
        <p className="text-lg font-medium text-[#d1ac3c]">
          Subscribe the newsletter to get updates and promotions
        </p>
      </div>
      <div className="  w-full lg:flex-1 py-5 lg:pl-16">
        {/* //onSubmit={handleSubmit} */}
        <form onSubmit={handleSubmit} className="flex items-center pr-5 ">
          <input
            aria-label="Your email address"
            name="email"
            placeholder="Your email address"
            required
            type="email"
            // onChange={handleEmailChange}
            // value={email}
            className=" font-semibold text-[#232222] h-14 w-full bg-white px-5 py-10 text-lg"
          />
          <button className=" rounded-sm py-10 ml-5 btn  text-[#d1ac3c] hover:text-[#000000]   btn-outline hover:btn-warning border-[#d1ac3c]">
            <BiPaperPlane className="text-2xl  "></BiPaperPlane>
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewsLetter;
