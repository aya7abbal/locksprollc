"use client";
import { Fade } from "react-awesome-reveal";
import BannerPhoto from "../../assets/Images/Banner/Mobile-Lockout.jpeg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-lightpink w-100 mt-5 md:mt-32">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                24/7 <br /> Lock Smiths
              </h1>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-grey lg:text-lg font-normal mb-10 lg:text-start text-center">
                We are a local business, open 24/7. We are Licensed and Insured.
                We offer a variety of locksmith services that are customizable
                to each individual.
                <br /> We cover Ontario and all surrounding areas. We have
                technicians everywhere waiting to assist you!{" "}
              </p>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="md:flex align-middle justify-center lg:justify-start">
                <button className="text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-red-400 lg:px-14 mr-6">
                  <a href="tel:001619-826-9574">Call Us Now</a>
                </button>
                <button className="flex border w-full md:w-auto mt-5 md:mt-0 border-pink justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-red-400 hover:text-white hover:bg-red-400">
                    
                  <a href="#services-section">Our Services</a>
                </button>
              </div>
            </Fade>
          </div>

          <div className="col-span-6 flex justify-center relative banner-photo-container order-first md:order-last m-0">
            {/* <div className="flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute">
              <img
                src={"/imgs/Banner/pizza.svg"}
                alt="pizza-img"
                width={68}
                height={68}
              />
              <p className="text-lg font-normal">
                More than 500+ <br /> recipes.
              </p>
            </div> */}
            <img
              src={BannerPhoto}
              alt="nothing"
              id="banner-img"
              // width={200}
              // height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
