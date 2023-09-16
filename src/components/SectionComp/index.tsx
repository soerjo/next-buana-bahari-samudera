'use client'

import React from "react";
import { useInView } from "framer-motion";

export interface ISectionComp {
    children: React.ReactNode,
    classname: string,
    id: string
}

export default function SectionComp({ children, id, classname }: ISectionComp) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { margin: '-50%' })

    // isInView && console.log(`section ${id} is in view`)


    return (
        <section ref={ref} id={id} className={"h-screen w-full " + classname}>
            <div className="container m-auto w-full h-full">
                {children}
            </div>
        </section>
    );
}
