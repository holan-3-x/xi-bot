import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

import DefaultGifchose from "../../Components/aIPz2Bh.gif";
import { PageProps } from "@/types";
import Navbar from "@/Components/CustomComponents/Navbar";
import { File } from "buffer";
import PrimaryButton from "@/Components/PrimaryButton";
const index = ({ auth }: PageProps) => {
const { data, setData, post, processing, errors, reset,get } = useForm({
img:null,
name: "",
});
const [selectedGif, setSelectedGif] = useState('');

const handleGifSelect = (url) => {
const defaultGif = DefaultGifchose; // Replace with your default GIF URL
const selectedUrl = url || defaultGif;

setSelectedGif(selectedUrl);

// Set background image and additional styling properties
document.body.style.backgroundImage = `url('${selectedUrl}')`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundAttachment = 'fixed';
document.body.style.zIndex = '-10';
document.body.className = 'absolute -z-10 w-full h-full bg-cover object-cover';
};
// Choose a default GIF when the component mounts
useEffect(() => {
handleGifSelect(DefaultGifchose); // Replace with your default GIF URL
}, []);


const submitData = (e:any)=>{
e.preventDefault();
post("/image/upload")


}
return (
<>


    <Head title="admin" />
    <Navbar handleGifSelect={handleGifSelect} user={auth.user} header={<h2
        className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">admins</h2>} />
        
     
        
        
        <div className="flex  items-center w-screen justify-center">



            <div className="backdrop-blur bg-white/0 m-5 rounded-3xl drop-shadow-lg shadow-2xl text-gray-100 w-min ">

                <form onSubmit={(e)=>{submitData(e)}} className="p-5 font-mono m-5 text-center"
                    encType="multipart/form-data" >
                    <h1 className="mb-7 text-xl">Add Theme</h1>
                    <label htmlFor="">Image Name</label> <br />
                    <input type="text" className="text-black" name="name" onChange={(e)=>setData("name",e.target.value)}/>
                    <br /><br />
                    <label htmlFor="">Chose Image</label>
                    <br/>

                    <input type="file" name="image" accept="image/*"
                        onChange={(e)=>setData("img",e.target.files[0])}></input>
                    <br /><br />
                    <PrimaryButton type="submit">add</PrimaryButton>
                </form>
            </div>
        </div>



      {/* adding index of theme and delete button */}
   


</>

);
};

export default index;
