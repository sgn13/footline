import React from 'react';

import { Formik } from 'formik';
import { styled } from 'theme/styled-components';

const FormWrapper = styled.div``;

const FormikBase: React.FC<{
  validationSchema;
  onSubmit;
  renderForm;
  initialValues;
  innerRef?;
}> = ({ renderForm, initialValues, validationSchema, onSubmit, ...props }) => {
  return (
    <FormWrapper>
      <Formik
        validateOnBlur={false}
        validateOnMount={false}
        validateOnChange={false}
        enableReinitialize={true}
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        {...props}
      >
        {(props) => renderForm({ ...props })}
      </Formik>
    </FormWrapper>
  );
};

export default FormikBase;
