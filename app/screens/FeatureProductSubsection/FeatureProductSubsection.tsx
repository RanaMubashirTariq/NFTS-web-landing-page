"use client";
import { ChevronLeftIcon, ChevronRightIcon, HeartIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export default function FeatureProductSubsection() {
  const countdownData = [
    { value: "02", label: "Days" },
    { value: "09", label: "Hours" },
    { value: "12", label: "Minutes" },
    { value: "44", label: "Seconds" },
  ];

  // Track current center card index
  const images = [
    "/cat-1.png",
    "/cat-2.png",
    "/cat-center.png",
    "/cat-3.png",
    "/cat4.png",
  ];
  const [centerIndex, setCenterIndex] = useState(2);

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % images.length);
  };

  // Get rotation style based on position relative to center
  const getRotation = (index: number) => {
    if (index === centerIndex) return "rotate-0";
    if ((index + 1) % images.length === centerIndex) return "-rotate-0";
    if ((index - 1 + images.length) % images.length === centerIndex) return "rotate-[0]";
    return "rotate-0";
  };

  return (
    <section className="relative w-full h-[563px] max-[500px]:h-[500px] mt-[625px] max-[1000px]:mt-[75px] max-[767px]:mt-1">
      <div className="relative w-full h-[563px] flex justify-center">
        {/* ... background blur stays the same */}
        <div className="absolute w-[220px]  h-[216px] top-[300px] right-[556px] rounded-[109.84px/107.93px] rotate-[177.74deg] blur-[147.75px] bg-[linear-gradient(141deg,rgba(123,164,154,0.5)_0%,rgba(21,151,119,0.5)_100%)]" />

        {/* Example: Left-most image */}
        <img
          className={`absolute min-[1700px]:w-[260px] min-[1500px]:w-[230px]  w-[209px] max-[1300px]:w-[180px]  h-[338px] max-[500px]:h-[300px] top-[50px] left-0 object-cover transition-transform duration-500 ${getRotation(0)}`}
          alt="Rectangle"
          src={images[0]}
        />

        {/* Example: Second image */}
        <img
          className={`absolute min-[1700px]:w-[390px] min-[1700px]:left-[200px] min-[1500px]:w-[360px] min-[1500px]:left-[150px]  w-[330px] max-[1300px]:w-[240px] h-[375px] max-[500px]:h-[350px] rounded-[12px] top-7 left-[100px] object-cover max-[1100px]:left-[60px] max-[560px]:left-[40px] max-[400px]:left-[15px] transition-transform duration-500 ${getRotation(1)}`}
          alt="Rectangle"
          src={images[1]}
        />

        {/* Arrows */}
        <div className="absolute top-[473px] right-1/2 translate-x-1/2 flex gap-[34px] max-[500px]:top-[410px]">
          <Button onClick={handlePrev} variant="outline" size="icon" className="w-[60px] cursor-pointer h-[60px] max-[500px]:w-[40px] max-[500px]:h-[40px] rounded-[30px] border-[0.75px] border-white bg-transparent hover:bg-white/10">
            <ChevronLeftIcon className="w-[18px] h-[18px] text-[#d3f85a]" />
          </Button>
          <Button onClick={handleNext} variant="outline" size="icon" className="w-[60px] cursor-pointer h-[60px] max-[500px]:w-[40px] max-[500px]:h-[40px] rounded-[30px] border-[0.75px] border-white bg-transparent hover:bg-white/10">
            <ChevronRightIcon className="w-[18px] h-[18px] text-[#d3f85a]" />
          </Button>
        </div>

        {/* Your center Card */}
        <Card className={`relative min-[1700px]:w-[850px] min-[1500px]:w-[765px]  w-[765px] max-[1100px]:w-[730px] max-[1000px]:w-[400px] max-[550px]:h-[280px] max-[550px]:w-[320px] max-[400px]:w-[300px] max-[350px]:w-[260px]  h-[428px] bg-white/6   backdrop-blur-sm  rounded-xl border-0 mb-[107px] z-10 transition-transform duration-500 ${getRotation(2)}`}>
          <CardContent className="p-0 h-full ">
            <img
              className="absolute min-[1700px]:w-[390px] min-[1500px]:w-[360px] w-[330px] h-[428px] max-[500px]:h-[390px] top-0 left-px rounded-[12px] object-cover max-[1100px]:w-[300px] max-[1000px]:w-[100%]"
              alt="Rectangle"
              src={images[centerIndex]}
            />
            {/* Rest of your original content untouched */}
                        <div className="absolute min-[1700px]:left-[430px] min-[1500px]:left-[380px] w-[363px] h-16 top-[90px] left-[353px]  max-[1100px]:left-[323px] max-[1000px]:left-[10px] max-[550px]:top-[110px]">
              <h2 className="absolute w-[360px] top-0 left-px [font-family:'Exo2'] font-semibold text-white text-[26.2px] max-[767px]:text-[20px] tracking-[0] leading-[37.5px] whitespace-nowrap">
                Irradiation of Fake Yellow
              </h2>

              <div className="absolute w-full h-3.5 top-[50px] left-0">
                <p className="absolute top-0 left-[88px] [font-family:'Exo2'] max-[767px]:left-[0] font-semibold text-white text-[11.2px] tracking-[0] leading-[normal]">
                  Auction · 1 of 1 available · Highest bid
                </p>

                <img
                  className="absolute w-[79px] h-[11px] top-0.5 left-0 max-[767px]:top-[20px]"
                  alt="Group"
                  src='/star-complete.png'
                                  />
              </div>
            </div>

            <div className="absolute w-[375px] h-[383px] top-[22px] left-[353px] min-[1700px]:left-[430px] min-[1500px]:left-[380px]  max-[1100px]:left-[323px] max-[1000px]:left-[10px] ">
              <div className="absolute w-[315px] h-14 top-[327px] left-px flex gap-[13px] max-[550px]:top-[300px]">
                <Button
                  variant="outline"
                  className="w-[150px] cursor-pointer transform transition-transform duration-300 hover:scale-90 max-[550px]:w-[100px] h-14 max-[550px]:h-10 rounded-[60px] border-[0.75px] border-[#d3f85a]  bg-transparent hover:bg-[#d3f85a]/10 [font-family:'Exo2'] font-semibold text-[#d3f85a] text-[15px] max-[550px]:text-[10px]"
                >
                  View Product
                </Button>

                <Button className="w-[150px] cursor-pointer transform transition-transform duration-300 hover:scale-90 h-14 max-[550px]:w-[100px] h-14 max-[550px]:h-10  bg-[#d3f85a] hover:bg-[#d3f85a]/90 rounded-[60px] [font-family:'Exo2'] font-semibold text-black text-[15px] max-[550px]:text-[10px]">
                  Place a Bid
                </Button>
              </div>

              <div className="absolute w-[375px] h-[54px] top-0 left-0 flex items-center justify-between max-[550px]:flex-col max-[550px]:items-start max-[550px]:gap-[10px]" >
                <div className="w-40 h-[54px] bg-[#ffffff1a] rounded-[67.5px] flex items-center px-1">
                  <img
                    className="w-[45px] h-[45px] rounded-full"
                    alt="Ellipse"
                    src='/avater-group.png'
                  />
                  <span className="ml-3 [font-family:'Exo2'] font-semibold text-white text-xs">
                    @WalkerJhone
                  </span>
                </div>

                <div className="flex items-center gap-2">
                   <img src="/heart.png" className="w-[49px] h-[49px] cursor-pointer transform transition-transform duration-300 hover:scale-90 max-[550px]:w-[30px] max-[550px]:h-[30px]" alt="" />
                  <img  src='/insta.png' className="w-[49px] h-[49px] cursor-pointer transform transition-transform duration-300 hover:scale-90 max-[550px]:w-[30px] max-[550px]:h-[30px]" alt="Group" />

                  <img src='/tiwter.png' className="w-[49px] h-[49px] cursor-pointer transform transition-transform duration-300 hover:scale-90 max-[550px]:w-[30px] max-[550px]:h-[30px]" alt="Group" />
                </div>
              </div>

              <div className="absolute w-[371px] h-[106px] top-[179px] left-0 flex">
                <div className="w-[111px] h-[105px] max-[350px]:w-[80px]">
                  <p className="[font-family:'Exo2'] font-normal text-white text-[13.5px] max-[550px]:text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Current Bid
                  </p>
                  <div className="flex items-baseline mt-4">
                    <span className="[font-family:'Exo2'] font-bold text-white text-[21px] max-[550px]:text-[12px] tracking-[0] leading-[normal]">
                      0.70
                    </span>
                    <span className="ml-2 [font-family:'Exo2'] font-bold text-white text-[21px] max-[550px]:text-[12px] tracking-[0] leading-[normal]">
                      ETH
                    </span>
                  </div>
                  <p className="mt-4 [font-family:'Exo2'] font-normal text-white text-[10.5px] max-[550px]:text-[7px] tracking-[0] leading-[normal]">
                    $245665
                  </p>
                </div>

                <img
                  className="w-px h-[83px] mx-2 mt-3 max-[550px]:mt-1 max-[350px]:mx-px"
                  alt="Vector"
                  src="/vector-200.png"
                />

                <div className="w-[238px] h-[100px] ml-7 max-[350px]:ml-3">
                  <p className="[font-family:'Exo2'] font-normal text-white text-[15.8px] max-[550px]:text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Auction Ending In
                  </p>

                  <div className="flex gap-4 mt-4 max-[350px]:gap-2">
                    {countdownData.map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <span className="[font-family:'Exo2'] font-semibold text-white text-[21px] max-[550px]:text-[12px] tracking-[0] leading-[normal]">
                          {item.value}
                        </span>
                        <span className="mt-6 [font-family:'Exo2'] font-normal text-white text-[10.5px] max-[550px]:text-[7px] tracking-[0] leading-[normal]">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Right-most container unchanged */}
      <div className="absolute min-[1700px]:w-[535px] min-[1500px]:w-[429px] w-[340px] max-[1300px]:w-[253px] max-[1000px]:w-[340px] h-[375px] top-7 right-0 z-0">
        <img
          className={`absolute min-[1700px]:w-[300px] min-[1500px]:w-[260px] min-[1700px]:left-[250px] min-[1500px]:left-[180px] w-[209px] max-[1300px]:w-[170px] max-[1000px]:w-[209px]  h-[338px] max-[500px]:h-[300px] max-[400px]:top-[30px] top-[22px] left-[131px] object-cover rounded-[12px] transition-transform duration-500 ${getRotation(4)}`}
          alt="Rectangle"
          src={images[4]}
        />
        <img
          className={`absolute min-[1700px]:w-[360px] min-[1500px]:w-[270px] w-[244px] max-[1300px]:w-[200px] max-[1000px]:w-[244px] h-[375px] max-[500px]:h-[350px] top-0 left-0 object-cover rounded-[12px] max-[1100px]:left-[30px] max-[560px]:left-[60px] max-[400px]:left-[80px] z-10 transition-transform duration-500 ${getRotation(3)}`}
          alt="Rectangle"
          src={images[3]}
        />
      </div>
    </section>
  );
}
