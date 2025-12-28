import PageWrapper from "../components/PageWrapper";
import "../styles/final.css";

const Final = () => {
  return (
    <PageWrapper>
      <div className="final-page">

        {/* Flower shower */}
        <div className="petals">
          {Array.from({ length: 35 }).map((_, i) => (
            <span key={i} className="petal"></span>
          ))}
        </div>

        {/* Content */}
        <div className="final-content">
          <h1>Happy Birthday</h1>

          <p>
            This space exists without expectations and without demands.
            It’s simply a reflection — of how Tutu is seen, appreciated,
            and respected.
            It only wishes her peace, happiness, and a year filled with
            moments that feel warm and real.
          </p>

          <p className="final-note">
            Happy Birthday, Harshi a.k.a TUTU 🫶 <br />
            Stay exactly the way you are.
          </p>
        </div>

      </div>
    </PageWrapper>
  );
};

export default Final;
