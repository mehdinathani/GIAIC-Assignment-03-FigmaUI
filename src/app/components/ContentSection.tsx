import React from "react";
import Image from "next/image";

interface ContentSectionProps {
    text: string,
    imageSrc: string,
    reverse: boolean,
    bgColor?: string,
    height?: string,

}

const ContentSection: React.FC<ContentSectionProps> = ({ text, imageSrc, reverse = false, bgColor = 'bg-white', height }) => {
    return (
        <div className={`${bgColor} flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ""}  items-center p-8 rounded-lg `} style={{ height }}>
            <div className="md:w-1/2 p-4">
                <Image src={imageSrc} alt="Section Image" className="w-full h-auto rounded-md" width={824} height={549} />
            </div>
            <div className="md:w-1/2 p-4">
                <p className="text-lg md:text-xl">{text}</p>
            </div>
        </div>
    )
};

export default ContentSection;