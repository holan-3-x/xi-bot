import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import WinBox from "react-winbox";
import React, { useState, useEffect } from "react";
// import SignUpForm from "./SignUpForm";
import BackGroundVid from "./dump/BackGroundVid";
import BackgroundSelector from "./dump/BackgroundSelector";
``;
import Developers from "./Developers";
import GifSelector from './GifSelector';

function Navbar({handleGifSelect }) {
    const [winBoxStates, setWinBoxStates] = useState({
        login0: false,
        login1: false,
        login2: false,
        login3: false,
        login4: false,
    });

    const openWinBox = (title: string) => {
        setWinBoxStates((prevStates) => ({ ...prevStates, [title]: true }));
    };

    const closeWinBox = (title: string) => {
        setWinBoxStates((prevStates) => ({ ...prevStates, [title]: false }));
    };
    function getCurrentDate(): string {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();
        return formattedDate;
    }

    const currentDateString: string = getCurrentDate();

    return (
        <nav className=" p-1 pb-2 backdrop-blur bg-white/10 mx-5 mb-5 rounded-b-xl drop-shadow-lg shadow-2xl text-gray-100">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between ">
                <a
                    href="#"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e065829d-fc32-4289-a2af-e68fd8cb079d/dg96ekl-7ff10160-9050-4a8a-af06-ad97af46fbe5.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UwNjU4MjlkLWZjMzItNDI4OS1hMmFmLWU2OGZkOGNiMDc5ZFwvZGc5NmVrbC03ZmYxMDE2MC05MDUwLTRhOGEtYWYwNi1hZDk3YWY0NmZiZTUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.h94JLLgRA_w2ngBcY_2qXszwKBqz1c5OJDkhl2HWT4Y"
                        className="h-9"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Succinctum 
                    </span>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto "
                    id="navbar-default"
                >
                    <ul
                        className="font-medium flex flex-col md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-black/20 rounded"
                        style={{ paddingLeft: "6px", paddingRight: "6px" }}
                    >
                        {/* <li>
                            <div className="z-10">
                                <button
                                    onClick={() => openWinBox("login0")}
                                    className=" "
                                >
                                    Sign-Up
                                </button>
                                {winBoxStates["login0"] && (
                                    <WinBox
                                        title="login0"
                                        width={335}
                                        height={500}
                                        x={100}
                                        y={50}
                                        noResize={false}
                                        background="linear-gradient(90deg, rgba(173,11,4,1) 20%, rgba(160,201,151,1) 90%)"
                                        onclose={() => closeWinBox("login0")}
                                    >
                                        <BackGroundVid />
                                        <SignUpForm />
                                    </WinBox>
                                )}
                            </div>
                        </li> */}
                        {/* <li>
              <div className="z-10">
                <button onClick={() => openWinBox("login1")}>Select-Bg</button>
                {winBoxStates["login1"] && (
                  <WinBox
                    title="login1"
                    width={260}
                    height={497}
                    x={620}
                    y={125}
                    noResize={false}
                    background="linear-gradient(90deg, rgba(173,11,4,1) 20%, rgba(160,201,151,1) 90%)"
                    onclose={() => closeWinBox("login1")}
                  >
                    <BackGroundVid />

                    <BackgroundSelector />
                  </WinBox>
                )}
              </div>
            </li> */}
                        <li>
                            <div className="z-10">
                                <button onClick={() => openWinBox("login3")}>
                                    Developers
                                </button>
                                {winBoxStates["login3"] && (
                                    <WinBox
                                        title="login3"
                                        width={350}
                                        height={497}
                                        x={100}
                                        y={50}
                                        noResize={true}
                                        background="linear-gradient(90deg, rgba(173,11,4,1) 20%, rgba(160,201,151,1) 90%)"
                                        onclose={() => closeWinBox("login3")}
                                    >
                                        <Developers />
                                    </WinBox>
                                )}
                            </div>
                        </li>

                        <li>
                            <div>
                                {currentDateString}

                                {/* <span id="span"></span> */}
                            </div>
                        </li>
                        <li>

                        <GifSelector onSelect={handleGifSelect} />

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
