'use client';

import QueryClientProviderWrapper from './QueryClientProvider';
import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <QueryClientProviderWrapper>
      {children}
    </QueryClientProviderWrapper>
  );
}
