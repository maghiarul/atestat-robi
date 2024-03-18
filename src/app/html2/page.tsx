import Image from "next/image";
import React from "react";

import img from "../../assets/images/larry.jpg";
import "./html.scss";

function Page() {
  return (
    <div className="container">
      <div className="first">
        <div className="text">
          <h1>Larry Scott</h1>
          <p>
            Larry Dee Scott s-a născut în Blackfoot, Idaho⁠, fiul cuplului Thea
            și Wayne Scott.[2] A început să practice culturismul la vârsta de 16
            ani și a câștigat competiția Mr. Idaho în 1959 la doar 20 de ani. La
            scurt timp după ce s-a mutat în California, a câștigat Mr.
            California (1960), Mr. Pacific Coast (1961), Mr. America (1962) și
            Mr. Universe (1964). Scott a câștigat primele două ediții ale
            concursului Mr. Olympia în 1965 și 1966. A părăsit sportul
            profesionist după cea de-a doua victorie., însă a revenit pentru
            scurt timp în 1979. Acesta a studiat electronica la California Air
            College și era cunoscut pentru credința sa mormonă. S-a căsătorit cu
            Rachel Scott (născută Ichikawa). Cei doi au avut cinci copii: Susan,
            Erin, Nathan, Derek și Michael. Derek a murit într-un accident de
            motocicletă în 1992, iar Michael a murit în 1993.{" "}
          </p>
        </div>
        <Image src={img} alt="lol" width={600} height={400} />
      </div>
      <div className="second">
        <div className="istoric">
          <h1>Biografie</h1>
          <div>
            <p>
              A avut un rol minor în filmul Muscle Beach Party⁠ din 1964. La
              începutul carierei sale, acesta a fost antrenat de celebrul
              culturist Vince Gironda⁠ și a devenit cunoscut pentru muscultura
              brațelor sale. Scott a declarat ulterior că mărimea bicepșilor săi
              se datorează exercițiului „preacher curl”, inventat de Gironda.
              Acest exercuțiu i-a preluat ulterior numele, în prezent fiind
              cunoscut sub numele de „Scott Curl”.
            </p>
          </div>
          <div>
            <p>
              Scott a declarat într-un interviu pentru revista Iron Man⁠ din
              1965 că dieta sa cuprinde „multă carne, brânză și ouă” pe lângă
              suplimentele proteice. Model popular la începutul anilor 1960,
              acesta a lucrat alături de Bruce Bellas⁠, Don Whitman (de la
              Western Photography Guild) și Pat Milo. A apărut în toate
              revistele de culturism al perioadei - Mr. America, Muscle Builder,
              Demi Gods, Muscleboy, Muscles a Go-Go și The Young Physique.
            </p>
          </div>
          <div>
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
            <p>
              Din 1960 până la retragerea sa în 1966, Scott a fost superstarul
              culturismului. Revistele din domeniu au profitat de imaginea sa
              pur americană, popularitatea sa devenind ulterior cunoscută sub
              numele de „Larry Fever”. A ajuns la apogeu după câștigarea
              titlului Mr. Olympia la prima ediție a concursului în fața
              culturistului Harold Poole⁠. A obținut din nou titlul la ediția
              din 1966, fiind premiat cu 1.000 de dolari. Scriitorul independent
              Rod Labbe a colaborat cu Scott de cinci ori: un interviu în două
              părți pentru revista Flex, două articole pentru revista Ironman,
              articolul „Poetry in Motion” din MuscleMag International și un
              articol/interviu promoțional pentru Scarlet: the FIlm Magazine
              despre Muscle Beach Party (1964). La cinci ani după moartea sa,
              Labbe a scris un articol în memoria sa pentru numărul din martie
              2019 al revistei Muscle & Fitness intitulat „My friend, Larry
              Scott”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
