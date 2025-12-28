import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import "../styles/birthdaynote.css";

// Images
import moon from "../assets/images/moon.webp";
import img1 from "../assets/images/her1.jpeg";
import img2 from "../assets/images/her16.jpeg";
import img3 from "../assets/images/her25.jpeg";
import img4 from "../assets/images/her18.jpeg";
import img5 from "../assets/images/her15.jpeg";

const BirthdayNote = () => {
  return (
    <PageWrapper>
      <div className="birthday-note-container">

        {/* TEXT */}
        <div className="birthday-note-text">
          <h1>29 December</h1>

          <p>Born on 29 December, Harshi carries an emotional awareness that feels gentle and natural — almost like the moon itself 🌙  </p>
          <p>She doesn’t rush her feelings or make noise about them. She understands deeply, senses quietly, and moves through emotions with a rare calmness.  </p>
          <p>Just like the moon, she doesn’t try to shine brighter than everything else — she simply stays, steady and reassuring, lighting the space around her in her own way 🤍 </p>
          <p>There’s balance in how she feels, thoughtfulness in how she acts, and a quiet maturity in the way she faces life. Being around her doesn’t feel overwhelming — it feels peaceful, grounding, and real.</p>
        </div>

        <Link to="/final">
          <button className="birthday-note-btn">Finish</button>
        </Link>

        {/* MOON IMAGE */}
        <div className="portrait-gallery">
          <img src={moon} alt="Moon" />
        </div>

        {/* PORTRAIT GALLERY */}
        <div className="portrait-gallery">
          <img src={img1} alt="Moment" />
          <img src={img2} alt="Moment" />
          <img src={img3} alt="Moment" />
          <img src={img4} alt="Moment" />
          <img src={img5} alt="Moment" />
        </div>

        {/* BUTTON */}
        

      </div>
    </PageWrapper>
  );
};

export default BirthdayNote;
