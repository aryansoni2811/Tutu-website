import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import "../styles/landing.css";

const Landing = () => {
  return (
    <PageWrapper>
      <section className="landing">
        <div className="landing-content">
          <h1>Some people bring calm without trying.</h1>

          <p>
            This space is for Tutu, as she’s known to a few 🌷
          </p>

          <p>
Someone whose presence feels gentle without ever trying. There are people who enter your life with noise and certainty, and then there are those who arrive quietly — not asking for attention, yet leaving behind a calm that lingers long after 🌙
</p>
<p>
She belongs to the second kind.
</p>
<p>

This page isn’t meant to define her completely, because no space ever truly could. It simply holds a small reflection of how she feels to someone who notices the details — the stillness in her presence, the softness in her moments, and the quiet balance she carries so effortlessly ✨
          </p>

          <Link to="/nature">
            <button className="landing-btn">Enter</button>
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Landing;
