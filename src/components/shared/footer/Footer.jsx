// import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <a className=" text-4xl    font-bold  text-[#d1ac3c] "> H T L </a>
          <p>
            Hotel Of Luxury
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title"> Contact </header>
          <ul>
            <li>Contact T: 1-634-567-34 </li>
            <li>E: Book@Hotel.com </li>
            <li>F: 1-634-567-35 </li>
          </ul>
        </nav>
        <nav>
          <header className="footer-title">Hotel Address</header>
          <p>Zen Steckenstra ße </p>
          <p> 43340 Zermatt </p>
          <button className="btn rounded-sm btn-outline btn-warning">
            {" "}
            Google Map{" "}
          </button>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="h-[100px]   bg-base-200 flex items-center justify-center ">
        <small> Copyright © 2023 GoodLayers. All Rights Reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
