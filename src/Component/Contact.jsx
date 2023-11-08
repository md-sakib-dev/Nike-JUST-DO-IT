import React, { useEffect } from "react";
import "../css/All.css";
import { MdEmail } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import shoes from '../assets/logshoes.png'
import "../Component/Contact.css"

const Contact = () => {
        useEffect(() => {
          const image = document.querySelector('.scroll-animation');
      
          const handleScroll = () => {
            if (image) {
              const imageTop = image.getBoundingClientRect().top;
              const windowHeight = window.innerHeight;
      
              if (imageTop < windowHeight / 1.5) {
                image.classList.add('animate-fade-in');
              }
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
  return (
    <div className="w-full mx-auto py-16 px-10 md:px-4" id="contact">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-center  text-[#c72092] cursor-pointer m-4 pb-2">
          CONTACT <span className="text-[#6c14d0] text-4xl">US</span>
        </h1>
        <p className="tex-2xl font-bold">Get In touch</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 mt-20">
        <div className="flex flex-col justify-between items-center">
          <p className=" font-serif md:text-center">
            Feel free to get in touch with us. Whether you have questions,
            feedback, or want to discuss collaboration opportunities, our team
            is here to assist you. <br /> We value your input and are committed
            to providing exceptional support. You can reach us through email,
            phone, or the contact form on our website. Your inquiries are
            important to us, and we strive to respond promptly. Your
            satisfaction is our priority, and we look forward to hearing from
            you. Thank you for considering us as your trusted partner. Let's
            connect and explore the possibilities together
          </p>
          <div className="flex gap-4 text-center mt-6 " >
            <MdEmail size={20} />
            <BsTwitter size={20} />
          </div>
          <h1 className="mt-7 font-bold">Write me a Message</h1>

          <div className="w-full max-w-md mx-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="youremail@example.com"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                 
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          
      
      <section className="py-8">
        <div className="container mx-auto">
          <img className="scroll-animation hidden md:block" src={shoes} alt="Shoes" />
        </div>
      </section>
      
     
        </div>
      </div>
    </div>
  );
};

export default Contact;
