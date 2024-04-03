import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-1 pb-2 backdrop-blur bg-black/30 mx-5 mb-5 rounded drop-shadow-lg shadow-2xl text-gray-100 ">
                <div className="flex justify-center">
                    <Link href="/" className="flex items-center justify-center">
                        <ApplicationLogo className="w-20 h-20 fill-current text-red-500" />
                    </Link>
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
