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
                My current focus is on expanding my knowledge in Automation.
                Currently, I am actively engaged in an online course offered by Harvard, specifically delving into the realm of Tiny Machine Learning (TinyML).
                The course commences with an exploration of the ethical implications and responsibilities associated with programming in this domain.
                Subsequently, it provides detailed insights into distinguishing between data storage in the cloud and local environments.

                My approach involves a hands-on learning experience, with practical projects anticipated as an outcome of this comprehensive course.
            </p>
            <br/>
            <p className="text-xl">

            </p>

        </div>
    </div>

    );
};
export default About;