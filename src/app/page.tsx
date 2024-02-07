import Image from "next/image";
import "./globals.scss";

import problem_icon from "../assets/images/problem.svg";
import logo from "../assets/images/logo.svg";
import icon from "../assets/images/icon.svg";
import Head from "next/head";

import p650 from "../assets/images/1000x650.png";
import p400 from "../assets/images/400x400.png";

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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                esse cumque similique, quam suscipit fuga veniam rem ab? Modi
                obcaecati perspiciatis maxime, assumenda quisquam itaque
                voluptatem voluptate enim non totam!
              </p>
              <Image src={p400} alt="400 placeholder" />
            </div>
            <Image src={p650} alt="lll" className="mid" />
          </div>
          <div className="lol">
            <div className="ll rv">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                esse cumque similique, quam suscipit fuga veniam rem ab? Modi
                obcaecati perspiciatis maxime, assumenda quisquam itaque
                voluptatem voluptate enim non totam!
              </p>
              <Image src={p400} alt="400 placeholder" />
            </div>
            <Image src={p650} alt="lll" className="mid" />
          </div>
        </div>
      </div>
    </>
  );
}
