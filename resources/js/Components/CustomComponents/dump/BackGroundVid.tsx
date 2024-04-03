import sample from "../../aIPz2Bh.gif";

export default function BackGroundVid() {
    return (
        <img
            src={sample}
            alt=""
            className="absolute -z-10 w-full h-full bg-cover object-cover"
        />
    );
}
