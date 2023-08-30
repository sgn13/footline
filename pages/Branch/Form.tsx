import React from 'react';

import { Form } from 'formik';
import * as Yup from 'yup';
import FormikBase from 'containers/FormikBase';

import { Row, Col } from 'react-bootstrap';

import Input from 'components/Input';
import Button from 'components/Button/index';
import ToggleSwitch from 'components/ToggleSwitch';

import { pageName } from './Index';

const BranchForm = ({ isSubmitting, formData, onCreate, onEdit, onBack }) => {
  const initialValues = formData
    ? {
      name: formData.name,
      is_active: formData.is_active,
    }
    : {
      name: '',
      is_active: true,
    };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
  });

  return (
    <FormikBase
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(props, otherProps) => {
        const { ...values } = props;

        formData ? onEdit(values, otherProps) : onCreate(values, otherProps);
      }}
      renderForm={({ values, errors, handleChange, resetForm, setFieldValue }) => {
        return (
          <Form>
            <Row>
              <Col lg={12}>
                <Input
                  name="name"
                  label="Name"
                  placeholder="Enter Branch name"
                  value={values.name}
                  onChange={handleChange}
                  errors={errors}
                />
              </Col>

              <Col lg={12}>
                <ToggleSwitch
                  label="Active"
                  checked={values.is_active}
                  onChange={() => setFieldValue('is_active', !values.is_active)}
                  className="mr-2 ml-2"
                />
              </Col>

              <div
                className="clear mt-3"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                {!isSubmitting && (
                  <Button
                    type='button'
                    className="btn btn-primary float-right ml-2"
                    size="sm"
                    primary={false}
                    disabled={isSubmitting}
                    onClick={() => {
                      resetForm();
                      onBack();
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
                  {isSubmitting ? (
                    'Submitting'
                  ) : (
                    <>
                      {formData ? 'Save' : 'Add'} {pageName}
                    </>
                  )}
                </Button>
              </div>
            </Row>
          </Form>
        );
      }}
    />
  );
};

export default BranchForm;
