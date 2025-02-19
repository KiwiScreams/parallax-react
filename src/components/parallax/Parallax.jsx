import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import background from "../../assets/images/montain1.png";
import sun from "../../assets/images/montain2.png";
import mountain from "../../assets/images/montain3.png";
import ground from "../../assets/images/montain4.png";
import "./Parallax.css";
import TextBlock from "../text/TextBlock";
import FAQ from "../faq/Faq";
import Panel from "../panel/Panel";
import Contact from "../contacts/Contacts";
import Footer from "../shared/footer/Footer";
function ParallaxComponent() {
  return (
    <>
      <div className="app">
        <Parallax
          pages={6}
          style={{ top: "0", left: "0" }}
          className="animation"
        >
          <ParallaxLayer offset={0} speed={0.5}>
            <div className="animation_layer parallax" id="background">
              <img src={background} alt="mountain" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={-0.08}>
            <div className="animation_layer parallax" id="sun">
              <img src={sun} alt="sun" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.35}>
            <div className="animation_layer parallax" id="mountain">
              <img src={mountain} alt="mountain" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.4}>
            <div className="animation_layer parallax" id="earth">
              <img src={ground} alt="ground" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.7}>
            <TextBlock />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
            <FAQ />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.8}>
            <Panel />
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.8}>
            <Contact />
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.3}>
            <Footer />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}
export default ParallaxComponent;
