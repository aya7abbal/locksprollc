"use client";
import { Fade } from "react-awesome-reveal";
import CarFour from "../../assets/Images/Gallery/Car4.jpg"
import CarTwo from "../../assets/Images/Gallery/Car2.jpeg"
import CarThree from "../../assets/Images/Gallery/Car3.jpg"
import CarOne from  "../../assets/Images/Gallery/Car1.jpg"

const Gallery = () => {
  return (
    <div id="gallery-section">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-24">
        <div className="text-center">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h2 className="text-red-400 text-lg font-normal mb-3 tracking-widest uppercase ls-51">
              Any Car, Any Time!
            </h2>
          </Fade>
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-3xl lg:text-5xl font-semibold text-black">
              We Do All Cars of Different Brands & Models{" "}
            </h3>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6">
          <div className="col-span-6 flex justify-center overflow-hidden rounded-3xl">
            <img
              src={CarOne}
              alt="pizza-one"
              width={1000}
              height={805}
              className="inner-img"
            />
          </div>

          <div className="col-span-6 flex justify-center">
            <div className="grid grid-rows-1 grid-flow-row gap-4">
              <div className="row-span-1 overflow-hidden rounded-3xl">
                <img
                  src={CarTwo}
                  alt="pizza-two"
                  width={700}
                  height={405}
                  className="inner-img"
                />
              </div>
              <div className="grid grid-cols-2 gap-2" >
                <div className="overflow-hidden rounded-3xl" style={{maxHeight:"90vh"}}>
                  <img
                    src={CarThree}
                    alt="pizza-three"
                    width={500}
                    height={405}
                    className="inner-img"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={CarFour}
                    alt="pizza-four"
                    width={500}
                    height={405}
                    className="inner-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
