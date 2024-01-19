import React from "react";

function ButtonComponent() {
  return (
    <>
      <header className="bg-gradient-to-r from-cyan-200 to-cyan-500 m-4 p-4 rounded-xl sticky top-4">
        <nav className="flex  items-center justify-around sm:flex-row sm:justify-between">
          <section className="flex items-center gap-4 text-black text-opacity-100">
            <a className="hover:text-white hover:px-2 py-2 hover:bg-cyan-600 rounded-xl ease-out duration-200" href="/Home">
              Home
            </a>
            <a className="hover:text-white hover:px-2 py-2 hover:bg-cyan-600 rounded-xl ease-out duration-200" href="/About">
              About
            </a>
            <a className="hover:text-white hover:px-2 py-2 hover:bg-cyan-600 rounded-xl ease-out duration-200 " href="/Contact">
              Contact
            </a>
            <a className="hover:text-white hover:px-2 py-2 hover:bg-cyan-600 rounded-xl ease-out duration-200" href="/MailUs">
              Mail US
            </a>
          </section>
          <section>
            <button className="bg-cyan-700 p-2 rounded-xl text-white hover:p-3">
              SIGN IN
            </button>
          </section>
        </nav>
      </header>

      <section className="flex items-center justify-center">
        <img
          className="h-20 w-auto max-w-full"
          src="https://th.bing.com/th/id/OIP.Ri9qha0dcPklkGVdXmkslgHaDM?w=334&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Logo"
        />
      </section>
    </>
  );
}

export default ButtonComponent;
