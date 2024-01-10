import facebook from "../../public/images/icon-facebook.svg";
import twitter from "../../public/images/icon-twitter.svg";
import pinterest from "../../public/images/icon-pinterest.svg";
import footer_logo from "../../public/images/footer-logo.svg";
import instagram from "../../public/images/icon-instagram.svg";
export default function Footer() {
  return (
    <>
      <footer className="bottom-0 py-10 bg-slate-800 lg:py-20">
        <div className="grid grid-cols-1 gap-5 max-width md:grid-cols-3 lg:grid-cols-5">
          <article>
            <img src={footer_logo} />
          </article>
          <article>
            <h3 className="text-lg font-bold tracking-wide text-white">
              Features
            </h3>
            <ul>
              <li>
                <button className="mt-1 text-sm text-slate-200">
                  Link Shortening
                </button>
              </li>
              <li>
                <button className="mt-1 text-sm text-slate-200">
                  Branded Links
                </button>
              </li>
              <li>
                <button className="mt-1 text-sm text-slate-200">
                  Analytics
                </button>
              </li>
            </ul>
          </article>
          <article>
            <h3 className="text-lg font-bold tracking-wide text-white">
              Resources
            </h3>
            <ul>
              <li>
                <button className="mt-1 text-sm text-slate-200"> Blog</button>
              </li>
              <li>
                <button className="mt-1 text-sm text-slate-200">
                  Developers
                </button>
              </li>
              <li>
                <button className="mt-1 text-sm text-slate-200">Support</button>
              </li>
            </ul>
          </article>
          <article>
            <h3 className="text-lg font-bold tracking-wide text-white">
              Company
            </h3>
            <ul>
              <li>
                <button className="mt-1 text-sm text-slate-200"> About</button>
              </li>
              <li>
                <button className="mt-1 text-sm text-slate-200">
                  {" "}
                  Our Team
                </button>
              </li>
              <li>
                <button className="mt-1 text-sm text-slate-200">Careers</button>
              </li>
              <li>
                <button className="mt-1 text-sm text-slate-200">Contact</button>
              </li>
            </ul>
          </article>
          <article>
            <ul className="flex items-center">
              <li>
                <img src={facebook} alt="" />
              </li>
              <li className="ml-4">
                <img src={twitter} alt="" />
              </li>
              <li className="mx-5">
                <img src={pinterest} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  );
}
