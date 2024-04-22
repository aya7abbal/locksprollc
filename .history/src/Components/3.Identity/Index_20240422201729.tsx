"use client";
import { Fade } from "react-awesome-reveal";
import HappyCustomer from "../../assets/Images/Mission/Happy customer.jpeg";
import Burger from "../../assets/Images/Mission/burger.png";

const Identity = () => {
  return (
    <div className="relative" id="Goal-section">
      <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">
        <div className="absolute right-0 bottom-[-18%] hidden lg:block">
          <img src={Burger} alt="Mission & Vision" width={463} height={622} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="col-span-6 flex justify-start">
            <img src={HappyCustomer} alt="nothing" width={900} height={808} />
          </div>

          <div className="col-span-6 flex flex-col justify-center">
            {/* <Fade
              direction={"up"}
              delay={0}
              cascade
              damping={1e-1}
              triggerOnce={true}
            > */}
              <h2 className="text-red-400 text-lg font-normal my-3 ls-51 uppercase text-start">
                {" "}
                What We Do
              </h2>
            {/* </Fade> */}
            {/* <Fade
              direction={"up"}
              delay={0}
              cascade
              damping={1e-1}
              triggerOnce={true}
            > */}
              <h3 className="text-3xl lg:text-5xl font-semibold text-black text-start"></h3>
            {/* </Fade> */}
            {/* <Fade
              direction={"up"}
              delay={0}
              cascade
              damping={1e-1}
              triggerOnce={true}
            > */}
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-2">
                We cover Florida and all surrounding areas. Locks Pro LLC offers
                the fastest automotive, residential, and commercial locksmith
                services in the area. Our team are a phone call away, anytime
                and anywhere. We guarantee you a full excellent service and
                we&apos;re responsible for any inconvenience.
              </p>
              {/* <Fade
                direction={"up"}
                delay={0}
                cascade
                damping={1e-1}
                triggerOnce={true}
              > */}
                <h2 className="text-red-400 text-lg font-normal mb-3 ls-51 uppercase text-start">
                  {" "}
                  What We Offer
                </h2>
              {/* </Fade> */}
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-1">
                We offer complete locksmith services 24/7. We guarantee customer
                satisfaction on any job we take. Our outstanding reputation for
                quality work has earned us the trust and recognition of
                thousands of happy customers. We are fast in emergencies, give
                us a call and we&apos;ll be right there!
              </p>
              <div className="flex align-middle justify-center md:justify-start">
                <a
                  className="text-xl font-medium rounded-full text-white py-5 px-6 bg-red-400 lg:px-10 mr-6"
                  href="tel:0013213351279"
                >
                  Call Us Now!
                </a>
              </div>
            {/* </Fade> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identity;
