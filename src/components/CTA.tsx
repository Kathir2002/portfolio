import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project mind? <br className="sm:block hidden" />
        Let's build together!
      </p>
      <Link to={"/contact"} className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
