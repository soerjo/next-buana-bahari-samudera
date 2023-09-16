import React from "react";

export interface ISectionComp {
    children: React.ReactNode,
    id: string
}

export default function SectionComp({ children, id }: ISectionComp) {
    return (
        <section
            className="min-h-[85vh] lg:h-screen"
            id={id}
        >
            {children}
        </section>
    );
}
