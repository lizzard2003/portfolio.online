import React from "react";
const Contact = () =>{
    return(
        <div name='contact' className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center
            max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                    <p className="py-6"> Fill out and submit the form below to reach out to me </p>
                </div>
                <div className="flex justify-center items-center ">
                    <form action="https://getform.io/f/c854fd4d-d7ea-45d0-8e86-67602cea8b25" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder=" Enter you name"
                        className="p-2 bg-transparent border-2 rounded-md text-white
                        focus:outline-none"
                        />
                        <input type="text" name="email" placeholder=" Enter you email"
                               className=" my-4 p-2 bg-transparent border-2 rounded-md text-white
                        focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-2
                        rounded-md text-white focus:outline-none"
                        ></textarea>

                        <button className="text-white bg-gradient-to-b from-violet-500 to-cyan-500
                         px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ">Let's connect</button>

                    </form>
                </div>

            </div>
        </div>
    )

}
export default Contact;