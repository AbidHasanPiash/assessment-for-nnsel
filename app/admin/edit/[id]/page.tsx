import WorkForm from '@/components/form/WorkForm';
import apiConfig from '@/configs/apiConfig';
import { fetchDataAsServer } from '@/utils/axios.server';
import React from 'react'

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

export default async function WorkEditPage({ params }: WorkProps) {
    const { id } = await params;
    const work = await fetchWork(id);
    
        if (!work) {
            return (
                <div className="space-y-20 py-40">
                    <p className="text-center text-xl text-red-500">Project not found.</p>
                </div>
            );
        }
  return (
      <div className='p-20'>
          <WorkForm data={work}/>
      </div>
  )
}

export async function generateStaticParams() {
    const data = await fetchWorks()

    return data.map((item) => ({
        id: item.id,
    }))
}