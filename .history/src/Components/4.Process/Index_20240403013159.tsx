"use client";
import React, { Component } from "react";
import { Fade } from "react-awesome-reveal";
import Help from "../../assets/Images/Process/help.png";
import Save from "../../assets/Images/Process/car.png";
import Call from "../../assets/Images/Process/telephone.png";
import Done from "../../assets/Images/Process/thumbs-up.png";

import "primeicons/primeicons.css";

// CAROUSEL DATA

interface DataType {
  profession: string;
  name: string;
  imgSrc: any;
}

const postData: DataType[] = [
  {
    name: "NEED HELP GETTING IN?",
    profession: "Locked outside of your home or your car? No worries!",
    imgSrc: Help,
  },
  {
    name: "GIVE US A CALL",
    profession: `Call us on ${(
      <a href="tel:001619-826-9574">(619)-927-0588</a>
    )} and we will be there as soon as possible.`,
    imgSrc: Call,
  },
  {
    name: "QUICK SAVE",
    profession:
      "Our locksmith team will take care of the issue quickly & efficiently.",
    imgSrc: Save,
  },
  {
    name: "GOOD TO GO!",
    profession:
      "Get back to whatever you were up to and enjoy the rest of your day.",
    imgSrc: Done,
  },
];

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };
    
console.log(postData)

    return (
      <div className="py-10 sm:py-20 bg-darkred-400" id="Process-section">
        <div className="mx-auto max-w-2xl lg:max-w-7xl sm:p-4 lg:px-8 ">
          <div className="text-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="text-red-400 text-lg font-normal mb-3 tracking-widest uppercase ls-51">
                Your Journey With Us !
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
                Working With Our Expert Techs
              </h3>
            </Fade>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4">
            {postData.map((items, i) => (
              <div className="justify-center" key={i}>
                <div className="m-3 py-14 my-2 text-center ">
                  <div className="relative ">
                    <img
                      src={items.imgSrc.src}
                      alt={items.name}
                      width={170}
                      height={170}
                      className="inline-block  m-5 p-5"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-lightblack">
                    {items.name}
                  </h3>
                  <h4 className="text-lg font-normal text-lightblack pt-4 pb-2 opacity-50">
                    {items.profession}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
