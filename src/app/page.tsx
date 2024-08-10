import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-12 md:p-24 md:pr-96 h-screen overflow-auto">
      <nav className="font-serif md:fixed relative right-0 top-0 w-full md:w-64 pr-8 pt-0 md:pt-16 flex flex-col items-end justify-start">
        <Image
          alt="logo"
          width={172}
          height={0}
          src="https://images.squarespace-cdn.com/content/v1/5bd72d07ebfc7f4a2b44a896/369253fb-3cd2-42b5-b1fa-3346c00229f1/YouMeAndHeLogo-r-01.png"
        />
        <ul className="text-right py-6 hidden md:inline">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
        <div className="flex items-center gap-2 py-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-900 text-white">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-600 text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </nav>
      <section id="home" className="pb-16 text-stone-700">
        <h1 className="text-5xl font-bold font-serif pb-4">Hi there,</h1>
        <p className="pb-4 text-stone-500">
          Nice to see you! We do photography, videography, graphic design and
          web design. We&apos;d love to work with you for your next wedding, portrait
          shoot or business venture.
        </p>
        <button className="text-sm px-4 py-2 border-stone-800 border-2 border-solid hover:bg-stone-800 hover:text-stone-50">
          Connect with us
        </button>
      </section>
      <section className="pb-16">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt=""
          src="https://images.squarespace-cdn.com/content/v1/5bd72d07ebfc7f4a2b44a896/1639070768773-2WZXS8KX21VCLOFER9IH/-q18jlvQ.jpeg"
        />
      </section>
      <section id="pricing" className="w-full">
        <h2 className="font-serif text-3xl font-bold text-stone-700 pb-4">
          Pricing
        </h2>
        <p className="pb-4 text-stone-500">
          We’d love to capture your special moment to cherish for years to come.
          If any of our prices don’t seem to work well for you, please feel free
          to contact us, we’d like to work something out with you! Below you’ll
          find what we typically charge for various occasions.
        </p>
        <article className="flex items-start justify-between w-full">
          <div className="p-4">
            <Image
              alt=""
              width={280}
              height={0}
              src="https://images.squarespace-cdn.com/content/v1/5bd72d07ebfc7f4a2b44a896/1639069574016-285J18ONPFV3FIDUYL2K/_DSC3271.jpg"
            />
            <h3 className="font-bold font-serif text-xl pt-2">
              Personal (1-3)
            </h3>
            <span className="font-bold font-serif">$250-350</span>
            <ul className="list-disc pl-8 pt-2">
              <li>1-3 hour sessions</li>
              <li>25-35 high-quality images</li>
              <li>Includes 2 wardrobe changes, $20+ per location change</li>
            </ul>
          </div>
          <div className="p-4">
            <Image
              alt=""
              width={280}
              height={0}
              src="https://images.squarespace-cdn.com/content/v1/5bd72d07ebfc7f4a2b44a896/1639069574016-285J18ONPFV3FIDUYL2K/_DSC3271.jpg"
            />
            <h3 className="font-bold font-serif text-xl pt-2">
              Group (4+ people)
            </h3>
            <span className="font-bold font-serif">$300-400</span>
            <ul className="list-disc pl-8 pt-2">
              <li>1-3 hour sessions</li>
              <li>30-40 high-quality images</li>
              <li>$20+ per location change</li>
            </ul>
          </div>
          <div className="p-4">
            <Image
              alt=""
              width={280}
              height={0}
              src="https://images.squarespace-cdn.com/content/v1/5bd72d07ebfc7f4a2b44a896/1639069574016-285J18ONPFV3FIDUYL2K/_DSC3271.jpg"
            />
            <h3 className="font-bold font-serif text-xl pt-2">
              Personal (1-3)
            </h3>
            <span className="font-bold font-serif">$250-350</span>
            <ul className="list-disc pl-8 pt-2">
              <li>1-3 hour sessions</li>
              <li>25-35 high-quality images</li>
              <li>Includes 2 wardrobe changes, $20+ per location change</li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}
