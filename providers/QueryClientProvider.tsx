'use client';

import { ReactNode } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  isServer,
} from '@tanstack/react-query';

// Function to create a new QueryClient instance
function makeQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Default staleTime to avoid refetching immediately on the client
        staleTime: 60 * 1000, // 1 minute
      },
    },
  });
}

// Declare a browser-level QueryClient instance
let browserQueryClient: QueryClient | undefined;

// Function to get or create a QueryClient
function getQueryClient(): QueryClient {
  if (isServer) {
    // Server: always create a new QueryClient
    return makeQueryClient();
  } else {
    // Browser: reuse existing QueryClient or create a new one
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient();
    }
    return browserQueryClient;
  }
}

// Props type definition
interface QueryClientProviderWrapperProps {
  children: ReactNode;
}

// QueryClientProviderWrapper component
export default function QueryClientProviderWrapper({
  children,
}: QueryClientProviderWrapperProps) {
  // Get the QueryClient instance
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
