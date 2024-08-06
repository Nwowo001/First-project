// Section.jsx
import './section.css';
import picture from '../../assets/phone.webp';
import lendsqr from '../../assets/lendsqr.svg';
import mono from '../../assets/mono.svg';
import okra from '../../assets/okra.svg';
import paystack from '../../assets/paystack.svg';
import sterling from '../../assets/sterling.svg';
import youverify from '../../assets/youverify.svg';

const Section = () => {
  return (
    <div className="section-container">
      <section className="hero-section">
        <div className="text">
          <h2>Making Credit</h2>
          <h2>Accessible to Everyone</h2>
          <p>
            With flexible terms, competitive rates, and personalized service, we empower you to achieve your goals and secure a brighter financial future. Take control of your finances today and let us be your trusted partner on the path to success.
          </p>

          <div className="buttons">
          <a href='#Get the App'><button className="button1">Get the App</button></a>
          <a href='#SeedScore'><button className="button">SeedScore</button></a>
        </div>
        
        </div>

        

        <div className="hero-image"  >
        <img src={picture} alt="" />
        </div>
      </section>
      <section className="partners-section">
        <h3>Our Partners</h3>
        <div className="partners-logos">
          <img src={lendsqr} alt="Lendsqr logo" />
          <img src={mono} alt="Mono logo" />
          <img src={okra} alt="Okra logo" />
          <img src={paystack} alt="Paystack logo" />
          <img src={sterling} alt="Sterling logo" />
          <img src={youverify} alt="Youverify logo" />
        </div>
       
      </section>
    </div>
  );
}

export default Section;
