import { works } from '@/app/works/page';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ButtonPreviousWork({ id }: { id: string }) {
  const currentIndex = works.findIndex((work) => work.id === id);
  const prevIndex = (currentIndex - 1 + works.length) % works.length; // Loop back to the last work if at the first work
  const prevWorkId = works[prevIndex].id;

  return (
    <Link href={`/works/${prevWorkId}`} className="flex items-center justify-center space-x-3 uppercase">
      <Image src={'/icon/big-arrow-left.png'} width={50} height={13} alt={'arrow-left'} className="pb-3" />
      <span>Previous work</span>
    </Link>
  );
}
