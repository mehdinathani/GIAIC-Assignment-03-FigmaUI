import React from "react";
import Image from "next/image";
import { withRouter } from "next/router";

interface ContentSectionProps {
    firsttext: string,
    secondText: string,
    thirdText: string,
    imageSrc: string,
    reverse: boolean,
    bgColor?: string,
    height?: string,
    heroStyle?: boolean,

}

const ContentSection: React.FC<ContentSectionProps> = ({ heroStyle = true, firsttext, secondText, thirdText, imageSrc, reverse = false, bgColor = 'bg-white', height }) => {
    return (
        <div className={`${bgColor ?? 'bg-white'} flex items-center    ${reverse ? 'md:flex-row-reverse' : ""}  items-center p-8 py-[140px] px-[220px] mb-[100px]`} style={{ height }}

        >
            {/* Image section */}
            <div className="md:w-1/2 p-4 w-[824px] h-[549px]">
                <Image src={imageSrc} alt="Section Image" width={824} height={549} />
            </div>
            {/* Text section */}
            <div className="md:w-1/2 p-4 h-[361px] w-[656px] gap-[60px]">
                {/* 1st text */}
                <p className={`text-lg text-[64px] font-bold leading-[77.45px] tracking-[-0.02em] ${heroStyle ? 'text-white' : 'text-[#212529]'} font-Inter mb-6`}
                    style={
                        {
                            fontFamily: "Inter, sans-serif",
                        }
                    }
                >{firsttext}</p>
                {/* 2nd Text */}
                <p className={`text-[18px] font-normal leading-[30px] tracking-[-0.02em]  ${heroStyle ? 'text-white' : 'text-[#212529]'} font-Inter mb-[60px]`}
                    style={
                        {
                            fontFamily: "Inter, sans-serif",
                        }

                    }
                >{secondText}</p>
                {/* 3rd Text */}
                <button className="h-16 w-[219px] bg-[#4F9CF9] rounded-lg gap-[10px] p-5
                text-white text-[18px] font-medium leading-[23px] tracking-[-0.02em] font-Inter flex items-center justify-center
                hover:bg-[#4F9CF9]/80
                ">{thirdText}</button>
            </div>
        </div>
    )
};

export default ContentSection;