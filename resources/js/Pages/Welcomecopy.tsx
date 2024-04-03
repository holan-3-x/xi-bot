import React, { useState, useEffect } from "react";
import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import WinBox from "react-winbox";
// import { WinBoxWrapper } from "../Components/IboComponents/WinBoxWrapper";
import navbar from "../Components/CustomComponents/Navbar";
// import axios from "axios";
// import sample from './repair-  services-robot-future-live-wallpaper-1.mp4';
import BackGroundVid from "../Components/CustomComponents/dump/BackGroundVid";
import Navbar from "../Components/CustomComponents/Navbar";
import NavbarStart from "../Components/CustomComponents/Navbarforstart";
import IconsApps from "../Components/CustomComponents/IconApps";
// import "../public/Font/FreePixel.ttf";
// import "../public/Font/FreePixel.ttf";
// import { RightClickMenu } from "../Components/IboComponents/RightClickMenu/RightClickMenu";
// import { Test } from "../Components/IboComponents/Test";
import CustomMenu from "../Components/CustomComponents/dump/CustomMenu";
import DefaultGifchose from "../Components/aIPz2Bh.gif";
// import BackgroundSelector from "../Components/IboComponents/BackgroundSelector";
import GifSelector from "../Components/CustomComponents/GifSelector";

import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const [selectedGif, setSelectedGif] = useState("");

    const handleGifSelect = (url) => {
        const defaultGif = DefaultGifchose; // Replace with your default GIF URL
        const selectedUrl = url || defaultGif;

        setSelectedGif(selectedUrl);

        // Set background image and additional styling properties
        document.body.style.backgroundImage = `url('${selectedUrl}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.zIndex = "-10";
        document.body.className =
            "absolute -z-10 w-full h-full bg-cover object-cover";
    };
    // Choose a default GIF when the component mounts
    useEffect(() => {
        handleGifSelect(DefaultGifchose); // Replace with your default GIF URL
    }, []);

    return (
        <div className="h-screen">
            <Head title="Welcome" />
            {/* <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"> */}

            {/* <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end"> */}
            {auth.user ? (
                <Navbar
                    handleGifSelect={handleGifSelect}
                    user={auth.user}
                    header={
                        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                            Dashboard
                        </h2>
                    }
                />
            ) : (
                <NavbarStart handleGifSelect={handleGifSelect} />
            )}
            {/* <IconsApps /> */}
            <CustomMenu items={["Abort C:/"]} />
            {/* <div className=""> */}

            {/* TODO: Ibo fix the top and bottom of the shadow to be nicer */}
            <div className="flex items-center justify-center h-5/6  ">
                <div className="h-96 flex flex-col items-center justify-center backdrop-blur bg-black/20 rounded-3xl drop-shadow-2xl shadow-2xl max-w-2xl mx-auto p-6">
                    {auth.user ? (
                        <>
                            <div>
                                <p className="text-xl font-bold text-blue-500 mb-4 px-3">
                                    Welcome back to our Document Summarization
                                    Platform, {auth.user.name}!
                                </p>
                                <div className="flex justify-center">
                                    <Link
                                        href={route("dashboard")}
                                        className="bg-blue-500 mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                                    >
                                        Dashboard
                                    </Link>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="text-2xl font-bold text-blue-500 mb-4">
                                Welcome to our Document Summarization Platform!
                            </p>
                            <p className="text-lg mb-4 text-neutral-100">
                                Elevate your learning with efficient tools.
                                Students enjoy collaborative spaces, a resource
                                library, personalized learning paths, and
                                real-world projects.{" "}
                                <span className="italic">
                                    Log in or register
                                </span>{" "}
                                to unlock these features. Let's simplify
                                learning together! 🚀📚💻
                            </p>
                            <div className="flex justify-center">
                                <Link
                                    href={route("login")}
                                    className="bg-blue-500 px-6 mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="bg-transparent px-4 ml-4 mb-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded"
                                >
                                    Register
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* </div> */}

            {/* <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style> */}
        </div>
    );
}
