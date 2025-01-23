import PageHead from "@/components/common/PageHead";
import Image from "next/image";
import ButtonNextWork from "@/components/common/ButtonNextWork";
import ButtonPreviousWork from "@/components/common/ButtonPreviousWork";
import WorkCardOthers from "@/components/card/WorkCardOthers";
import { fetchDataAsServer } from "@/utils/axios.server";
import apiConfig from "@/configs/apiConfig";

interface WorkProps {
    params: { id: string };
}

interface Work {
    id: string;
    name: string;
    client: string;
    image: string;
    cover: string;
    details: string[];
    features: string[];
    featureImages: string[];
    createdAt: string;
    updatedAt: string;
    previousItem?: { id: string };
    nextItem?: { id: string };
    others: Work[];
}

// Fetch individual work details
async function fetchWork(id: string): Promise<Work | null> {
    try {
        const work = await fetchDataAsServer<Work>(`${apiConfig.GET_WORK_BY_ID}${id}`);
        return work;
    } catch {
        return null;
    }
}

// Fetch all works for the "Other Projects" section
async function fetchWorks(): Promise<Work[]> {
    try {
        const works = await fetchDataAsServer<Work[]>(apiConfig.GET_WORK_LIST);
        return works || [];
    } catch {
        return [];
    }
}

export default async function WorkDetailsPage({ params }: WorkProps) {
    const { id } = await params;
    const work = await fetchWork(id);

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
            <Image src={work?.cover} width={1148} height={636} alt="work" className="w-[1148px] h-[636px] object-cover rounded-3xl" />

            <div className="flex flex-col space-y-10 max-w-[750px] w-full mx-auto text-grayscale-50">
                <div className="text-[32px] font-syne text-secondary-white">Project Story: {work?.name}</div>
                {work?.details?.map((item, index)=>(
                    <span key={index}>{item}</span>
                ))}
            </div>

            <div className="space-y-10">
                <div className="grid grid-cols-2 gap-10">
                    {work?.featureImages.map((image, index) => (
                        <Image key={index} src={image} width={555} height={600} alt={'feature' + index} className="max-w-[555px] max-h-[600px] object-cover rounded-3xl" />
                    ))}
                </div>
                <div className="flex flex-col space-y-10 max-w-[750px] w-full mx-auto text-grayscale-50">
                    <div className="text-[32px] font-syne text-secondary-white">Day One</div>
                    {work?.features.map((feature, index) => (
                        <span key={index}>{feature}</span>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between">
                <ButtonPreviousWork id={work?.previousItem?.id || ''} />
                <ButtonNextWork id={work?.nextItem?.id || ''} />
            </div>

            <div className="space-y-10">
                <h2 className="text-center">Other Projects</h2>
                <div className='grid grid-cols-3 gap-10'>
                    {work?.others?.map((work, index) => (
                        <WorkCardOthers key={index} work={work} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const data = await fetchWorks()

    return data.map((item) => ({
        id: item.id,
    }))
}