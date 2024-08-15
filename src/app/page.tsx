import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Carousel from "@/components/Carousel";
import { BanknotesIcon, EnvelopeIcon, TagIcon } from "@heroicons/react/24/outline";

export default function Home() {

  const prices = [
    {
      title: "Personal (1-3 people)",
      titleColor: '#ccfbf1',
      price: "$250-350",
      image: 'https://images.squarespace-cdn.com/content/v1/5bd72d07ebfc7f4a2b44a896/1639069574016-285J18ONPFV3FIDUYL2K/_DSC3271.jpg',
      points: [
        '1-3 hour sessions',
        '25-35 high-quality images',
        'Includes 2 wardrobe changes, $20+ per location change'
      ]
    },
    {
      title: "Group (4+ people)",
      titleColor: '#ffe4e6',
      price: "$300-400",
      image: 'https://images.squarespace-cdn.com/content/v1/5bd72d07ebfc7f4a2b44a896/1639069629313-CWCHP3AC8K5LTB7GPD3W/_DSC2792.JPG',
      points: [
        '1-3 hour sessions',
        '30-40 high-quality images',
        '$20+ per location change'
      ]
    },
    {
      title: "Headshots",
      titleColor: '#dcfce7',
      price: "$50 Base Fee + $20 Per Subject",
      image: 'https://images.squarespace-cdn.com/content/v1/5bd72d07ebfc7f4a2b44a896/1656080346074-VDHSRBSH2BGRANGLKY2H/2CD00F42-B6A5-4787-8B36-8BE641E3E637.jpeg',
      points: [
        'Unlimited session time',
        '3-5 high-quality images per subject'
      ]
    },
    {
      title: "À La Carte Website",
      price: "Contact us (pricing varies)",
      image: 'https://firebasestorage.googleapis.com/v0/b/youmeandhe-b605e.appspot.com/o/Screenshot%202024-08-14%20at%2010.13.21%20PM.png?alt=media&token=856a3796-b412-4040-a6f5-9f28e335d9fa',
      points: [
        'Options of simple web design to fully hosted solution',
        'Lifetime technical support on hosted solutions',
        'Photography & graphic design discounts'
      ]
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-12 md:p-24 md:pr-96 h-screen overflow-auto">
      <nav className="font-serif md:fixed relative right-0 top-0 w-full md:w-64 pr-0 md:pr-8 pt-0 md:pt-16 flex flex-col items-end justify-start">
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
          <a href="https://www.instagram.com/you_me_and_he/" className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-600 text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/YouMeAndHeLLC" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-900 text-white">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </nav>
      <section id="home" className="pb-16 text-stone-800">
        <h1 className="text-5xl font-bold font-serif pb-4">Hi there,</h1>
        <p className="pb-4 text-stone-600">
          Nice to see you! We do photography, videography, graphic design and
          web design. We&apos;d love to work with you for your next wedding,
          portrait shoot or business venture.
        </p>
        <a href="mailto:contact@youmeandhe.com" className="text-sm px-4 py-2 border-stone-800 border-2 border-solid hover:bg-stone-800 hover:text-stone-50 inline-flex gap-1 items-center">
          <EnvelopeIcon className="h-6 w-6"/>
          Connect
        </a>
      </section>
      <section className="pb-16">
        <Carousel />
      </section>
      <section>
      </section>
      <section id="pricing" className="w-full">
        <h2 className="font-serif text-3xl font-bold text-stone-800 pb-4 flex items-center gap-2">
        <BanknotesIcon className="h-8" />
        Pricing
        </h2>
        <p className="pb-6 text-stone-600">
          We’d love to capture your special moment to cherish for years to come.
          If any of our prices don’t seem to work well for you please feel free
          to contact us.  We’d be happy to work something out with you! Below you’ll
          find what we typically charge for various occasions.
        </p>
        <article className="flex flex-col lg:flex-row gap-8 basis-0 items-stretch justify-between w-full">
          {prices.map((price) => (
            <div key={price.title} className="w-full shadow-lg rounded-lg hover:shadow-xl">
              <div className="relative w-full h-64">
                <Image
                  alt=""
                  sizes="100vw"
                  fill
                  style={{objectFit: "cover", borderTopLeftRadius: 8, borderTopRightRadius: 8}}
                  src={price.image}
                />
              </div>
              <h3 className="font-bold font-serif text-xl px-4 pt-4">
                {price.title}
              </h3>
              <span className="font-bold font-serif px-4">{price.price}</span>
              <ul className="list-disc p-6 pt-2 pl-10">
                {price.points.map(point => (
                  <li key={point}>{point}</li>
                ))}
               </ul>
            </div>
          ))}
        </article>
      </section>
      <footer className="w-full text-center text-sm text-stone-300 p-16">
        Copyright You, Me & He LLC 2018-2024
      </footer>
    </main>
  );
}
