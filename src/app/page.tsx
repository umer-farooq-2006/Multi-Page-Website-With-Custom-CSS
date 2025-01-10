import React from "react";
import "./style.css";
import Header from "./Components/Header/page";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="side-text">
        <div className="title">Your Car, Your Journey, Your Way</div>
        <div className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          ipsam cupiditate dolorem amet, aspernatur deserunt facilis quia
          asperiores ipsum culpa, velit beatae ab. Accusantium unde quod minus,
          rerum itaque ratione.
        </div>
        <div>
          <button>View details</button>
        </div>
      </div>
      <div>
        <img src="/images/Car1.webp" className="car-centre" />
      </div>
      <div className="right-text">
        <div>
          <h1>100+</h1>
          <p>Trusted Clients</p>
          <hr />
        </div>
        <div>
          <h1>170+</h1>
          <p>Cars Sold</p>
          <hr />
        </div>
        <div>
          <h1>500+</h1>
          <p>Cars Repaired</p>
        </div>
      </div>
      <div className="boxes">
        <div className="box-1">
          <div className="car-1">
            <img src="/images/Car2.jpg" />
          </div>
          <div className="text-1">
            <h1 className="box-h1">Your Cars</h1>
            <p className="box-p">Your Car, Your Journey, Your Way.</p>
          </div>
        </div>
        <div className="box-2">
          <div className="car-2">
            <img src="/images/Car3.jpg" />
          </div>
          <div className="text-2">
            <h1 className="box-h1">Your Cars</h1>
            <p className="box-p">Your Car, Your Journey, Your Way.</p>
          </div>
        </div>
        <div className="box-3">
          <div className="car-3">
            <img src="/images/Car4.jpg" />
          </div>
          <div className="text-3">
            <h1 className="box-h1">Your Cars</h1>
            <p className="box-p">Your Car, Your Journey, Your Way.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
