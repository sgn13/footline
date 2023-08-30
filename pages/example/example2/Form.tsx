import React, { useState, useEffect } from 'react';

import { Form } from 'formik';
import * as Yup from 'yup';

import { Row, Col } from 'react-bootstrap';

import Input from 'components/Input';
import Button from 'components/Button/index';
import ToggleSwitch from 'components/ToggleSwitch';

import FormikBase from 'containers/FormikBase';

import { pageName } from './Index';

import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';

import { BaseLabel } from 'components/BaseComponent';

const ExampleForm = ({ isSubmitting, formData, onCreate, onEdit, onBack }) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [convertedContent, setConvertedContent] = useState(null);

  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  useEffect(() => {
    if (formData && formData.content) {
      setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(formData.content))));
    }
  }, [formData]);

  const initialValues = formData
    ? {
        name: formData.name,
      }
    : {
        name: '',
      };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
  });

  return (
    <FormikBase
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(props, otherProps) => {
        let { ...values } = props;

        formData
          ? onEdit(
              { ...values, content: JSON.stringify(convertToRaw(editorState.getCurrentContent())) },
              otherProps,
            )
          : onCreate(
              { ...values, content: JSON.stringify(convertToRaw(editorState.getCurrentContent())) },
              otherProps,
            );
      }}
      renderForm={({ values, errors, handleChange, resetForm, setFieldValue }) => {
        return (
          <Form>
            <Row>
              <Col lg={6}>
                <Input
                  name="name"
                  label="Name"
                  value={values.name}
                  onChange={handleChange}
                  errors={errors}
                />
              </Col>
              <Col lg={12}>
                <ToggleSwitch
                  label="Active"
                  checked={values.isActive}
                  onChange={() => setFieldValue('isActive', !values.isActive)}
                />
              </Col>{' '}
              <Col lg={12}>
                <br />
                <BaseLabel>Content</BaseLabel>
                <Editor
                  editorState={editorState}
                  onEditorStateChange={handleEditorChange}
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                />
              </Col>
              <Col lg={12}>
                <div
                  className="clear mt-3"
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  {!isSubmitting && (
                    <Button
                      className="btn btn-primary mr-5 float-right"
                      size="sm"
                      type="button"
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
                    {isSubmitting ? (
                      'Submitting'
                    ) : (
                      <>
                        {formData ? 'Save' : 'Add'} {pageName}
                      </>
                    )}
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

export default ExampleForm;
