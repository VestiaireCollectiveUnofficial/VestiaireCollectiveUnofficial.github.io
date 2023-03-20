import { useState, useEffect } from "react";

export default function News() {
  const [websiteData, setWebsiteData] = useState([]);

  useEffect(() => {
    setWebsiteData([
      {
        name: "Versace",
        description: "Baskets en cuir",
        price: 242,
        imgPath: "./img/versace.jpeg",
      },
      {
        name: "Chanel",
        description: "Cabas",
        price: 5021.58,
        imgPath: "./img/chanel.jpeg",
      },
    ]);
  }, []);

  return (
    <div className="news-container">
      {websiteData.map((item) => (
        <div className="news-item">
          <img src={item.imgPath} className="item-img" />
          <h4 className="item-name">{item.name}</h4>
          <h6 className="item-description">{item.description}</h6>
          <h5 className="item-price">{item.price}€</h5>
        </div>
      ))}
    </div>
  );
}
