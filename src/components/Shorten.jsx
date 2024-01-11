import bgShortenMobile from "../../public/images/bg-shorten-mobile.svg";
import bgShortenDesktop from "../../public/images/bg-shorten-desktop.svg";
export default function Shorten() {
  return (
    <>
      <section className="relative mx-5 max-width shorten">
        <picture>
          <source media="(min-width:768px)" srcSet={bgShortenDesktop} />
          <img src={bgShortenMobile} />
        </picture>
        <from className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center mx-auto md:flex-row">
          <div className="flex flex-col items-start text-center md:space-x-3 md:flex-row">
            <input
              type="url"
              placeholder="Shorten a link here !"
              className="w-full px-5 py-2 mb-2 rounded-lg md:mb-0 "
            />
            <button
              type="submit"
              className="w-full py-3 font-bold rounded-lg btn-cta md:w-40"
            >
              Shorten It!
            </button>
          </div>
        </from>
      </section>
      <article className="flex items-center justify-between px-5 py-5 my-5 bg-white rounded-lg shadow-lg max-width">
        <p>Hello Hello Heloo</p>
        <div className="space-x-2">
          <a>Hello</a>
          <button className="btn-cta"> Copie</button>
        </div>
      </article>
    </>
  );
}
