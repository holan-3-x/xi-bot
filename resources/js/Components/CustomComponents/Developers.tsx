import React from "react";

export default function SignUpForm() {
    return (
        <>
            <img
                src="https://i.pinimg.com/originals/a3/e1/46/a3e1462ce283d8694e0458336d1c0e59.gif"
                alt=""
                className="absolute -z-10 w-full h-full bg-cover object-cover"
            />
            <div className="">
                <ul className="z-10">
                    <div className="grid grid-cols-2">
                        <li className="col-span-1 row-span-1">
                            <div className="flex flex-col items-center justify-center">
                                <div className="backdrop-blur bg-white/0 m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3">
                                    <img
                                        src="https://i.pinimg.com/originals/91/66/6e/91666e9a153d15052a86a55903569c89.gif"
                                        alt=""
                                        className="bg-cover h-min w-min rounded"
                                    />
                                    <label
                                        htmlFor=""
                                        className="text-white flex align-middle justify-center"
                                    >
                                        Holan
                                        {/* <br /> */}
                                        {/* Dev Ops & Project Manager */}
                                    </label>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center">
                                <div className="backdrop-blur bg-white/0 m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3">
                                    <img
                                        src="https://i.pinimg.com/564x/19/18/0a/19180a35be4561ed7bde1a61e85046ee.jpg"
                                        alt=""
                                        className="bg-cover h-min w-min rounded"
                                    />
                                    <label
                                        htmlFor=""
                                        className="text-white flex align-middle justify-center"
                                    >
                                        Sava
                                        {/* <br />
                    Big Sis and Designer */}
                                    </label>
                                </div>
                            </div>
                        </li>

                        <li className="col-span-1 row-span-1">
                            <div className="flex flex-col items-center justify-center">
                                <div className="backdrop-blur bg-white/0 m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3">
                                    <img
                                        src="https://i.pinimg.com/564x/c2/99/f8/c299f80407ef02701b4525c490eb4a51.jpg"
                                        alt=""
                                        className="bg-cover h-min w-min rounded"
                                    />
                                    <label
                                        htmlFor=""
                                        className="text-white flex align-middle justify-center"
                                    >
                                        Ahmed
                                        {/* <br />
                        BackEnd Specialist */}
                                    </label>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-center align-middle">
                                <div className="backdrop-blur bg-white/0 m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3">
                                    <img
                                        src="https://i.pinimg.com/originals/23/17/14/231714e953b3482067337f40c7f8af7f.gif"
                                        alt=""
                                        className="bg-cover h-min w-min rounded block"
                                    />
                                    <label
                                        htmlFor=""
                                        className="text-white flex align-middle justify-center"
                                    >
                                        ibo
                                        {/* <br />
                    FrontEnder */}
                                    </label>
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    );
}
