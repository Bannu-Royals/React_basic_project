import React from "react";
import ButtonComponent from "./Header";
function ContactComponent() {
    return (
        <>
            <ButtonComponent />
            <section className="mt-20">
                <div className="flex items-center justify-center">
                    This is Contact Section
                </div>
                <div className="items-center flex justify-center">
                    <img className="mt-8" src="https://logos.flamingtext.com/Word-Logos/contact-design-sketch-name.png"></img>
                </div>
            </section>


        </>
    );
}


export default ContactComponent;