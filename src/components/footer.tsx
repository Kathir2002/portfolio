import { Link } from "react-router-dom";
// @ts-ignore
import { socialLinks } from "../constants/index";

const Footer = () => {
  const currentYear = new Date(Date.now()).getFullYear();
  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />
      <div className="footer-container">
        <p>
          &copy;{currentYear} <strong>Kathir Mathavan</strong>. All rights
          reserved.
        </p>
        <div className="flex gap-3 items-center justify-center">
          {socialLinks?.map((link: any, index: any) => {
            return (
              <Link key={index} to={link?.link} target="_blank">
                <img
                  src={link?.iconUrl}
                  alt={link?.name}
                  className="w-6 h-6 object-contain"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
