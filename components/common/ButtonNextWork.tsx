import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ButtonNextWork({ id }: { id?: string }) {
  if (!id) {
    return (
      <div className="flex items-center justify-center space-x-3 uppercase opacity-50 cursor-not-allowed">
        <span>Next work</span>
        <Image
          src={'/icon/big-arrow-right.png'}
          width={50}
          height={13}
          alt={'arrow-right'}
          className="pb-3"
        />
      </div>
    );
  }

  return (
    <Link href={`/works/${id}`} className="flex items-center justify-center space-x-3 uppercase">
      <span>Next work</span>
      <Image
        src={'/icon/big-arrow-right.png'}
        width={50}
        height={13}
        alt={'arrow-right'}
        className="pb-3"
      />
    </Link>
  );
}
