import React from "react";



const Blog = () =>{
    return(
        <div name="blog" className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white">

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full">

                <div className="pb-6">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-800 ">
                        Blog
                    </p>
                </div>
                <p className="text-xl mt-20">
                    <strong>Currently on my Learning Path:</strong>
                </p>
                <ul className="list-disc pl-6 text-xl mt-4">
                    <li>EdX: Harvard Tiny Machine Learning (TinyML) Deployment</li>
                    <li>Linkedin: Artificial Intelligence Foundations: Machine Learning</li>
                    <li>Google Analytics Certification</li>
                </ul>


            </div>
        </div>

    );
};
export default Blog;