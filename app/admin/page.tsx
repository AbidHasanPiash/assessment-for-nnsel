'use client'
import apiConfig from '@/configs/apiConfig';
import { fetchData } from '@/utils/axios.client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react'

export default function AdminPage() {

    const { isLoading, data } = useQuery({
        queryKey: ['works'],
        queryFn: () => fetchData(apiConfig?.GET_WORK_LIST),
    });

    const handleEdit = (id: string) => {
        console.log('Edit:', id);
        // Add your edit logic here
      };
    
      const handleDelete = (id: string) => {
        console.log('Delete:', id);
        // Add your delete logic here
      };

      const formatDate = (date: string) => {
        return new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }).format(new Date(date));
      };

    return (
        <div className='container mx-auto'>
            <div className='flex items-center justify-between'>
                <h2 className='text-brand'>Manage Works</h2>
                <Link href={'admin/create'} className='p-1 rounded-md bg-brand hover:bg-opacity-80'>Create New</Link>
            </div>

            {isLoading ? <p>Loading..</p> :
                <table className="table-auto w-full border-collapse border border-secondary-light">
                    <thead>
                        <tr className="bg-brand/20">
                            <th className="border border-secondary-light px-4 py-2 text-left">Name</th>
                            <th className="border border-secondary-light px-4 py-2 text-left">Client</th>
                            <th className="border border-secondary-light px-4 py-2 text-left">Created At</th>
                            <th className="border border-secondary-light px-4 py-2 text-left">Updated At</th>
                            <th className="border border-secondary-light px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((work: any) => (
                            <tr key={work.id} className="hover:bg-secondary-dark">
                                <td className="border border-secondary-light px-4 py-2">{work.name}</td>
                                <td className="border border-secondary-light px-4 py-2">{work.client}</td>
                                <td className="border border-secondary-light px-4 py-2">{formatDate(work.createdAt)}</td>
                                <td className="border border-secondary-light px-4 py-2">{formatDate(work.updatedAt)}</td>
                                <td className="border border-secondary-light px-4 py-2">
                                    <div className="flex space-x-4">
                                        <button
                                            onClick={() => handleEdit(work.id)}
                                            className="text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(work.id)}
                                            className="text-red-500 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}
