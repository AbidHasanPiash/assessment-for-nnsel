import axios from 'axios';
import apiConfig from '@/configs/apiConfig';

const axiosInstance = axios.create({
    baseURL: apiConfig?.BASE_URL,
    timeout: 30000,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        config.headers['Authorization'] = `abid Hasan`
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const getMessageFromResponse = (response) => {
    if (response?.data?.message) {
        return response.data.message;
    }

    // Fallback if the "message" field is not present
    return 'No response from server';
};

export const handleAxiosError = (error) => {
    if (axios.isCancel(error)) {
        console.log('Request was canceled.');
        return;
    }

    if (error.code === 'ECONNABORTED') {
        console.error('Request timed out. Please try again.');
        return; // Stop further execution
    }

    if (error.response) {
        const code = error.response.status;
        const errorMessage =
            error.response?.data?.data?.message ||
            error.response?.data?.message;

        if (code === 401) {
            logout(true);
        }

        if (code === 404) {
            return []; // Handle 404 differently, return empty array
        }

        console.error(`Server error: ${code} - ${errorMessage}`);
    } else if (error.request) {
        console.error('Network error: No response received from server.');
    } else {
        console.error(`Axios error: ${error.message}`);
    }

    throw error; // Propagate the error for further handling
};

export const handleAxiosErrorAsServer = (error) => {
    if (axios.isCancel(error)) {
        console.warn('Request was canceled.');
        return null;
    }

    if (error.code === 'ECONNABORTED') {
        console.error('Request timed out. Please try again later.');
        return null; // Stop further execution
    }

    if (error.response) {
        const code = error.response.status;
        const errorMessage = error.response?.data?.message;

        if (code === 404) {
            console.warn(
                `Resource not found (404): ${errorMessage || 'No additional message'}`
            );
            return null; // Return null for missing data
        } else {
            console.error(`Server error: ${code} - ${errorMessage}`);
            return null;
        }
    } else if (error.request) {
        console.error('Network error: No response received from server.');
    } else {
        console.error(`Axios error: ${error.message}`);
    }

    throw error; // Propagate error if necessary
};

export async function fetchData(endpoint) {
    try {
        const response = await axiosInstance.get(endpoint);
        return response?.data?.data;
    } catch (error) {
        handleAxiosError(error);
    }
}

export async function fetchDataAsServer(endpoint) {
    try {
        const config = {
            headers: {
                'X-Site-Identifier':
                    'U2FsdGVkX19CrvanLaGNMpKUHnpq/NMQW4CGQyxaOSc=',
            },
        };
        const response = await axiosInstance.get(endpoint, config);
        return response?.data?.data;
    } catch (error) {
        handleAxiosErrorAsServer(error);
    }
}

export async function postData(endpoint, data, isFileRequest = false) {
    try {
        const isFormData = data instanceof FormData;
        const requestData = isFormData ? data : JSON.stringify({ ...data });

        const headers = isFormData
            ? { 'Content-Type': 'multipart/form-data' }
            : { 'Content-Type': 'application/json' };

        // If the request is for a file, we set the responseType to 'blob'
        const config = isFileRequest
            ? { headers, responseType: 'blob' }
            : { headers };

        const response = await axiosInstance.post(
            endpoint,
            requestData,
            config
        );

        // If it's a file request, we don't return a success console, just return the file
        if (isFileRequest) {
            return response.data; // This will be the Blob
        }

        const message = getMessageFromResponse(response);
        console.log(message);
        return response?.data?.data;
    } catch (error) {
        handleAxiosError(error);
    }
}

export async function updateData(endpoint, data) {
    try {
        const isFormData = data instanceof FormData;
        const requestData = isFormData ? data : JSON.stringify({ ...data });

        const headers = isFormData
            ? { 'Content-Type': 'multipart/form-data' }
            : { 'Content-Type': 'application/json' };

        const response = await axiosInstance.patch(endpoint, requestData, {
            headers,
        });

        const message = getMessageFromResponse(response);
        console.log(message);
        return response?.data?.data;
    } catch (error) {
        handleAxiosError(error);
    }
}

export async function deleteData(endpoint, id) {
    const url = endpoint + id;
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
