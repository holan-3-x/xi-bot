import { useState } from "react";

function Panel({ title, children, isActive, onShow }) {
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button
                    onClick={onShow}
                    className="bg-black/60 p-2 rounded-xl inline"
                >
                    Show
                </button>
            )}
        </section>
    );
}

export default function SignUpForm() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="backdrop-blur bg-white/0 m-5 rounded-3xl drop-shadow-lg shadow-2xl text-gray-100 w-min">
            <Panel
                title=""
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
            >
                <form action="" method="get" className="p-5 font-mono m-5">
                    <h1 className="mb-7">Sign Up</h1>
                    <label htmlFor="">username</label> <br />
                    <input type="text" className="rounded-lg text-black" />
                    <br />
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" className="rounded-lg text-black" />
                    <br />
                    <label htmlFor="">passwword</label>
                    <br />
                    <input type="text" className="rounded-lg text-black" />
                    <br />
                    <label htmlFor="">Re-Password</label>
                    <br />
                    <input type="text" className="rounded-lg text-black" />
                    <br />
                    <div className="mt-3">
                        <input type="button" value="Google" className="mx-1" />
                        <input type="button" value="Google" className="mx-1" />
                        <input type="button" value="Google" className="mx-1" />
                    </div>
                </form>
            </Panel>

            <Panel
                title=""
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                <form action="" method="get" className="p-5 font-mono m-5">
                    <h1 className="mb-7">Login</h1>
                    <br />
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" className="rounded-lg text-black" />
                    <br />
                    <label htmlFor="">passwword</label>
                    <br />
                    <input type="password" className="rounded-lg text-black" />
                    <br />
                    <div className="mt-3">
                        <input type="button" value="Google" className="mx-1" />
                        <input type="button" value="Google" className="mx-1" />
                        <input type="button" value="Google" className="mx-1" />
                    </div>
                </form>
            </Panel>
        </div>
    );
}
