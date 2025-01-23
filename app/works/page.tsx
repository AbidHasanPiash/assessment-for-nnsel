import WorkCard from '@/components/card/WorkCard';
import PageHead from '@/components/common/PageHead';
import apiConfig from '@/configs/apiConfig';
import axiosInstance from '@/utils/axios';
import axios from 'axios';

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

async function fetchWorks(): Promise<Work[]> {
  try {
    const response = await axios.get(apiConfig?.BASE_URL + apiConfig?.GET_WORK_LIST);
    return response.data;
  } catch (error) {
    console.error('Error fetching works:', error);
    return [];
  }
}

export default async function WorkPage() {
  const works = await fetchWorks();

  return (
    <div className="space-y-20 py-40">
      <PageHead title="My works" description="Showcase About Works" />
      <div className="grid grid-cols-6 gap-10">
        {works.map((work, index) => (
          <WorkCard
            key={work.id}
            work={work}
            className={index >= 3 && index < 5 ? 'col-span-3' : 'col-span-2'}
          />
        ))}
      </div>
    </div>
  );
}
