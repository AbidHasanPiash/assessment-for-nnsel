import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ButtonPreviousWork({ id }: { id?: string }) {
  if (!id) {
    return (
      <div className="flex items-center justify-center space-x-3 uppercase opacity-50 cursor-not-allowed">
        <Image
          src={'/icon/big-arrow-left.png'}
          width={50}
          height={13}
          alt={'arrow-left'}
          className="pb-3"
        />
        <span>Previous work</span>
      </div>
    );
  }

  return (
    <Link href={`/works/${id}`} className="flex items-center justify-center space-x-3 uppercase">
      <Image
        src={'/icon/big-arrow-left.png'}
        width={50}
        height={13}
        alt={'arrow-left'}
        className="pb-3"
      />
      <span>Previous work</span>
    </Link>
  );
}
