import React from "react";
import ButtonComponent from "./Header";
function AboutComponent() {
    return (
        <>
            <ButtonComponent />
            <section className="mt-20">
                <div className="flex items-center justify-center">
                    This is About Section
                </div>
                <div className="items-center flex justify-center">
                    <img className="mt-12" src="https://www.freeiconspng.com/thumbs/about-us-icon/about-us-icon-15.jpg" alt=""></img>
                </div>
            </section>
        </>
    );

}

export default AboutComponent;