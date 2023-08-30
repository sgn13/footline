import React from 'react';

import { Form } from 'formik';
import * as Yup from 'yup';

import { Row, Col } from 'react-bootstrap';

import Input from 'components/Input';
import Button from 'components/Button/index';

import FormikBase from 'containers/FormikBase';

const ChangePasswordForm = ({
  isSubmitting,
  formData,
  onCreate,
  bookcategorys = [],
  onEdit,
  onBack,
  userId,
}) => {
  const initialValues = {
    old_password: '',
    new_password1: '',
    new_password2: '',
    user_id: userId,
  };

  const validationSchema = Yup.object().shape({
    old_password: Yup.string().required().label('Old Password'),
    new_password1: Yup.string().required().label('New Password'),
    new_password2: Yup.string().oneOf([Yup.ref('new_password1'), null], 'New Passwords must match'),
  });
  const pageName = 'Change Password';
  return (
    <FormikBase
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(props, otherProps) => {
        let { ...values } = props;
        onCreate(values, otherProps);
      }}
      renderForm={({ values, errors, handleChange, resetForm, setFieldValue }) => {
        return (
          <Form style={{ width: '30rem' }}>
            <Row>
              <Col lg={12}>
                <Input
                  name="old_password"
                  label="Old Password"
                  type="password"
                  placeholder="Enter Old Password"
                  value={values.old_password}
                  onChange={handleChange}
                  errors={errors}
                />
              </Col>
              <Col lg={12}>
                <Input
                  name="new_password1"
                  label="New Password"
                  type="password"
                  placeholder="Enter New Password"
                  value={values.new_password1}
                  onChange={handleChange}
                  errors={errors}
                />
              </Col>
              <Col lg={12}>
                <Input
                  name="new_password2"
                  type="password"
                  label="Confirm Password"
                  placeholder="Enter Confirm Password"
                  value={values.new_password2}
                  onChange={handleChange}
                  errors={errors}
                />
              </Col>

              <Col lg={12}>
                <div
                  className="clear mt-3"
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  {!isSubmitting && (
                    <Button
                      className="btn btn-primary float-right ml-2"
                      size="sm"
                      primary={false}
                      onClick={() => {
                        onBack();
                        resetForm();
                      }}
                    >
                      Cancel
                    </Button>
                  )}
                  <Button
                    type="submit"
                    size="sm"
                    className="btn btn-primary float-right"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting' : <>{pageName}</>}
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        );
      }}
    />
  );
};

export default ChangePasswordForm;
