// Section.jsx
import "./section.css";
import picture from "../../assets/phone.webp";
import lendsqr from "../../assets/lendsqr.svg";
import mono from "../../assets/mono.svg";
import okra from "../../assets/okra.svg";
import paystack from "../../assets/paystack.svg";
import sterling from "../../assets/sterling.svg";
import youverify from "../../assets/youverify.svg";
import ButtonComponent from "../Button/ButtonComponent";
const Section = () => {
  return (
    <div className="section-container">
      <section className="hero-section">
        <div className="text">
          <h2>
            Making Credit <br /> Accessible to Everyone.
          </h2>

          <p>
            With flexible terms, competitive rates, and personalized service, we{" "}
            <br />
            empower you to achieve your goals and secure a brighter financial
            future. <br />
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
          {/* <div className="buttons">
          <a href='#Get the App'><button className="button1">Get the App</button></a>
          <a href='#SeedScore'><button className="button">SeedScore</button></a>
        </div> */}
        </div>

        <div className="hero-image">
          <img src={picture} alt="" />
        </div>
      </section>
      <section className="partners-section">
        <h4>Our Partners</h4>
        <div className="partners-slider">
          <div className="partners-logos">
            <img src={lendsqr} alt="Lendsqr logo" />
            <img src={mono} alt="Mono logo" />
            <img src={okra} alt="Okra logo" />
            <img src={paystack} alt="Paystack logo" />
            <img src={sterling} alt="Sterling logo" />
            <img src={youverify} alt="Youverify logo" />
          </div>
          {/* <div className="partners-logos">
            <img src={lendsqr} alt="Lendsqr logo" />
            <img src={mono} alt="Mono logo" />
            <img src={okra} alt="Okra logo" />
            <img src={paystack} alt="Paystack logo" />
            <img src={sterling} alt="Sterling logo" />
            <img src={youverify} alt="Youverify logo" />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Section;
