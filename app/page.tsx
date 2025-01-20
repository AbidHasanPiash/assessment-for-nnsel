import Button from "@/components/common/Button";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      name: 'Brand Journey Improvements',
      image: '/image/Project-1.png',
      client: 'Organc',
      category: ['Branding', 'Logo design']
    },
    {
      name: 'Brand Grouping',
      image: '/image/Project-2.png',
      client: 'FR',
      category: ['Branding', 'Logo design']
    },
    {
      name: 'NFT Glimps',
      image: '/image/Project-3.png',
      client: 'Rumanda',
      category: ['NFT Design']
    },
    {
      name: 'Brand Suggestions',
      image: '/image/Project-4.png',
      client: 'T3d',
      category: ['NFT logo']
    },
  ]
  return (
    <div className="space-y-40 py-40">
      <div className="flex flex-col space-y-20">

        <div className="relative">
          <Image
            src={'/image/Blur-200-hero.png'}
            width={517}
            height={273}
            alt="Blur-200"
            className="absolute -top-[150px] right-0"
          />
          <h1 className="max-w-[891px] mx-auto text-center">Adaptive Logo Design for Your Brand</h1>
        </div>


        <Button className="uppercase tracking-wider mx-auto">
          Explore works
          <Image src={'/icon/arrow-right.png'} width={16} height={10} alt="arrow-right" className="ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center space-y-10">
          <div className="relative">
            <Image
              src={'/image/Blur-200-hero.png'}
              width={517}
              height={273}
              alt="Blur-200"
              className="absolute -top-[150px] -left-[150px]"
            />
            <h3 className="font-bold">Let's get know <br /> about me closer</h3>
          </div>
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

      <div className="space-y-20">
        <div className="flex flex-col items-center justify-center space-y-20">

          <div className="relative">
            <Image
              src={'/image/Blur-200.png'}
              width={517}
              height={273}
              alt="Blur-200"
              className="absolute -top-[150px] -right-[150px]"
            />
            <h2 className="font-bold">My Projects Highlight</h2>
          </div>
          <Button variant="outlined" className="uppercase tracking-wider mx-auto">
            Explore More
            <Image src={'/icon/arrow-right.png'} width={16} height={10} alt="arrow-right" className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-20">
          {projects.map((project, index) => (
            <div key={index} className="space-y-[32px]">
              <Image src={project?.image} width={560} height={620} alt="Project" />
              <div className="space-y-[32px]">
                <div className="flex items-center space-x-[32px]">
                  <h4 className="font-syne">{project?.name}</h4>
                  <div className="w-[48px] h-px bg-brand" />
                </div>
                <div className="space-y-[8px]">
                  <div className="flex space-x-[16px] w-fit">
                    <span className="w-[56px] text-[14px] text-grayscale-60">Client:</span>
                    <span className="text-[14px] text-grayscale-20">{project?.client}</span>
                  </div>
                  <div className="flex space-x-[16px] w-fit">
                    <span className="w-[56px] text-[14px] text-grayscale-60">Work:</span>
                    {project?.category.map((cat, index) => (
                      <span key={index} className="text-[14px] text-grayscale-20">{cat}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-10">
          <div className="space-y-10 w-fit pt-10">
          <div className="relative">
            <Image
              src={'/image/Blur-200-hero.png'}
              width={517}
              height={273}
              alt="Blur-200"
              className="absolute -top-[150px] -left-[150px]"
            />
            <h2 className="font-syne">Testimonial</h2>
          </div>
            <p className="text-grayscale-50">
              “Aaronn was fantastic to work with from start to finish. We were looking for
              a simple, stand-out logo and he delivered. I tried designing the logo myself
              thinking I wouldn't need to pay the money for a professional graphic designer
              but I was very wrong. Working with Aaronn was worth every penny and was
              surprisingly affordable! I remember him saying simplicity is key to a successful
              logo and boy he was right. I can't thank Aaronn enough for his effort and
              professionalism. I would recommend him to anyone looking for a design!”
            </p>
            <h4 className="font-syne">-Martin lee</h4>
          </div>
          <div className="w-[199px] h-[183px]">
            <Image src={'/icon/quote.png'} width={199} height={183} alt="quote" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
