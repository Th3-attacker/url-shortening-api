import imageHero from "../../public/images/illustration-working.svg";
export default function Hero() {
  return (
    <>
      <section className="py-10 lg:py-20">
        <div className="grid grid-cols-1 gap-5 max-width md:grid-cols-2 md:gap-10 md:place-items-center">
          <article className="text-center md:text-left">
            <h1 className="mb-6 text-5xl font-bold lg:text-6xl text-slate-800">
              More than just shorter links
            </h1>
            <p className="mb-10 lg:text-lg text-slate-400">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="rounded-full btn-cta">Get Started</button>
          </article>
          <article>
            <img src={imageHero} />
          </article>
        </div>
      </section>
    </>
  );
}
