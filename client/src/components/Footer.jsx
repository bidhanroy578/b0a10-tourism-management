import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-inherit text-inherit-content p-10">
  <aside>
    <img src="https://img.icons8.com/?size=70&id=q9YwybnZ1h5A&format=png"/>
    <p>
      Travel Nest Org.
      <br />
      Providing reliable tech since 2025
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4 text-4xl">
      <a>
       <FaTwitter />
      </a>
      <a>
        <FaYoutube />
      </a>
      <a>
        <FaFacebook />
      </a>
    </div>
  </nav>
</footer>
    );
};

export default Footer;