import "./section.css";
import picture from "../../assets/phone.webp";
import lendsqr from "../../assets/lendsqr.svg";
import mono from "../../assets/mono.svg";
import okra from "../../assets/okra.svg";
import paystack from "../../assets/paystack.svg";
import sterling from "../../assets/sterling.svg";
import youverify from "../../assets/youverify.svg";
import ButtonComponent from "../Button/ButtonComponent";
import { motion, AnimatePresence } from "framer-motion";

const Section = () => {
  return (
    <div className="section-container" style={{ height: "150vh" }}>
      <AnimatePresence>
        <motion.div
          style={{ height: "150vh" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Corrected case from 'whileinview' to 'whileInView'
          transition={{ duration: 1 }}
        >
          <section className="hero-section">
            <div className="text">
              <h2>
                Making Credit <br /> Accessible to Everyone.
              </h2>

              <p>
                With flexible terms, competitive rates, and personalized
                service, we <br />
                empower you to achieve your goals and secure a brighter
                financial future. <br />
                Take control of your finances today and let us be your{" "}
                <span className="underline">
                  trusted <br />
                  partner{" "}
                </span>
                on the path to success.
              </p>
              <div className="section-buttons">
                <ButtonComponent
                  backgroundColor="#2A8851"
                  fontSize="16px"
                  borderRadius="8px"
                  color="white"
                  border="none"
                  margin="10px"
                  padding="17px 30px"
                  cursor="pointer"
                  fontFamily="Arial"
                  className="get-the-app"
                >
                  Get the App
                </ButtonComponent>
                <ButtonComponent
                  backgroundColor="#FCED96"
                  fontSize="16px"
                  borderRadius="8px"
                  color="#2A8851"
                  border="none"
                  margin="10px"
                  padding="17px 30px"
                  cursor="pointer"
                  fontFamily="Arial"
                  className="seedscore"
                >
                  SeedScore
                </ButtonComponent>
              </div>
            </div>

            <div className="hero-image">
              <img src={picture} alt="Phone" />
            </div>
          </section>
          <section className="partners-section">
            <h4>Our Partners</h4>
            <div className="partners-slider">
              <motion.div
                className="partners-logos"
                animate={{ x: [0, -50, 0] }} // Adding smooth horizontal scrolling animation
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              >
                <img src={lendsqr} alt="Lendsqr logo" />
                <img src={mono} alt="Mono logo" />
                <img src={okra} alt="Okra logo" />
                <img src={paystack} alt="Paystack logo" />
                <img src={sterling} alt="Sterling logo" />
                <img src={youverify} alt="Youverify logo" />
              </motion.div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Section;
