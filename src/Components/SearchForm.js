import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

const SearchForm = ({ searchPeople }) => (
  <Formik
    initialValues={{
      name: '',
    }}
    validationSchema={Yup.object({
      name: Yup.string(),
    })}
    onSubmit={values => searchPeople(values.name)}
  >
    <Form>
      <Field name='name' placeholder='search by name' />
      <button type='submit'>Search</button>
    </Form>
  </Formik>
);

SearchForm.propTypes = {
  searchPeople: PropTypes.func.isRequired,
};

export default SearchForm;
