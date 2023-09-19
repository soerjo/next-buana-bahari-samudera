'use client'

import React from "react";
import { useInView } from "framer-motion";
import { AllContext } from "../ContextComp";

export interface ISectionComp {
    children: React.ReactNode,
    classname?: string,
    id: string
}

export default function SectionComp({ children, id, classname }: ISectionComp) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { margin: '-50%' })
    const { setallContext } = React.useContext(AllContext);

    React.useEffect(() => {
        isInView && setallContext(id)

    }, [isInView])


    return (
        <section ref={ref} id={id} className={"min-h-screen md:h-screen w-full " + classname}>
            {children}
        </section>
    );
}
