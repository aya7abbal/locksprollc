import React from "react";
import Contactusform from "./Contactus";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: "Services", href: "#services-section", current: false },
  { name: "Our Goal", href: "#Goal-section", current: false },
  { name: "Your Journey", href: "#Process-section", current: false },
]


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="mt-4"></div>
                        {/* <button className='flex justify-center text-base w-full font-medium rounded-full bg-bgred-400 text-red-400 py-3 px-4 lg:px-8 navbutton hover:text-white'>Sign in</button> */}
                        <a href="tel:0013213351279" className='flex justify-center text-base w-full font-medium rounded-full bg-transparent border border-bgred-400 text-red-400 py-3 px-4 lg:px-8 navbutton hover:text-white hover:bg-red-400'>Call Now!</a>

                        {/* <Contactusform /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
