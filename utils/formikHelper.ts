import { FormikValues, FormikProps } from 'formik';

// Handles checkbox change
export const handleCheckboxChange =
  (formik: FormikProps<FormikValues>, fieldName: string) =>
  (checked: boolean) => {
    formik.setFieldValue(fieldName, checked);
  };

// Handles file change
export const handleFileChange =
  (formik: FormikProps<FormikValues>, fieldName: string) =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      formik.setFieldValue(fieldName, file); // Sets the file in Formik state
    }
  };

// Clears a field (e.g., resets it to null)
export const clearField = (
  formik: FormikProps<FormikValues>,
  fieldName: string
) => {
  formik.setFieldValue(fieldName, null); // Resets the field to null
};

// Handles add and remove operations in Formik array fields
export const handleArrayFieldChange = (
    formik: FormikProps<any>,
    actionType: 'add' | 'remove',
    fieldName: string,
    index: number | null = null
  ) => {
    const fieldArray = formik.values[fieldName] as string[]; // Assuming the field value is a string array
    if (actionType === 'add') {
      formik.setFieldValue(fieldName, [...fieldArray, '']);
    } else if (actionType === 'remove' && index !== null) {
      const updatedArray = fieldArray.filter((_, i) => i !== index);
      formik.setFieldValue(fieldName, updatedArray);
    }
  };
