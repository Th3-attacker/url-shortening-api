import { useState } from "react";
import logo from "../../public/images/logo.svg";
import menu from "../../public/images/menu.svg";
import close from "../../public/images/close.svg";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <header className="py-5 max-width">
        <div className="flex items-center justify-between">
          <img src={logo} alt="" />
          <div className="hidden space-x-14 md:flex">
            <article className="flex items-center ">
              <nav className="hidden md:block md:ml-5">
                <ul className="flex items-start justify-start md:space-x-5">
                  <li className="text-slate-400 hover:text-slate-800">
                    <a href="#">Features</a>
                  </li>
                  <li className="my-5 md:my-0 text-slate-400 hover:text-slate-800">
                    <a href="#">Pricing</a>
                  </li>
                  <li className="text-slate-400 hover:text-slate-800">
                    <a href="#">Resources</a>
                  </li>
                </ul>
              </nav>
            </article>
            <ul className="flex items-center justify-end space-x-5">
              <li className="my-5 md:my-0 text-slate-400 hover:text-slate-800">
                <button>Login</button>
              </li>
              <li>
                <button className="rounded-full btn-cta">Sing Up</button>
              </li>
            </ul>
          </div>
          {isOpen && (
            <div className="absolute text-center rounded-lg md:flex md:items-center top-16 right-5 left-5 md:text-left bg-violet-900 text-slate-100 md:relative md:top-0 md:right-0 md:left-0 md:bg-transparent md:text-slate-700 md:py-0">
              <nav className="md:hidden md:justify-start md:items-start">
                <ul className="py-4 space-y-6 md:flex md:space-x-5">
                  <li className="text-xl font-bold tracking-wide">
                    <a href="#">Features</a>
                  </li>
                  <li className="my-5 text-xl font-bold tracking-wide md:my-0">
                    <a href="#">Pricing</a>
                  </li>
                  <li className="text-xl font-bold tracking-wide">
                    <a href="#">Resources</a>
                  </li>
                </ul>
              </nav>
              <ul className="flex flex-col py-4 space-y-3 items-enter">
                <li className="my-2 text-xl font-bold tracking-wide md:my-0">
                  <button>Login</button>
                </li>
                <li>
                  <button className="text-lg font-bold tracking-wide rounded-full btn-cta">
                    Sing Up
                  </button>
                </li>
              </ul>
            </div>
          )}
          <button onClick={handleClick} className="md:hidden">
            <img src={isOpen ? { menu } : { close }} />
            {/* {isOpen ? "menu" : "close"} */}
          </button>
        </div>
      </header>
    </>
  );
}
