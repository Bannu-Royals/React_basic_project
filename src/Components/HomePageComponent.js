import React from "react";
import ButtonComponent from "./Header";

function HomeComponent(){
    return (
        <>
            <div className="bg-gradient-to-b from-white to-cyan-300 h-screen flex justify-center items-center text-center">
            <a className="text-black" href="/button"> CLICK HERE TO OPEN MY PAGE</a>
            </div>
        </>
    );
}

export default HomeComponent;