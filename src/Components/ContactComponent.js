import React from "react";
import { Link, Element } from "react-scroll";
import ButtonComponent from "./Header";

const ContactInfo = ({ iconSrc, text }) => (
  <div className="flex items-center justify-center flex-col mt-4">
    <img className="w-[20%] md:w-[6%] rounded-3xl" src={iconSrc} alt=".." />
    <p className="text-black text-xl">{text}</p>
  </div>
);

const ContactComponent = () => (
  <>
    <ButtonComponent />

    <Element name="contact">
      <section className="sm:h-screen">
        <div className="flex items-center justify-center mt-20 text-cyan-600 text-xl md:text-4xl">
          This is Contact Section
        </div>
        <div className="items-center flex justify-center sm:h-1/2">
          <img
            className="w-[75%] h-full mt-12 mb-8 sm:w-[88%]"
            src="https://thumbs.dreamstime.com/b/multi-ethnic-people-holding-words-contact-us-39119564.jpg"
            alt=""
          />
        </div>
        <div className="items-center flex justify-center h-auto">
          <Link to="contact" smooth duration={500}>
            <img
              className="w-8 mt-8 mb-72 md:w-12 ml-4 md:ml-16 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/128/120/120902.png"
              alt=".."
            />
          </Link>
        </div>
      </section>
    </Element>

    <Element name="contact">
      <section className="h-screen flex items-center justify-center">
        <div className="sm:h-1/2 w-[90%] sm:w-[60%] bg-gradient-to-t from-cyan-300 to-cyan-700 rounded-xl shadow-lg flex flex-col sm:flex-row">
          <div className="bg-white w-full sm:w-1/2 h-full rounded-xl flex justify-center items-center border-2 border-cyan-500">
            <p className="text-cyan-600 text-xl md:text-6xl">Contact Us</p>
          </div>
          <div className="w-full sm:w-1/2 flex-col items-center justify-center">
            <div className="flex justify-center items-center mt-4">
              <img
                className="h-[20%] md:h-[40%] w-[80%] md:w-[80%] rounded-2xl"
                src="https://media.licdn.com/dms/image/C5112AQGRTQUnIPalHw/article-cover_image-shrink_600_2000/0/1520126527343?e=2147483647&v=beta&t=QPc2vIrsg8eheEMRyDy8GwNAxmK5pN-52PLfczHCbAQ"
                alt="..."
              />
            </div>
            <div className="flex items-center justify-center flex-col mt-4">
              <ContactInfo
                iconSrc="https://www.emoji.co.uk/files/google-emojis/objects-android/7808-black-telephone.png"
                text="0880-432156"
              />
              <ContactInfo
                iconSrc="https://th.bing.com/th/id/OIP.scfgoZzDT8zBcAJiG1dxKgHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1.3"
                text="9332239932"
              />
            </div>
          </div>
        </div>
      </section>
    </Element>
  </>
);

export default ContactComponent;
