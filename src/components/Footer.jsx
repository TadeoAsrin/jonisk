import React from "react";
import image1 from "../images/image-top-laptops.jpg";
import image2 from "../images/image-gaming-growth.jpg";
import image3 from "../images/image-retro-pcs.jpg";
const Footer = () => {
  return (
    <div className="divFooter">
      <div className="divSecciones">
        <section>
          <img src={image1} alt="" />
        </section>
        <section className="textSeccion">
          <h2 className="h2-Footer">01</h2>
          <h4>Reviving Retro PCs </h4>
          <p className="p-Footer">
            What happens when old PCs are given modern upgrades?
          </p>
        </section>
      </div>
      <div className="divSecciones">
        <section>
          <img src={image2} alt="" />
        </section>
        <section className="textSeccion">
          <h2 className="h2-Footer"> 02</h2>
          <h4>Top 10 Laptops of 2022</h4>
          <p className="p-Footer">
            Our best picks for varous needs and budgets
          </p>
        </section>
      </div>
      <div className="divSecciones">
        <section>
          <img src={image3} alt="" />
        </section>
        <section className="textSeccion">
          <h2 className="h2-Footer">03</h2>
          <h4>The Growth of Gaming</h4>
          <p className="p-Footer">
            How the pandemic has sparked fresh opportunities
          </p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
