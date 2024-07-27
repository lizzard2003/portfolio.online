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
                I am a recent graduate of Texas State University with a degree in Computer Science.
                My current focus is on expanding my knowledge in data analysis. I am actively engaged in an online
                course offered by Harvard, specifically delving into the realm of Tiny Machine Learning (TinyML), while
                simultaneously obtaining a data analytics certification from Google.

            </p>
            <br/>
            <p className="text-xl">

            </p>

        </div>
    </div>

    );
};
export default About;