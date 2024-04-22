import { Disclosure } from "@headlessui/react";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Logo from "../../assets/Images/Logo/logo-new.png";
import Phone from "../../assets/Images/Navbar/phone.svg"


interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Services", href: "#services-section", current: false },
  { name: "Our Goal", href: "#Goal-section", current: false },
  { name: "Your Journey", href: "#Process-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className=" max-w-7xl p-3 md:p-6 lg:px-8 mx-auto w-100">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}

              <div className="flex md:hidden flex-shrink-0 items-center border-right">
                <img src={Logo} alt="logo" width={36} height={36} />
                <a href="/" className="text-xl font-semibold text-black ml-4">
                  Locks Pro LLC
                </a>
              </div>
              <div className="hidden md:flex flex-shrink-0 items-center border-right">
                <img src={Logo} alt="logo" width={56} height={56} />
                <a href="/" className="text-2xl font-semibold text-black ml-2">
                  Locks Pro LLC
                </a>
              </div>

              {/* LINKS */}

              <div className="hidden lg:flex items-center border-right ">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-black"
                          : "navlinks hover:opacity-100",
                        "px-3 py-4 rounded-md text-lg font-normal opacity-50 hover:text-black space-links"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="gap-6 hidden lg:flex mr-4">
                <div className="flex items-center gap-2">
                  <img
                    src={Phone}
                    alt="phone-image"
                    width={19}
                    height={19}
                  />
                  <a
                    className="text-lg font-medium "
                    href="tel:0013213351279"
                  >
                    +1(321)-335-1279
                  </a>
                </div>
                {/* <button className='flex justify-end text-xl font-medium bg-bgpink text-pink py-4 px-4 lg:px-8 navbutton rounded-full hover:text-black'>Sign in</button> */}
                {/* <Signindialog /> */}
              </div>
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
