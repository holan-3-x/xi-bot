import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import WinBox from "react-winbox";
import React, { useState, useEffect } from "react";
import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

function Starup() {
    const [winBoxStates, setWinBoxStates] = useState({
        welcome: true
    });
    const openWinBox = (title: string) => {
        setWinBoxStates((prevStates) => ({ ...prevStates, [title]: true }));
    };

    const closeWinBox = (title: string) => {
        setWinBoxStates((prevStates) => ({ ...prevStates, [title]: false }));
    };

    return (
        <div>
                                <button onClick={() => openWinBox("welcome")}>
                                    Welcome in Start
                                </button>
                                {winBoxStates["welcome"] && (
                                    <WinBox
                                        title="welcome"
                                        width={350}
                                        height={497}
                                        x={100}
                                        y={50}
                                        noResize={true}
                                        background="linear-gradient(90deg, rgba(173,11,4,1) 20%, rgba(160,201,151,1) 90%)"
                                        onclose={() => closeWinBox("welcome")}
                                    >
                                       <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                                    </WinBox>
                                )}
                            </div>
        );
    }


        
    export default Starup;