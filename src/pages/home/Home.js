import React from "react";
import Card from "../../components/card/Card";
import "./home.css";

function Home({ donanimArsivi, kucukBurjuvazi }) {
  return (
    <div className="container-home">
      <div className="content-home">
        <div className="sidebar">
          <p>Fenomenler</p>
          <hr />
          <div className="fenomenler pd-5">
            <a href="/donanim-arsivi">Donanım Arşivi</a>
            <a href="/kucuk-burjuvazi">Küçük Burjuvazi</a>
          </div>
        </div>
        <div className="product-home">
          <p>Son eklenen ilanlar</p>
           <hr />
          <div className="product-home-box pd-5">
            {donanimArsivi.map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  info={item.info}
                  image={item.image}
                />
              );
            })}
            {kucukBurjuvazi.map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  info={item.info}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
