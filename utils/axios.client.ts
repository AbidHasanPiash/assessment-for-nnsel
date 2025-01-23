'use client';

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import apiConfig from '@/configs/apiConfig';

const axiosInstance = axios.create({
  baseURL: apiConfig?.BASE_URL,
  timeout: 30000,
});

axiosInstance.interceptors.request.use(
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

const getMessageFromResponse = (response: AxiosResponse): string => {
  if (response?.data?.message) {
    return response.data.message;
  }

  // Fallback if the "message" field is not present
  return 'No response from server';
};

export const handleAxiosError = (error: unknown): void => {
  if (axios.isCancel(error)) {
    console.log('Request was canceled.');
    return;
  }

  if ((error as AxiosError).code === 'ECONNABORTED') {
    console.error('Request timed out. Please try again.');
    return;
  }

  if (axios.isAxiosError(error)) {
    const code = error.response?.status;
    const errorMessage =
      error.response?.data?.data?.message || error.response?.data?.message;

    if (code === 404) {
      console.error('Resource not found (404).');
      return; // Handle 404 differently
    }

    console.error(`Server error: ${code} - ${errorMessage}`);
  } else {
    console.error(`Unknown error: ${(error as Error).message}`);
  }

  throw error; // Propagate the error for further handling
};

export async function fetchData(endpoint: string): Promise<any> {
  try {
    const response = await axiosInstance.get(endpoint);
    return response?.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

export async function postData(endpoint: string, data: any, isFileRequest = false): Promise<any> {
  try {
    const isFormData = data instanceof FormData;
    const requestData = isFormData ? data : JSON.stringify({ ...data });

    const headers = isFormData
      ? { 'Content-Type': 'multipart/form-data' }
      : { 'Content-Type': 'application/json' };

    const config: AxiosRequestConfig = isFileRequest
      ? { headers, responseType: 'blob' }
      : { headers };

    const response = await axiosInstance.post(endpoint, requestData, config);

    if (isFileRequest) {
      return response.data; // Return Blob for file request
    }

    const message = getMessageFromResponse(response);
    console.log(message);
    return response?.data?.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

export async function updateData(endpoint: string, data: any): Promise<any> {
  try {
    const isFormData = data instanceof FormData;
    const requestData = isFormData ? data : JSON.stringify({ ...data });

    const headers = isFormData
      ? { 'Content-Type': 'multipart/form-data' }
      : { 'Content-Type': 'application/json' };

    const response = await axiosInstance.patch(endpoint, requestData, { headers });

    const message = getMessageFromResponse(response);
    console.log(message);
    return response?.data?.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

export async function deleteData(endpoint: string, id: string): Promise<any> {
  const url = `${endpoint}${id}`;
  try {
    const response = await axiosInstance.delete(url);

    const message = getMessageFromResponse(response);
    console.log(message);
    return response?.data?.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

export default axiosInstance;
