import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import "../styles/hernature.css";

// Images
import img1 from "../assets/images/her23.jpeg";
import img2 from "../assets/images/her2.jpeg";
import img3 from "../assets/images/her24.jpeg";
import img4 from "../assets/images/her19.jpeg";
import img5 from "../assets/images/her12.jpeg";

const HerNature = () => {
  return (
    <PageWrapper>
      <div className="her-nature-container">

        {/* LEFT: TEXT */}
        <div className="her-nature-content">
          <h1>Her Nature</h1>

          <p className="her-nature-text">
            Tutu carries a calmness that is never forced — it simply exists 🌊
          </p>
          <p className="her-nature-text">
            Like still water, she holds depth beneath the surface, quiet yet profound. She feels emotions deeply, but chooses peace more often than chaos. She listens with intention, understands beyond words, and carries strength without ever needing to display it.
          </p>
          <p className="her-nature-text">
            Being around her never feels heavy. It feels steady, grounding, and quietly comforting — the kind of presence that softens the noise of the world and makes silence feel safe ✨
          </p>

          <Link to="/little-things">
            <button className="her-nature-btn">Next</button>
          </Link>
        </div>

        {/* RIGHT: IMAGES */}
        <div className="image-collage">
          <div className="large-img">
            <img src={img1} alt="Her moment" />
          </div>

          <div className="small-img">
            <img src={img2} alt="Her moment" />
          </div>

          <div className="small-img">
            <img src={img3} alt="Her moment" />
          </div>

          <div className="small-img">
            <img src={img4} alt="Her moment" />
          </div>

          <div className="small-img">
            <img src={img5} alt="Her moment" />
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

export default HerNature;
