import React, { useState, useEffect } from "react";
import WinBox from "react-winbox";
import SignUpForm from "../SignUpForm";
import BackGroundVid from "./BackGroundVid";
import SelectorTheme from "../GifSelector";

interface CustomMenuProps {
    items: string[];
}

const CustomMenu: React.FC<CustomMenuProps> = ({ items }) => {
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [position, setPosition] = useState<{ top: number; left: number }>({
        top: 0,
        left: 0,
    });
    const [winBoxStates, setWinBoxStates] = useState({
        theme: false,
    });
    const openWinBox = (title: string) => {
        console.log("Opening WinBox:", title);
        setWinBoxStates((prevStates) => ({ ...prevStates, [title]: true }));
    };

    const closeWinBox = (title: string) => {
        setWinBoxStates((prevStates) => ({ ...prevStates, [title]: false }));
    };
    useEffect(() => {
        const handleContextMenu = (event: MouseEvent) => {
            event.preventDefault();
            setMenuVisible(true);
            setPosition({ top: event.clientY, left: event.clientX });
        };
        const handleDocumentClick = () => {
            console.log("hellow");

            setMenuVisible(false);
        };
        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    return (
        <div>
            {menuVisible && (
                <div
                    style={{
                        position: "absolute",
                        top: position.top,
                        left: position.left,
                        background: "#fff",
                        border: "1px solid #ccc",
                        padding: "8px",
                        boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.2)",
                        color: "black",
                    }}
                >
                    {items.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                    <button
                        onClick={() => openWinBox("theme")}
                        className="w-auto h-min font-mono "
                        >
                        Click Me 😎
                    </button>
                </div>

                // {winBoxStates["login0"] && (
                //   <WinBox
                //     title="login0"
                //     width={350}
                //     height={497}
                //     x={100}
                //     y={50}
                //     noResize={true}
                //     background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                //     onclose={() => closeWinBox("login0")}
                //   >
                //     <BackGroundVid />
                //     <SignUpForm />
                //   </WinBox>
                // )}
            )}
            {winBoxStates["theme"] && (
                <WinBox
                    title="Empty box"
                    width={350}
                    height={497}
                    x={100}
                    y={50}
                    noResize={true}
                    background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                    onclose={() => closeWinBox("theme")}
                >
                    {/* <SelectorTheme onSelect={true}/> */}
                    
                    
                </WinBox>
            )}
        </div>
    );
};

export default CustomMenu;
