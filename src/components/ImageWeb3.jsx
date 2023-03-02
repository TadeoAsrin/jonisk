import React from "react";
import Web3Image from "../images/image-web-3-desktop.jpg";

const Image = () => {
  return (
    <><div>
      <section>
        <article>
          <img src={Web3Image} alt="" className="imagen-web3" />
        </article>
      </section>
      <div className="box-div">
        <div className="left-div">
          <h2 className="web3-h2">The Bright Future of Web 3.0?</h2>
        </div>
        <div className="right-div">
          <p className="web3-p">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the peopl. But is it
            really fulfilling its promise?
          </p>
          <button className="web3-button">READ MORE</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Image;
