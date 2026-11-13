
import React from "react";
import HeroImage from "../assets/heropic2.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <section
            id="home"
            className="flex min-h-screen items-center justify-center bg-gray-950 px-6 py-20 md:px-16"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

                {/* Introduction */}
                <div className="flex flex-col justify-center">

                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-teal-400">
                        Data • Technology • Insights
                    </p>

                    <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-7xl">
                        Data
                        <span className="block text-teal-400">
                            Analyst
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
                        Data Analyst with a background in operations, sales, and
                        retail, combining technical expertise with business insight.
                        As a Computer Science graduate pursuing a Master’s in
                        Information Science, I use data and technology to solve
                        problems, optimize processes, and support informed
                        decision-making. I enjoy transforming complex data into
                        actionable insights, collaborating with diverse teams,
                        and exploring new technologies through independent projects.
                    </p>

                    {/* Skills */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {[
                            "SQL",
                            "Python",
                            "R",
                            "Power BI",
                            "Excel",
                            "Data Visualization",
                            "Smartsheet",
                            "Google Sheets"
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-300 transition hover:bg-teal-400/20"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">

                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="flex cursor-pointer items-center gap-2 rounded-lg bg-teal-400 px-6 py-3 font-semibold text-gray-950 transition hover:bg-teal-300"
                        >
                            View My Projects
                            <FaArrowRight />
                        </Link>

                        <a
                            href="#resume"
                            className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition hover:border-teal-400 hover:text-teal-400"
                        >
                            View Résumé
                        </a>

                    </div>
                </div>

                {/* Profile Image */}
                <div className="flex items-center justify-center">

                    <div className="relative flex items-center justify-center">

                        {/* Background glow */}
                        <div className="absolute h-72 w-72 rounded-full bg-teal-400/20 blur-3xl sm:h-96 sm:w-96" />

                        {/* Profile image */}
                        <img
                            src={HeroImage}
                            alt="Profile portrait"
                            className="relative z-10 w-64 rounded-full border-4 border-teal-400/30 object-cover shadow-2xl sm:w-80 md:w-96"
                        />

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Home;
