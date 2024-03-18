import Image from "next/image";
import React from "react";

import img from "../../assets/images/FIRST.jpg";
import "./html.scss";

function Page() {
  return (
    <div className="container">
      <div className="first">
        <div className="text">
          <h1>Mr. Olympia</h1>
          <p>
            Mr. Olympia este un concurs internațional de culturism organizat
            anual de către Federația Internațională a Culturiștilor (IFBB).
            Câștigarea titlului este considerat cel mai important rezultat în
            domeniul culturismului profesionist. Concursul a fost creat de Joe
            Weider pentru a oferi campionilor mondiali și continentali ai
            diferitelor federații de culturism din anii &apos;60 ocazia
            cuceririi unui nou titlu. Primul concurs Mr. Olympia a avut loc la
            New York în 18 septembrie 1965. Ediția din 2006 s-a desfășurat pe 30
            septembrie la Las Vegas. Campionul din 1965, Larry Scott, a primit
            ca premiu o coroană și suma de 1000 dolari. Campionul din 2009,
            americanul Jay Cutler, a primit alături de statueta Sandow și
            medalie, un cec de 200 000 dolari. Începând din anul 1980, există și
            o competiție paralelă pentru femei, Ms. Olympia. De asemenea, din
            1995 se organizează și o variantă fitness, Ms. Fitness Olympia, iar
            din 2003 și un concurs de frumusețe Ms. Figure Olympia.{" "}
          </p>
        </div>
        <Image src={img} alt="lol" width={400} height={400} />
      </div>
      <div className="second">
        <div className="istoric">
          <div>
            <h1>Anii &apos;60</h1>
            <p>
              Ediția inaugurală din 1965 a fost câștigată de Larry Scott, cel
              mai renumit culturist american al acelei perioade. El a cucerit
              titlul și în 1966, după care și-a anunțat retragerea din
              activitatea competițională. Sergio Oliva, supranumit
              &quo;Mitul&quo; a câștigat primul său titlu în 1967. Oliva și-a
              apărat cu succes titlul în următorii doi ani, iar specialiștii
              consideră că ar fi putut continua să domine culturismul
              profesionist dacă nu ar fi apărut legendarul Arnold
              Schwarzenegger. Acesta a participat pentru prima oară la Mr.
              Olympia în 1969, clasându-se pe locul secund, după Oliva. De
              remarcat că ediția din 1969 a fost una din doar trei competiții la
              care Schwarzenegger nu s-a clasat pe locul întâi.{" "}
            </p>
          </div>
          <div>
            <h1>Anii &apos;70</h1>
            <p>
              Arnold Schwarzenegger l-a învins pe Sergio Oliva la ediția din
              1970. La 1,88m și aproape 110kg, l-a egalat pe Oliva ca masă
              musculară, iar arbitrii l-au considerat superior la definire și
              densitate musculară. Schwarzenegger și-a apărat cu succes titlul
              în următorii cinci ani, învingându-l pe Oliva din nou în 1972,
              după care Oliva s-a retras din competițiile IFBB. Concursul din
              1975 a fost subiectul filmului &quot;Pumping Iron&quot;, în care
              alături de Schwarzenegger au apărut și alte nume mari din
              culturism, și anume Lou Ferrigno, Serge Nubret și Franco Columbu
              (partenerul de antrenament al lui Schwarzenegger), care a cucerit
              titlul în 1976. După al șaselea titlu, în 1975, Schwarzenegger
              și-a anunțat retragerea din activitatea competițională. Frank Zane
              a câștigat edițiile din 1977, 1978 și 1979. Deși mai puțin masiv
              decât campionii edițiilor precedente, Schwarzenegger și Oliva,
              Zane a excelat la simetrie, armonie și definire musculară.
            </p>
          </div>
          <div>
            <h1>Anii &apos;80</h1>
            <p>
              În 1980, Schwarzenegger a câștigat o decizie foarte controversată
              a concursului. Mai mulți concurenți și comentatori și-au exprimat
              dezacordul cu decizia arbitrilor, bazată - susțin criticii - nu pe
              forma de concurs a lui Schwarzenegger (departe de forma sa de vărf
              din anii &apos;70) ci pe popularitatea sa enormă. În urma acestei
              controverse, Mike Mentzer, clasat pe locul 4 , s-a retras din
              competiții, iar mai mulți concurenți, între care Frank Zane,
              clasat al doilea, și Boyer Coe, clasat pe locul 4 (la egalitate cu
              Mentzer), au boicotat competițiile IFBB timp de câțiva ani. Anul
              următor Franco Columbu a obținut o victorie la fel de
              controversată, în urma căreia criticii au declarat că arbitrajul
              și-a pierdut obiectivitatea și că titlul se acordă bazat pe renume
              în loc de calitatea fizicului. Chris Dickerson a câștigat în 1982,
              având un procentaj al grăsimii corporale extrem de redus; la 42 de
              ani el este cel mai vârstnic câștigător al titlului. Supranumit
              &quot;leul libanez&quot;, Samir Bannout a obținut decizia în 1983,
              deținător al unui fizic foarte simetric și estetic. Având o masă
              musculară impresionantă, definire, simetrie și separare,
              americanul Lee Haney a câștigat primul din opt titluri consecutive
              în 1984.
            </p>
          </div>
          <div>
            <h1>Anii &apos;90</h1>
            <p>
              Lee Haney s-a retras din competiții după ultimul său titlu Mr.
              Olympia în 1991. Englezul Dorian Yates, clasat al doilea în 1991,
              a câștigat titlul în 1992, 1993, 1994, 1995, 1996 și 1997. El a
              fost renumit pentru masa musculară impresionantă și densitatea
              ieșită din comun. După retragerea lui Yates, începând din 1998,
              Ronnie Coleman a cucerit statueta Sandow la următoarele opt
              ediții.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
