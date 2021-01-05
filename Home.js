import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-OTgzNWJkZmYt-w1500._CB412095319_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="893549"
            title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminium Case with Black Sport Band"
            price={169.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="142544"
            title="Garmin DriveSmart 65, Built-In Voice-Controlled GPS Navigator with 6.95” High-Res Display"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61tRpH9A3uL._AC_SL1000_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="815360"
            title="Introduction to Electrodynamics 4th Edition"
            price={66.04}
            image="https://images-na.ssl-images-amazon.com/images/I/41SmJRCkGYL._SX383_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="976868"
            title="Tylenol Extra Strength Caplets with 500 mg Acetaminophen, Pain Reliever & Fever Reducer, 100 ct"
            price={9.47}
            image="https://images-na.ssl-images-amazon.com/images/I/81lPrJ-kRLL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="820847"
            title="Casio fx-9750GII Graphing Calculator with icon based menu. Color white"
            price={49.98}
            image="https://images-na.ssl-images-amazon.com/images/I/61iJmZ%2Bc7fL._AC_SL1361_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="108861"
            title="Swiss Miss Hot Cocoa Mix, Regular, 50 Packets/Box - One Box of 50 envelopes Each"
            price={10.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816PRO6iZWL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="300317"
            title="Frigidaire EFIC189-Silver Compact Ice Maker, 26 lb per Day, Silver"
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71IXWvUmsGL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
