"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import jsondata from "./data.json";

export type LinksTypes = {
    name: string;
    link: string;
    iconsrc: string;
};

export interface JsonNavbarComp {
    logosrc: string;
    links: LinksTypes[];
    buttons: LinksTypes[];
}

const NavbarComp: React.FC = () => {
    const [barOnclick, setbarOnclick] = React.useState(false);
    const jsonNavbarComp: JsonNavbarComp = jsondata || ({} as JsonNavbarComp);

    return (
        <nav className="fixed flex justify-center items-center top-0 w-full h-fit py-4 backdrop-blur-xl bg-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center container px-4 md:px-0">
                <div className="flex justify-between items-center w-full md:w-fit">
                    <Link href={jsonNavbarComp.links[0].link}>
                        <Image
                            src={jsonNavbarComp.logosrc}
                            alt={"company logo"}
                            width={40}
                            height={40}
                            priority
                        />
                    </Link>
                    <div className="flex md:hidden">
                        <Image
                            onClick={() => setbarOnclick(!barOnclick)}
                            className="hover:cursor-pointer"
                            src={"/icon/bar.svg"}
                            alt={"bar"}
                            width={40}
                            height={40}
                            priority
                        />
                    </div>
                </div>
                <div className={"flex md:flex-row flex-col gap-8 py-8 md:py-0 " + (barOnclick ? "flex" : "hidden md:flex")}>
                    <ul className="flex gap-4 flex-col md:flex-row ">
                        {
                            // LIST OF LINKS...
                            jsonNavbarComp?.links &&
                            jsonNavbarComp?.links.map((link, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={index === 0 ? "link active-link flex justify-center items-center" : "link flex justify-center items-center"}
                                    >
                                        <Link
                                            onClick={() => setbarOnclick(false)}
                                            href={link.link}
                                        >{link.name}</Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <ul className="flex gap-4">
                        {
                            // LIST OF BUTTONS...
                            jsonNavbarComp?.buttons &&
                            jsonNavbarComp?.buttons.map((link, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? "link-button"
                                                : "link-button bg-[#98E0FF]"
                                        }
                                    >
                                        <Link href={link.link} target="_blank">
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComp;
