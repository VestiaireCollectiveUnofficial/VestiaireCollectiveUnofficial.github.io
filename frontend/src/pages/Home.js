import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import News from "../components/News";
export default function Home() {
  const scrollToTop = () => {
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Parallax pages={3} style={{ top: "0", left: "0" }}>
      <ParallaxLayer offset={0} speed={1} className="parallax-item" id="top">
        <h1>Vestiaire Collective.</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={0.2} speed={0.2}>
        <p>
          3 millions d'articles, plus de 12 000 marques.
          <br /> La mode seconde-main d'occasion jusqu'à -70%. <br />
          Authentification par des experts, à laquelle des millions de personnes
          font confiance.
        </p>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1} className="parallax-item">
        <h2>Nouveautés.</h2>
      </ParallaxLayer>
      <ParallaxLayer offset={1.5} speed={0.2}>
        <News />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1} className="parallax-item relative">
        <div className="container">
          <a href="https://fr.vestiairecollective.com/">Mon Vestiaire</a>
        </div>
        <footer onClick={() => scrollToTop()}>
          <span>⬆</span>
        </footer>
      </ParallaxLayer>
    </Parallax>
  );
}
