import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import "../styles/littlethings.css";

// Portrait images
import img1 from "../assets/images/her10.jpeg";
import img2 from "../assets/images/her9.jpeg";
import img3 from "../assets/images/her11.jpeg";
import img4 from "../assets/images/her14.jpeg";

const LittleThings = () => {
  return (
    <PageWrapper>
      <div className="little-things-container">

        {/* TEXT */}
        <div className="little-things-content">
          <h1>The Little Things</h1>

          <ul className="little-things-list">
            <li>
              Tutu’s calmness doesn’t announce itself — it simply stays 🌊
              Like still water, it holds quiet depths, unseen but deeply felt.
              She feels everything with her whole heart, yet chooses peace over
              chaos, softness over noise 🤍
            </li>

            <li>
              Mountains feel like they belong to her ⛰️
              Strong without needing to be loud, calm without ever feeling empty.
              Wide skies and distant peaks mirror the peace she carries — steady,
              grounding, and quietly powerful ✨
            </li>

            <li>
              Music speaks the emotions she keeps gently tucked away 🎶
              “Hona Tha Pyaar” isn’t just a song — it feels like a memory,
              an unspoken feeling, something her heart understands
              even when words fall short 🌙💗
            </li>
          </ul>


          <Link to="/gallery">
            <button className="little-things-btn">Continue</button>
          </Link>
        </div>

        {/* PORTRAIT IMAGE STRIP */}
        <div className="portrait-gallery">
          <img src={img1} alt="Moment" />
          <img src={img2} alt="Moment" />
          <img src={img3} alt="Moment" />
          <img src={img4} alt="Moment" />
        </div>

      </div>
    </PageWrapper>
  );
};

export default LittleThings;
