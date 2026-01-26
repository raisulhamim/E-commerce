import { useState } from "react";

// thumbnail images
import productImageOne from "../assets/productimageone.png";
import productImageTwo from "../assets/productimagetwo.png";
import productImageThree from "../assets/productimagethree.png";
import productImageFour from "../assets/productimagefour.png";

// main image
import productMainImage from "../assets/productmainimage.png";

const Productdetails = () => {
  const [selectedImage, setSelectedImage] = useState(productMainImage);
  const [color, setColor] = useState("White");
  const [size, setSize] = useState("M");

  const images = [
    productImageOne,
    productImageTwo,
    productImageThree,
    productImageFour,
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
{/* Left: Images */}
<div className="flex" style={{ gap: "25px" }}>
  {/* Thumbnails */}
  <div
    className="flex flex-col"
    style={{ gap: "5px" }}
  >
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt="product thumbnail"
        onClick={() => setSelectedImage(img)}
        style={{
          width: "170px",
          height: "138px",
        }}
        className="object-contain cursor-pointer"
      />
    ))}
  </div>

  {/* Main Image */}
  <div className=" w-[500px] h-[600px]">
    <img
      src={selectedImage}
      alt="product"
      style={{
        width: "full",
        height: "full",
      }}
      className="object-contain"
    />
  </div>
</div>


        {/* Right: Details */}
        <div>
          <h1 className="text-2xl font-semibold mb-2">
            Havic HV G-92 Gamepad
          </h1>

          <div className="flex items-center gap-2 text-sm mb-4">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-500">(150 Reviews)</span>
            <span className="text-green-600 ml-3">In Stock</span>
          </div>

          <p className="text-3xl font-bold mb-4">$192.00</p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal.
          </p>

          {/* Colors */}
          <div className="mb-5">
            <p className="font-medium mb-2">Colours:</p>
            <div className="flex gap-3">
              {["White", "Red", "Black"].map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-8 h-8 rounded-full
                  ${c === "White" && "bg-gray-200"}
                  ${c === "Red" && "bg-red-500"}
                  ${c === "Black" && "bg-black"}
                  ${color === c ? "ring-2 ring-black" : ""}`}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mb-6">
            <p className="font-medium mb-2">Size:</p>
            <div className="flex gap-3">
              {["XS", "S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-1 rounded-md border
                  ${
                    size === s
                      ? "bg-black text-white"
                      : "hover:border-black"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-md">
              Buy Now
            </button>
            <button className="w-12 rounded-md text-xl">♡</button>
          </div>

          {/* Info boxes */}
          <div className="rounded-md divide-y">
            <div className="p-4 flex items-center gap-3">
              <span>🚚</span>
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-sm text-gray-500">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            <div className="p-4 flex items-center gap-3">
              <span>↩️</span>
              <div>
                <p className="font-medium">Return Delivery</p>
                <p className="text-sm text-gray-500">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
