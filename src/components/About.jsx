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
                Results-driven Data Analyst at Be Well, Texas with a strong foundation in Computer Science and advanced
                studies in Computer Information Systems (M.S. candidate, Texas A&M International University). Experienced
                in leveraging AI tools to architect automated data pipelines, streamline data collection processes, and uncover actionable trends that drive data-informed business decisions.
            </p>
            <br/>
            <p className="text-xl">

            </p>

        </div>
    </div>

    );
};
export default About;