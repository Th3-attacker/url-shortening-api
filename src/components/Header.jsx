import logo from "../../public/images/logo.svg";
export default function Header() {
  return (
    <>
      <header className="max-width ">
        <div>
          <img src={logo} alt="" />
          <nav className="">
            <ul className="">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="">
          <li>
            <button>Login</button>
          </li>
          <li>
            <button className="rounded-full btn-cta">Sing Up</button>
          </li>
        </ul>
      </header>
    </>
  );
}
