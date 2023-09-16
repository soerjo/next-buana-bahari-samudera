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
    const jsonNavbarComp: JsonNavbarComp = jsondata || ({} as JsonNavbarComp);

    return (
        <nav className="fixed top-0 w-full flex justify-around items-center py-8">
            <Link href={jsonNavbarComp.links[0].link}>
                <Image
                    src={jsonNavbarComp.logosrc}
                    alt={"company logo"}
                    width={30}
                    height={30}
                />
            </Link>
            <div className="flex gap-8">
                <ul className="flex gap-4">
                    {
                        // LIST OF LINKS...
                        jsonNavbarComp?.links &&
                        jsonNavbarComp?.links.map((link, index) => {
                            return (
                                <li
                                    key={index}
                                    className={index === 0 ? "link active-link" : "link"}
                                >
                                    <Link href={link.link}>{link.name}</Link>
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
                                <li key={index}>
                                    <Link
                                        href={link.link}
                                        target="_blank"
                                        className={
                                            index % 2 === 0
                                                ? "link-button"
                                                : "link-button bg-[#98E0FF]"
                                        }
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </nav>
    );
};

export default NavbarComp;
