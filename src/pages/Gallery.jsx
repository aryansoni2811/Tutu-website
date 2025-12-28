import photo1 from "../assets/images/us1.png";
import photo2 from "../assets/images/us2.png";
import video1 from "../assets/images/Us3.mp4";

import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import "../styles/gallery.css";



const Gallery = () => {
  return (
    <PageWrapper>
      <div className="gallery-container">

        {/* TEXT */}
        <div className="gallery-text">
          <h1>Moments</h1>

          <p className="gallery-subtitle">
            Not memories. Just moments.
          </p>

          <p className="gallery-description">
  These aren’t moments meant to be held tightly — just pieces of time,
  captured as they were 🌙  
  Simple, honest, and beautifully unforced.  
  Smiles that arrived on their own, glances that didn’t ask to be noticed,
  moments that existed without pressure or promise 🤍  
  Some memories don’t need meaning or explanation —  
  they simply stay, quiet and true, feeling right exactly the way they are ✨
</p>

          <Link to="/note">
            <button className="gallery-btn">Next</button>
          </Link>
        </div>

        {/* PORTRAIT MEDIA */}
        <div className="gallery-media">
          <img src={photo1} alt="Moment" />

          <video
            src={video1}
            autoPlay
            loop
            muted
            playsInline
          />

          <img src={photo2} alt="Moment" />
        </div>

      </div>
    </PageWrapper>
  );
};

export default Gallery;



