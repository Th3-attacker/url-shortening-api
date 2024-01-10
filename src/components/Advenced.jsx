import brand from "../../public/images/icon-brand-recognition.svg";
import detailed from "../../public/images/icon-detailed-records.svg";
import fully from "../../public/images/icon-fully-customizable.svg";
export default function Advenced() {
  return (
    <>
      <section className="py-10 bg-gray-100 lg:pt-20 lg:pb-20">
        <div className="max-width">
          <h2 className="mb-3 text-4xl font-bold text-center text-slate-800">
            Advenced statistics
          </h2>
          <p className="mb-10 text-center text-slate-400 lg:mb-20">
            Track how your links are performing across the web <br /> with our
            advanced statistics dashboard.
          </p>
          <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="absolute hidden w-full h-2 lg:flex top-1/2 bg-cyan-500"></div>
            <article className="relative p-5 bg-white rounded ">
              <img
                src={brand}
                className="p-4 rounded-full -mt-14 bg-slate-800"
              />
              <h3 className="mt-5 mb-2 text-lg font-bold text-slate-800">
                Brand Recognition
              </h3>
              <p className="text-sm text-slate-400">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </article>
            <article className="p-5 transform bg-white rounded lg:translate-y-8">
              <img
                src={detailed}
                className="p-4 rounded-full -mt-14 bg-slate-800"
              />
              <h3 className="mt-5 mb-2 text-lg font-bold text-slate-800">
                Detailed Records
              </h3>
              <p className="text-sm text-slate-400">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </article>
            <article className="p-5 transform bg-white rounded lg:translate-y-16">
              <img
                src={fully}
                className="p-4 rounded-full -mt-14 bg-slate-800"
              />
              <h3 className="mt-5 mb-2 text-lg font-bold text-slate-800">
                Fully Customizable
              </h3>
              <p className="text-sm text-slate-400">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
