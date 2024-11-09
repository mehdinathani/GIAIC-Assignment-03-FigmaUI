import Image from "next/image";

import ContentSection from "./components/ContentSection";

export default function Home() {
  return (
    <div className="h-auto w-[1920px]">
      <ContentSection
        firsttext="Get More Done with whitepace"
        secondText="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
        thirdText="Try Whitepace free &rarr;"
        imageSrc="/assets/Image-container.png"
        reverse={true}
        bgColor="bg-[#043873]"
      />
      <ContentSection
        firsttext="Project Management"
        secondText="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
        thirdText="Get Started &rarr;"
        imageSrc="/assets/Image-container.png"
        reverse={true}
        bgColor="bg-white"
        heroStyle={false}
      />
      <ContentSection
        firsttext="Work together"
        secondText="With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others."
        thirdText="Try it now &rarr;"
        imageSrc="/assets/Work Together Image.png"
        reverse={false}
        bgColor="bg-white"
        heroStyle={false}
      />
      <ContentSection
        firsttext="Use as Extension"
        secondText="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
        thirdText="Let&rsquo;s Go &rarr;"
        imageSrc="/assets/Image-container.png"
        reverse={true}
        bgColor="bg-[#043873]"
      />
      <ContentSection
        firsttext="Customise it to your needs"
        secondText="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
        thirdText="Let&rsquo;s Go &rarr;"
        imageSrc="/assets/Image-container.png"
        reverse={false}
        heroStyle={false}
        bgColor="bg-white"
      />
      <div className="flex flex-col justify-center items-center bg-[#043873] w-[1920px] h-[574px] px-[220px] py-[140px]">
        <div className="w-[1064px]">


          <div className="center- justify-center text-center font-bold text-7xl leading-[87.14px] tracking-[0.02em]
        text-white mb-6
        ">Your work, everywhere you are</div>
          <p className="justify-center text-center font-normal text-lg tracking-tight leading-[30px] text-white">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
          <div className="flex flex-row justify-center items-center mt-[60px]">
            <button className=" h-16 w-[219px] bg-[#4F9CF9] rounded-lg gap-[10px] p-5
                text-white text-[18px] font-medium leading-[23px] tracking-[-0.02em] font-Inter flex items-center justify-center
                hover:bg-[#4F9CF9]/80
                ">Try Taskey &rarr;</button>
          </div>
        </div>
      </div>


      {/* our sponsers */}
      <div className="bg-white w-full h-[538px] py-[140px] px-[220px]  flex flex-col  items-center text-center mb-[143px]">
        <p className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] mb-[100px]">Our sponsors</p>
        <div className="flex flex-row gap-[216px] ">
          <Image src="/assets/Apple.png"
            alt="apple"
            width={55.47}
            height={68}
          />
          <Image src="/assets/microsoft 1.png"
            alt="microsoft 1"
            width={287}
            height={62}
          />
          <Image src="/assets/Slack_technologies_logo 1.png"
            alt="Slack_technologies_logo 1"
            width={280}
            height={71}
          />
          <Image src="/assets/Google.png"
            alt="Google"
            width={211}
            height={69.81}
          />

        </div>


      </div>

      {/* footer */}
      <div className="bg-[#043873] px-56">
        <div className="flex flex-row gap-[100px] w-full mx-auto"> {/* Make the container full-width */}
          {/* Column 1 */}
          <div className="flex flex-col justify-center items-center text-white flex-1 px-6 py-[140px]">
            <div className="h-[169px] w-[295px] text-white">
              <Image src="/assets/logo.png" alt="logo" width={191} height={34} className="mb-4" />
              <p className="font-normal text-lg leading-8 tracking-tight text-[#F7F7EE]">
                whitepace was created for the new ways we live and work. We make a better workspace around the world
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col justify-center items-center text-white flex-1 px-6 py-[140px]">
            <div className="footer">
              <ul className="flex flex-col" style={{ gap: '15.2px' }}>
                <h1 className="font-bold text-lg tracking-tight text-left justify-start leading-5">Product</h1>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Customer stories</li>
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col justify-center items-center text-white flex-1 px-6 py-[140px]">
            <div className="footer">
              <ul className="flex flex-col" style={{ gap: '15.2px' }}>
                <h1 className="font-bold text-lg tracking-tight text-left justify-start leading-5">Product</h1>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Customer stories</li>
              </ul>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col justify-center items-center text-white flex-1 px-6 py-[140px]">
            <div className="footer">
              <ul className="flex flex-col" style={{ gap: '15.2px' }}>
                <h1 className="font-bold text-lg tracking-tight text-left justify-start leading-5">Product</h1>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Customer stories</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >);
}
