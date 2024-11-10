    import React from "react";
    import { BentoGrid, BentoGridItem } from "./ui/Bento-Grid";
    import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
    } from "@tabler/icons-react";
    import { gridItems } from "../data";
    import { TextRevealCard } from "./ui/test-reverl-card";

    export function BentoGridSecondDemo() {
        return (
            <BentoGrid
                key={'1'}
                className="w-[70vw] mx-auto md:auto-rows-[15rem] mb-8 relative  grid-cols-1 md:grid-cols-5 auto-rows-[8rem] "
            >
                {gridItems.map((item, i) => (
                    <BentoGridItem
                        key={item.id}
                        id={item.id}
                        index={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={`${i === 0 ? 'row-span-4 min-h-96 md:h-full' : ''} ${item.className}`}
                        icon={item.icon}
                        leftList={['react.js', 'next.js', 'mongo']}
                        rightList={['react.js', 'next.js', 'mongo']}
                        TitleClassName={item.titleClassName}
                        img={item.img}
                        imgClassName={item.className}
                        spareImg={item.spareImg}
                    />
                ))}
            </BentoGrid>
        );
    }
    
