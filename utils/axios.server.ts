import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import apiConfig from '@/configs/apiConfig';

const axiosInstanceServer = axios.create({
  baseURL: apiConfig?.BASE_URL,
  timeout: 30000,
});

// Interceptor to add Authorization header
axiosInstanceServer.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (config.headers) {
      config.headers['Authorization'] = `abid Hasan`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export const handleAxiosErrorAsServer = (error: unknown): null => {
  if (axios.isCancel(error)) {
    console.warn('Request was canceled.');
    return null;
  }

  if ((error as AxiosError).code === 'ECONNABORTED') {
    console.error('Request timed out. Please try again later.');
    return null;
  }

  if (axios.isAxiosError(error)) {
    const code = error.response?.status;
    const errorMessage = error.response?.data?.message;

    if (code === 404) {
      console.warn(`Resource not found (404): ${errorMessage || 'No additional message'}`);
      return null;
    } else {
      console.error(`Server error: ${code} - ${errorMessage}`);
      return null;
    }
  } else {
    console.error(`Unknown error: ${(error as Error).message}`);
  }

  throw error; // Propagate error if necessary
};

export async function fetchDataAsServer<T>(
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<T | null> {
  try {
    // Use axiosInstanceServer to include custom configurations like interceptors
    const response = await axiosInstanceServer.get<T>(endpoint, config);
    return response?.data;
  } catch (error) {
    handleAxiosErrorAsServer(error);
    return null; // Ensure a null return when an error occurs
  }
}

export default axiosInstanceServer;
