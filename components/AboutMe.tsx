import Image from "next/image";
import React from "react";
import userData from "../constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
            <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                About Me
            </h1>
        </div>
        <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900 -mt-4">
            <div className="text-container max-w-6xl mx-auto pt-20">
            <p
                className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
                style={{ lineHeight: "3rem" }}
            >
                {userData.about.title}. Currently working on{" "}
                <a
                className="bg-blue-900 rounded-md px-2 py-1 text-white"
                href={userData.about.currentProjectUrl}
                >
                {userData.about.currentProject} 🚀
                </a>
            </p>
            </div>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
            <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
                {/* Social Buttons */}
                <div className="inline-flex flex-col">
                    <div>
                        <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                            Contact
                        </h1>
                        <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                            For any sort help / enquiry, shoot me an{" "}
                            <a
                            href={`mailto:${userData.email}`}
                            className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                            >
                            email
                            </a>{" "}
                            and I&apos;ll get back!
                        </p>
                    </div>
                    <div className="mt-8">
                        <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                            Job Opportunities
                        </h1>
                        <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                            My CV / resumé is available upon request.
                        </p>
                    </div>
                    {/* Social Links */}
                    <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
                    Social Links
                    </h1>
                    <div className="mt-4 ml-4">
                        <div className="flex flex-row justify-start items-center">
                            <a
                                href={userData.socialLinks.twitter}
                                className="flex flex-row items-center space-x-4 group"
                            >
                            <div className="my-4">&rarr;</div>
                            <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                                Twitter
                            </div>
                            </a>
                        </div>
                        <div className="flex flex-row justify-start items-center">
                            <a
                                href={userData.socialLinks.github}
                                className="flex flex-row items-center space-x-4 group"
                            >
                            <div className="my-4">&rarr;</div>
                            <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                                GitHub
                            </div>
                            </a>
                        </div>
                        <div className="flex flex-row justify-start items-center">
                            <a
                            href={userData.socialLinks.linkedin}
                            className="flex flex-row items-center space-x-4 group"
                            >
                            <div className="my-4">&rarr;</div>
                            <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                                LinkedIn
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Text area */}
                <div className="col-span-1 md:col-span-2">
                    {/* {userData.about.description?.map((desc, idx) => (
                        <p
                            key={idx}
                            className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
                        >
                            {desc}
                        </p>
                    ))} */}

                    <h1 className="bg-blue-900 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
                        Tech Stack
                    </h1>
                    <div className="flex flex-row flex-wrap mt-8">
                        <Image
                            src="/js.png"
                            alt="JS"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        <Image
                            src="/ts.png"
                            alt="TS"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        <Image
                            src="/python.png"
                            alt="Python"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        <Image
                            src="/java.png"
                            alt="Java"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        <Image
                            src="/cplusplus.png"
                            alt="CPlusPlus"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        <Image
                            src="/html.png"
                            alt="HTML"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        <Image
                            src="/css.png"
                            alt="CSS"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        <Image
                            src="/react.png"
                            alt="React"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        <Image
                            src="/nextjs.png"
                            alt="NextJS"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        <Image
                            src="/git.png"
                            alt="Git"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        <Image
                            src="/docker.png"
                            alt="Docker"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        <Image
                            src="/kubernetes.png"
                            alt="Kubernetes"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        <Image
                            src="/mysql.png"
                            alt="MySQL"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        {/* TODO: Change? Doesn't look good in dark mode */}
                        <Image
                            src="/flask.png"
                            alt="Flask"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        <Image
                            src="/redis.png"
                            alt="Redis"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        <Image
                            src="/haskell.png"
                            alt="Haskell"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        <Image
                            src="/linux.png"
                            alt="Linux"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                        <Image
                            src="/figma.png"
                            alt="Figma"
                            height={80}
                            width={80}
                            className="mx-4 my-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}