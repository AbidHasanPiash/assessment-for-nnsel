'use client';
import apiConfig from '@/configs/apiConfig';
import { postData, updateData } from '@/utils/axios.client';
import { handleArrayFieldChange } from '@/utils/formikHelper';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';

type WorkFormProps = {
    data?: {
        id?: string;
        name: string;
        client: string;
        image: string;
        cover: string;
        details: string[];
        features: string[];
        featureImages: string[];
    };
};

export default function WorkForm({ data }: WorkFormProps) {
    const queryClient = useQueryClient();
    const router = useRouter()

    const initialValues = {
        name: data?.name || '',
        client: data?.client || '',
        image: data?.image || '',
        cover: data?.cover || '',
        details: data?.details || [''],
        features: data?.features || [''],
        featureImages: data?.featureImages || [''],
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(3, 'Name must be at least 3 characters long')
            .max(100, 'Name must not exceed 100 characters'),
        client: Yup.string()
            .required('Client is required')
            .min(3, 'Client must be at least 3 characters long')
            .max(100, 'Client must not exceed 100 characters'),
        image: Yup.string()
            .required('Image URL is required')
            .url('Image must be a valid URL'),
        cover: Yup.string()
            .required('Cover image URL is required')
            .url('Cover must be a valid URL'),
        details: Yup.array()
            .of(
                Yup.string()
                    .required('Detail is required')
                    .min(3, 'Each detail must be at least 3 characters long')
                    .max(1000, 'Each detail must not exceed 200 characters')
            )
            .min(1, 'At least one detail is required'),
        features: Yup.array()
            .of(
                Yup.string()
                    .required('Feature is required')
                    .min(3, 'Each feature must be at least 3 characters long')
                    .max(1000, 'Each feature must not exceed 200 characters')
            )
            .min(1, 'At least one feature is required'),
        featureImages: Yup.array()
            .of(
                Yup.string()
                    .required('Feature Image is required')
                    .url('Each feature image must be a valid URL')
            )
            .min(1, 'At least one feature image is required'),
    });

    const submit = async (values: typeof initialValues) => {
        if (data?.id) {
            await updateData(`${apiConfig?.UPDATE_WORK}${data.id}`, values);
        } else {
            await postData(apiConfig?.CREATE_WORK, values);
        }
        await queryClient.invalidateQueries(
            {
                queryKey: ['works'],
                refetchType: 'active',
            },
        )
        router.back()
    };

    const reset = () => {
        formik.resetForm();
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => mutation.mutate(values),
        validateOnBlur: true,
        validateOnChange: true,
    });

    const mutation = useMutation({
        mutationKey: ['createAndUpdateWorks'],
        mutationFn: submit,
        onSuccess: () => reset(),
    });

    return (
        <form onSubmit={formik.handleSubmit} className="w-full space-y-6">
            {/* Name */}
            <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border rounded p-2"
                />
                {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}
            </div>

            {/* Client */}
            <div>
                <label className="block text-sm font-medium">Client</label>
                <input
                    type="text"
                    name="client"
                    value={formik.values.client}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border rounded p-2"
                />
                {formik.touched.client && formik.errors.client && (
                    <p className="text-red-500 text-sm">{formik.errors.client}</p>
                )}
            </div>

            {/* Image */}
            <div>
                <label className="block text-sm font-medium">Image URL</label>
                <input
                    type="text"
                    name="image"
                    value={formik.values.image}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border rounded p-2"
                />
                {formik.touched.image && formik.errors.image && (
                    <p className="text-red-500 text-sm">{formik.errors.image}</p>
                )}
            </div>

            {/* Cover */}
            <div>
                <label className="block text-sm font-medium">Cover Image URL</label>
                <input
                    type="text"
                    name="cover"
                    value={formik.values.cover}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border rounded p-2"
                />
                {formik.touched.cover && formik.errors.cover && (
                    <p className="text-red-500 text-sm">{formik.errors.cover}</p>
                )}
            </div>

            {/* Details */}
            <div>
                <label className="block text-sm font-medium">Details</label>
                {formik.values.details.map((detail, index) => (
                    <div key={index} className="w-full flex flex-col space-y-2">
                        <div className='w-full flex items-center space-x-2'>
                            <input
                                type="text"
                                name={`details[${index}]`}
                                value={detail}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border rounded p-2"
                            />
                            <button
                                type="button"
                                className="p-2 bg-red-500 text-white rounded disabled:cursor-not-allowed"
                                disabled={formik.values.details.length === 1}
                                onClick={() =>
                                    handleArrayFieldChange(formik, "remove", "details", index)
                                }
                            >
                                Remove
                            </button>
                        </div>
                        {formik.touched.details && formik.errors.details?.[index] && (
                            <p className="text-red-500 text-sm">{formik.errors.details[index]}</p>
                        )}
                    </div>
                ))}
                <button
                    type="button"
                    className="mt-2 p-2 bg-blue-500 text-white rounded"
                    onClick={() => handleArrayFieldChange(formik, "add", "details")}
                >
                    Add Detail
                </button>
            </div>

            {/* features */}
            <div>
                <label className="block text-sm font-medium">Features</label>
                {formik.values.features.map((features, index) => (
                    <div key={index} className="w-full flex flex-col space-y-2">
                        <div className='w-full flex items-center space-x-2'>
                            <input
                                type="text"
                                name={`features[${index}]`}
                                value={features}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border rounded p-2"
                            />
                            <button
                                type="button"
                                className="p-2 bg-red-500 text-white rounded disabled:cursor-not-allowed"
                                disabled={formik.values.features.length === 1}
                                onClick={() =>
                                    handleArrayFieldChange(formik, "remove", "features", index)
                                }
                            >
                                Remove
                            </button>
                        </div>
                        {formik.touched.features && formik.errors.features?.[index] && (
                            <p className="text-red-500 text-sm">{formik.errors.features[index]}</p>
                        )}
                    </div>
                ))}
                <button
                    type="button"
                    className="mt-2 p-2 bg-blue-500 text-white rounded"
                    onClick={() => handleArrayFieldChange(formik, "add", "features")}
                >
                    Add Features
                </button>
            </div>
            {/* featureImages */}
            <div>
                <label className="block text-sm font-medium">Feature Images</label>
                {formik.values.featureImages.map((featureImages, index) => (
                    <div key={index} className="w-full flex flex-col space-y-2">
                        <div className='w-full flex items-center space-x-2'>
                            <input
                                type="text"
                                name={`featureImages[${index}]`}
                                value={featureImages}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="w-full border rounded p-2"
                            />
                            <button
                                type="button"
                                className="p-2 bg-red-500 text-white rounded disabled:cursor-not-allowed"
                                disabled={formik.values.featureImages.length === 1}
                                onClick={() =>
                                    handleArrayFieldChange(formik, "remove", "featureImages", index)
                                }
                            >
                                Remove
                            </button>
                        </div>
                        {formik.touched.featureImages && formik.errors.featureImages?.[index] && (
                            <p className="text-red-500 text-sm">{formik.errors.featureImages[index]}</p>
                        )}
                    </div>
                ))}
                <button
                    type="button"
                    className="mt-2 p-2 bg-blue-500 text-white rounded"
                    onClick={() => handleArrayFieldChange(formik, "add", "featureImages")}
                >
                    Add Features Image
                </button>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="px-4 py-2 bg-brand text-white rounded hover:bg-opacity-80"
                disabled={mutation.isPending}
            >
                {data?.id ? 'Update Work' : 'Create Work'}
            </button>
        </form>
    );
}
