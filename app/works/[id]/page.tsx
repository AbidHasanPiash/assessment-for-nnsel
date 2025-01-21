import PageHead from "@/components/common/PageHead";
import { works } from "../page"
import Image from "next/image";
import ButtonNextWork from "@/components/common/ButtonNextWork";
import ButtonPreviousWork from "@/components/common/ButtonPreviousWork";
import WorkCard from "@/components/card/WorkCard";
import WorkCardOthers from "@/components/card/WorkCardOthers";

interface WorkProps {
    params: { id: string };
}

interface Work {
    id: string;
    title: string;
    description: string;
    // Add other fields as per your `works` data structure
}

export default async function WorkDetailsPage({ params }: WorkProps) {
    const { id } = await params;
    const work = works.find(item => item.id === id)

    if (!work) {
        return (
            <div className="space-y-20 py-40">
                <PageHead title="Project Not Found" description="No details available for this project." />
                <p className="text-center text-xl text-red-500">Project not found.</p>
            </div>
        );
    }

    return (
        <div className='space-y-20 py-40'>
            <PageHead title="Project Detail" description="Details About The Porject" />
            <Image src={work?.image} width={1148} height={636} alt="work" className="max-w-[1148px] max-h-[636px] object-cover rounded-3xl" />

            <div className="flex flex-col space-y-10 max-w-[750px] w-full mx-auto text-grayscale-50">
                <div className="text-[32px] font-syne text-secondary-white">Project Story</div>
                <span>
                    The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it.
                </span>

                <span>
                    We cannot imagine a wedding without the opportunity to capture it on film, we would not be able to remember the growing up of children or the holidays if we did not have pictures.
                </span>
            </div>

            <div className="space-y-10">
                <div className="grid grid-cols-2 gap-10">
                    {work?.featureImages.map((image, index)=>(
                        <Image key={index} src={image} width={555} height={600} alt={'feature' + index} className="max-w-[555px] max-h-[600px] object-cover rounded-3xl" />
                    ))}
                </div>
                <div className="flex flex-col space-y-10 max-w-[750px] w-full mx-auto text-grayscale-50">
                    <div className="text-[32px] font-syne text-secondary-white">Day One</div>
                    {work?.features.map((feature, index)=>(
                        <span key={index}>{feature}</span>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between">
                <ButtonPreviousWork id={id}/>
                <ButtonNextWork id={id}/>
            </div>

            <div className="space-y-10">
                <h2 className="text-center">Other Projects</h2>
                <div className='grid grid-cols-3 gap-10'>
                    {works?.slice(0, 3)?.map((work, index)=>(
                        <WorkCardOthers key={index} work={work}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const data = works

    return data.map((item) => ({
        id: item.id,
    }))
}