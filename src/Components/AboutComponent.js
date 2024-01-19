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
                    <img className="mt-8 w-[80%] md:w-[50%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST90I5FwPaedIrm47BuNE1ydu5pES0ABmZtI9ETeun10d_t6BEL4GPwHg0IR9GAwgryVM&usqp=CAU" alt=""></img>
                </div>
            </section>
        </>
    );

}

export default AboutComponent;