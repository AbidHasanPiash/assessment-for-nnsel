import { works } from '@/app/works/page';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ButtonNextWork({ id }: { id: string }) {
  const currentIndex = works.findIndex((work) => work.id === id);
  const nextIndex = (currentIndex + 1) % works.length; // Loop back to the first work if at the last work
  const nextWorkId = works[nextIndex].id;

  return (
    <Link href={`/works/${nextWorkId}`} className="flex items-center justify-center space-x-3 uppercase">
      <span>Next work</span>
      <Image src={'/icon/big-arrow-right.png'} width={50} height={13} alt={'arrow-right'} className="pb-3" />
    </Link>
  );
}
