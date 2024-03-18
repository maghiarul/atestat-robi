import Image from "next/image";
import "./globals.scss";

import logo from "../assets/images/logo.svg";
import icon from "../assets/images/icon.svg";
import more from "../assets/images/more.svg";

import Head from "next/head";

import p650 from "../assets/images/1000x650.png";
import p400 from "../assets/images/400x400.png";

import first from "../assets/images/FIRST.jpg";
import second from "../assets/images/SECOND.jpg";
import third from "../assets/images/THIRD.jpg";
import fourth from "../assets/images/FOURTH.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <div className="container">
        <div className="navbar">
          <div className="links">
            <a href="#">Acasa</a>
            <a href="/contact">Contact</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className="icon">
            <Image src={icon} width={50} height={50} alt="" />
          </div>
        </div>
        <div className="content">
          <div className="image">
            <Image src={logo} width={600} height={600} alt="" />
          </div>
          <div className="text">
            <h1>Istoria culturismului</h1>
            <h3>Ceva inspirational...</h3>
          </div>
        </div>
        <div className="more-content">
          <div className="lol">
            <div className="ll">
              <div className="textt">
                <h1>Aici o sa vina un titlu</h1>
                <p>
                  Mr. Olympia este un concurs internațional de culturism
                  organizat anual de către Federația Internațională a
                  Culturiștilor (IFBB). Câștigarea titlului este considerat cel
                  mai important rezultat în domeniul culturismului profesionist.
                  Concursul a fost creat de Joe Weider pentru a oferi
                  campionilor mondiali și continentali ai diferitelor federații
                  de culturism din anii &rsquo;60 ocazia cuceririi unui nou
                  titlu. Primul concurs Mr. Olympia a avut loc la New York în 18
                  septembrie 1965. Ediția din 2006 s-a desfășurat pe 30
                  septembrie la Las Vegas. Campionul din 1965, Larry Scott, a
                  primit ca premiu o coroană și suma de 1000 dolari. Campionul
                  din 2009, americanul Jay Cutler, a primit alături de statueta
                  Sandow și medalie, un cec de 200 000 dolari. Începând din anul
                  1980, există și o competiție paralelă pentru femei, Ms.
                  Olympia. De asemenea, din 1995 se organizează și o variantă
                  fitness, Ms. Fitness Olympia, iar din 2003 și un concurs de
                  frumusețe Ms. Figure Olympia.
                </p>
                <a href="/html1">
                  <Image src={more} width={18} height={18} alt="more" />
                  Informatii suplimentare
                </a>
              </div>
              <Image src={first} alt="400 placeholder" />
            </div>
            <Image src={fourth} alt="lll" className="mid" />
          </div>
          <div className="lol">
            <div className="ll rv">
              <div className="textt">
                <h1>Aici o sa vina un titlu</h1>
                <p>
                  Larry Dee Scott (12 octombrie 1938 – 8 martie 2014),
                  supranumit „The Legend” și „The Golden Boy”, a fost un
                  culturist profesionist american IFBB. A câștigat competiția
                  inaugurală Mr. Olympia din 1965 și a apărat coroana la
                  concursul Mr. Olympia din 1966 înainte de a se retrage.
                </p>
                <a href="/html2">
                  <Image src={more} width={18} height={18} alt="more" />
                  Informatii suplimentare
                </a>
              </div>
              <Image src={third} alt="400 placeholder" />
            </div>
            <Image src={second} alt="lll" className="mid" />
          </div>
        </div>
      </div>
    </>
  );
}
