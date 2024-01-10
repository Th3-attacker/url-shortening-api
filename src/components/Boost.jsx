import bgMobile from "../../public/images/bg-boost-mobile.svg";
import bgDesktop from "../../public/images/bg-boost-desktop.svg";
export default function Boost() {
  return (
    <>
      <section className="relative boost">
        <picture>
          <source media="(min-width:768px)" srcSet={bgDesktop} />
          <img src={bgMobile} />
        </picture>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center mx-auto">
          <h2 className="mb-5 text-3xl font-bold text-center text-white md:text-4xl">
            Boost Your links today
          </h2>
          <button className="rounded-full btn-cta">Get Started</button>
        </div>
      </section>
    </>
  );
}
