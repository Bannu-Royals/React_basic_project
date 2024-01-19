import React from "react";
import { Link, Element } from "react-scroll";
import ButtonComponent from "./Header";

const MailComponent = () => (
  <>
    <ButtonComponent />

    <section className="flex flex-col items-center justify-center">
      <img
        className="mt-8"
        src="https://thumbs.dreamstime.com/b/multiethnic-group-people-holding-letter-email-concept-43697983.jpg"
        alt=".."
      />
      <div>
        <Link to="form" smooth duration={500}>
          <img
            className="w-8 mt-16 md:mt-4 mb-72 md:w-12 ml-4 md:ml-16 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/128/120/120902.png"
            alt=".."
          />
        </Link>
      </div>
    </section>

    <Element name="form">
      <section className="h-screen flex items-center justify-center">
        <div className="w-[85%] h-[60%] sm:w-[60%] rounded-xl flex items-center justify-center flex-col gap-8 bg-gradient-to-t from-slate-50 to-cyan-500 shadow-lg">
          {/* <img className="w-[30%]" src="https://premierepro.net/wp-content/uploads/2008/12/SendEmail.png" alt="..."/> */}
          <p className="text-2xl lg:text-3xl">What's in your mind 🤔💭..?</p>
          <input type="email" className=" w-[70%] md:w-[50%] py-2 border-2 border-cyan-500 text-center rounded-xl" placeholder="enter your email here..." />
          <textarea className="md:w-[50%] w-[70%] border-2 border-cyan-500  py-2 rounded-xl text-center" placeholder="Your Comments here.."></textarea>

          <button type="submit" className=" w-[70%] md:w-[25%] border-2 border-cyan-500 py-3 text-xl bg-cyan-500 rounded-md hover:border-white hover:text-black text-white">SUBMIT</button>
        </div>
      </section>
    </Element>
  </>
);

export default MailComponent;
