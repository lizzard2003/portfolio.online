import React from "react";

const About = () =>{
    return(
    <div name="about" className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white">

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full">

            <div className="pb-6">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                    About
                </p>
            </div>
            <p className="text-xl mt-20">
                I am a recently graduated Computer Science major with a burning passion for technology and a relentless drive to innovate.
                The rapidly evolving landscape of the tech industry excites me, and I eagerly anticipate the future that holds countless opportunities for groundbreaking advancements.
                With a strong foundation in computer science principles and a curious mind, I am determined to contribute my skills and knowledge to push the boundaries of what is possible.
                I am ready to embrace the challenges and discoveries that lie ahead, fueled by my unwavering enthusiasm for the ever-evolving world of technology.
            </p>
            <br/>
            <p className="text-xl">

            </p>

        </div>
    </div>

    );
};
export default About;