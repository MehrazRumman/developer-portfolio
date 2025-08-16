// @flow strict
import Image from "next/image";
import { openSourceContributions } from "@/utils/data/opensource";
import { BsGithub } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import github from '/public/lottie/code.json';

function OpenSource() {
  return (
    <div id="opensource" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Open Source
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={github} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                openSourceContributions.map(contribution => (
                  <GlowCard key={contribution.id} identifier={`opensource-${contribution.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex items-start gap-x-8 px-3 py-5">
                        <div className="text-green-500 transition-all duration-300 hover:scale-125 mt-1">
                          <BsGithub size={36} />
                        </div>
                        <div className="flex-1">
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase text-white">
                            {contribution.project}
                          </p>
                          <p className="text-sm sm:text-base text-[#16f2b3] mb-1">
                            {contribution.type}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            {contribution.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource; 