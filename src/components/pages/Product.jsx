import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const ProductDes = () => {
  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
    <>
      <NavBar />
      <div className="max-w-7xl lg:pt-[10%] md:pt-[15%] pt-[20%] pb-[5%] px-[9.895833333333333%]">
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
          <div className="flex flex-col gap-6 lg:w-2/4">
            <img
              src={activeImg}
              alt=""
              className="w-full h-full aspect-square object-cover rounded-xl"
            />
            <div className="flex flex-row justify-between h-24">
              <img
                src={images.img1}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img1)}
              />
              <img
                src={images.img2}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img2)}
              />
              <img
                src={images.img3}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img3)}
              />
              <img
                src={images.img4}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img4)}
              />
            </div>
          </div>
          {/* ABOUT */}
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <span className=" text-[#0052D4] font-semibold">
                Special Sneaker
              </span>
              <h1 className="text-3xl font-bold text-[#6FB1FC]">Nike Invincible 3</h1>
            </div>
            <p className="text-gray-700">
              Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi
              chilometri, Invincible 3 offre un livello di comfort elevatissimo
              sotto il piede per aiutarti a dare il massimo oggi, domani e
              oltre. Questo modello incredibilmente elastico e sostenitivo, è
              pensato per dare il massimo lungo il tuo percorso preferito e fare
              ritorno a casa carico di energia, in attesa della prossima corsa.
            </p>
            <h6 className="text-2xl font-bold"> Current BID <span className="text-[#0052D4]">$ 199.00</span></h6>
            <div className="flex flex-row items-center gap-12">
              <div className="flex flex-row items-center">
                <button
                  className="bg-gray-200 py-2 px-5 rounded-lg text-[#0052D4] text-3xl"
                  onClick={() => setAmount((prev) => prev - 1)}
                >
                  -
                </button>
                <span className="py-4 px-6 rounded-lg">{amount}</span>
                <button
                  className="bg-gray-200 py-2 px-4 rounded-lg text-[#0052D4] text-3xl"
                  onClick={() => setAmount((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <button className="bg-[#0052D4] text-white font-semibold py-3 px-8 rounded-xl h-full">
              bid
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDes;
