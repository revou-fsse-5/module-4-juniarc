import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { FieldProps, FormikProps } from 'formik';

interface CustomDateInputPropsType {
    field: FieldProps['field'],
    form: FormikProps<any>
}

function CustomDateInput({ field, form } : CustomDateInputPropsType) {
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        form.setFieldValue(field.name, event.target.value);
      };
    return(
        <div className='relative'>
            <input 
            {...field}
            type="date"
            onChange={handleDateChange}
            value={field.value || ''}
            className="bg-transparent rounded-md border-solid border border-white p-3 text-sm text-white w-full mb-2"
            />
            <FaCalendar className='absolute right-4 top-4 text-white z-10 cursor-pointer' style={{ pointerEvents: 'none'}}/>
        </div>
    )
}

export default CustomDateInput;