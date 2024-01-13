import React from "react";
import ButtonComponent from "./Header";
function HomeComponent(){
    return(
        <>
        <ButtonComponent/>
        <section className="mt-20">
            <div className="flex items-center justify-center">
                This is Home Section
            </div>
            <div className="items-center flex justify-center">
                <img src="https://thumbs.dreamstime.com/b/hands-holding-word-home-concept-47349026.jpg"></img>
            </div>
        </section>
        </>
    );
}

export default HomeComponent;