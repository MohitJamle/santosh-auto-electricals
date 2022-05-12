import React from "react";
import "./Body.css";
import Cars from "./Cars";
import Footer from "./Footer";
import Header from "./Header";
import Types from "./Types";

const carComponeys = [
  {
    id: "1",
    image: "/logo/audi_logo.jpg",
    name: "AUDI",
  },
  {
    id: "2",
    image: "/logo/bmw_logo.jpg",
    name: "BMW",
  },
  {
    id: "3",
    image: "/logo/mercedes_logo.jpg",
    name: "mercedes",
  },
  {
    id: "4",
    image: "/logo/fiat.jpg",
    name: "fiat",
  },
  {
    id: "5",
    image: "/logo/ford.jpg",
    name: "ford",
  },
  {
    id: "6",
    image: "/logo/honda_logo.jpg",
    name: "honda",
  },
  {
    id: "7",
    image: "/logo/hyundai_logo.jpg",
    name: "hyundai",
  },
  {
    id: "8",
    image: "/logo/hindustan-motors_logo.jpg",
    name: "hindustan-motors",
  },
  {
    id: "9",
    image: "/logo/mahindra.jpg",
    name: "mahindra",
  },
  {
    id: "10",
    image: "/logo/maruti_logo.jpg",
    name: "maruti",
  },
  {
    id: "11",
    image: "/logo/Chevrolet.jpg",
    name: "Chevrolet",
  },
  {
    id: "12",
    image: "/logo/nissan.jpg",
    name: "nissan",
  },
  {
    id: "13",
    image: "/logo/skoda.jpg",
    name: "skoda",
  },
  {
    id: "14",
    image: "/logo/tata_logo.jpg",
    name: "TATA",
  },
  {
    id: "15",
    image: "/logo/toyota.jpg",
    name: "toyota",
  },
  {
    id: "16",
    image: "/logo/volvo.jpg",
    name: "volvo",
  },
];

const batteryComponeys = [
  {
    id: "1",
    image: "/logo/exide.jpg",
    name: "exide",
  },
  {
    id: "2",
    image: "/logo/amaron.jpg",
    name: "amaron",
  },
  {
    id: "3",
    image: "/logo/luminous.jpg",
    name: "luminous",
  },
  {
    id: "4",
    image: "/logo/livguard-logo.jpg",
    name: "Livguard",
  },
];

const Body = () => {
  return (
    <div className="body">
      <Header />
      <div className="body_list">
        <Types />
      </div>
      <hr />
      <div className="body_cars">
        <h1>SHOP FOR CAR BATTERIES BY MAKE</h1>
        <Cars componeys={carComponeys} />
      </div>
      <hr />
      <div className="body_cars">
        <h1>SHOP FOR INVERTER BATTERIES BY BRANDS</h1>
        <Cars componeys={batteryComponeys} isBrand={true} />
      </div>
      <div className="body_info">
        <h3>Inverters Batteries</h3>
        <p>
          Looking for a inverter battery for home? We offer hassle free doorstep
          installation of INVERTER BATTERIES with multiple brand options and
          choices. You can buy INVERTER BATTERIES Online from{" "}
          <a href="https://www.exideindustries.com/">Exide,</a>{" "}
          <a href="https://www.amaron.in/">Amaron,</a>{" "}
          <a href="https://www.luminousindia.com/?gclid=Cj0KCQjw4PKTBhD8ARIsAHChzRKPBs1nTMI7HrZwPk3rEjVAsrGNPuUiIlhm3H4Gfpk2RzLUpbAH8MoaAkCrEALw_wcB">
            Luminous
          </a>{" "}
          and many other brands at discounted prices at BatteryBhai with
          superior performance. Most affordable INVERTER BATTERY PRICE if you
          are planning to buy inverter battery online? Use power calculator and
          get details on the battery, specifications, price and value offers.
          <br />
          <br /> Luminous Combo with Inverter is a good option and Luminous
          Inverter Battery Combo with other Luminous Tutubular batteries is
          standard combination. Luminous Zelio Combo and{" "}
          <a href=" https://www.luminousindia.com/shop-now/combo/inverter-battery.html">
            Luminous Inverter with Battery
          </a>{" "}
          are hot selling products along with Luminous Tubular Battery and
          Luminous Inverter Battery. Luminous Tubular Battery Price is very
          competitive. <br />{" "}
          <a href="https://www.amaron.in/inverter.php">
            Amaron inverter batteries,
          </a>{" "}
          are available in flat plate and tubular type in 100ah, 135ah, 150ah,
          165ah, and 180ah capacity. Buy Amaron inverter battery meeting the
          required power demand. DigiPower inverter batteries are well known for
          powerful tubular inverter battery in terms of back up and output.
          Exide inverter batteries are the most trusted brand for inverter
          batteries in India. All the ranges are available from flat plate to
          tubular, short tubular, gel based. Luminous Inverters Batteries off
          lately become the market brand and leading in the giving competition
          to other major brands. Has good Power Back up solutions with the full
          range of inverter battery products. MtekPower inverter batteries are
          highly powerful and last long come in different capacities of all
          ranges from 135AH to 200AH. MtekPower offers long lasting tubular
          inverter batteries. Buy Okaya inverter battery online at batterybhai,
          Check out the latest offers and discounts for purchasing Okaya
          inverter battery at the best price range with plenty of options. SF
          Sonic Inverter Battery again manufactured by Exide Industries Ltd.
          provides mains quality power to your inverter during normal power
          cuts. Available in Flat plate Type to tall tubular quality. TATA Green
          Inverter Batteries have patented Yuasa plate and use special floats
          all imported and are designed for longer backup capacity along with
          for easy acid level indication.
        </p>
      </div>
      <div className="body_info">
        <h3>Inverter & Battery Combo </h3>
        <p>
          The INVERTER & BATTERY COMBO for home browse the best price offers,
          Home UPS Battery combo can`t get better than this. This is the best
          time to get your combo now, easy & affordable Offers, quick
          installation. Buy inverter and battery combos from Indore's most
          trusted shop Santosh Auto Electricals. Superior Performance and quick
          installation service available by Santosh Auto Electricals.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Body;
