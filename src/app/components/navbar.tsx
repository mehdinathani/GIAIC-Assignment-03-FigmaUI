import Image from "next/image";

export default function NavBar() {
    return (
        <nav className="w-[1920px] h-[92px] bg-[#043873] flex items-center py-4 px-[220px] md:px-[220px]">
            {/* Logo Section */}
            <div className="flex-shrink-0">
                <Image
                    className="w-[191px] h-[34px] items-center justify-between hover:scale-105 cursor-pointer"
                    src="/assets/Logo.png" // Updated path with a leading "/"
                    alt="logo"
                    width={191} // Specify width and height as required by next/image
                    height={34}

                />
            </div>
            {/* Navigation Links Section */}
            <div className="text-white px-[220px] py-4 flex-grow flex items-center justify-end">
                <ul className="flex gap-[32px] font-medium text-[18px] leading-6 ">
                    <li className="transition-all duration-300 ease-in-out hover:font-bold hover:underline cursor-pointer">Products</li>
                    <li className="transition-all duration-300 ease-in-out hover:font-bold hover:underline cursor-pointer">Solutions</li>
                    <li className="transition-all duration-300 ease-in-out hover:font-bold hover:underline cursor-pointer">Resources</li>
                    <li className="transition-all duration-300 ease-in-out hover:font-bold hover:underline cursor-pointer">Pricing</li>
                </ul>
                <div className="bg-[#FFE492] w-[126px] h-[60px] px-10 py-4 rounded-lg ml-28 text-[#043873] text-[18px]">Login</div>
            </div>
        </nav>
    );
}
