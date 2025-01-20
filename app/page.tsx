import Button from "@/components/common/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-40 py-40">
      <div className="flex flex-col space-y-20">
        <h1 className="max-w-[891px] mx-auto text-center">Adaptive Logo Design for Your Brand</h1>
        <Button className="uppercase tracking-wider mx-auto">
          Explore works
          <Image src={'/icon/arrow-right.png'} width={16} height={10} alt="arrow-right" className="ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center space-y-10">
          <h3 className="font-bold">Let's get know <br /> about me closer</h3>
          <p className="text-grayscale-50">
            Aaronn is a New York-based visual designer focusing on branding
            and visual identity. Her portfolio showcases her wide range of
            work, spanning books, posters and web design.
          </p>
          <Button>
            Discover More About Me
          </Button>
        </div>
        <div className="place-items-end relative">
          <div className="absolute right-[440px] bottom-10 w-[55px] h-[178px] ring-1 ring-brand rounded-full" />
          <div className="absolute right-0 -top-[17px] w-[110px] h-[34px] ring-1 ring-brand rounded-full" />
          <Image src={'/image/Man-hero.png'} width={454} height={506} alt="Man-hero" className="" />
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center justify-center space-y-10">
          <h2 className="font-bold">My Projects Highlight</h2>
          <Button variant="outlined" className="uppercase tracking-wider mx-auto">
            Explore More
            <Image src={'/icon/arrow-right.png'} width={16} height={10} alt="arrow-right" className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
