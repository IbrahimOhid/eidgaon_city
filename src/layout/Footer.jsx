import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative">
      <footer className="flex flex-col space-y-10 justify-center py-10">
        <nav className="flex justify-center flex-wrap gap-6 text-gray-600 font-medium">
          <Link className="hover:text-gray-900" to={'/'}>
            হোম
          </Link>
          <Link className="hover:text-gray-900" to={'/আমাদের_সম্পর্কে'}>
            আমাদের সম্পর্কে
          </Link>
          <Link className="hover:text-gray-900" to={'/'}>
            সকল পরিষেবা
          </Link>
          <Link className="hover:text-gray-900" href="#">
            যোগাযোগ
          </Link>
        </nav>
        <div className="flex justify-center space-x-5">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
          </a>
          <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
          </a>
        </div>
        <p className="text-center text-gray-700 font-medium">
          © 2025 Eidgoancity.com | Powered by iCox
        </p>
      </footer>

    </div>
  );
};

export default Footer;
