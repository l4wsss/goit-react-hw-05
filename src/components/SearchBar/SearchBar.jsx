import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";

const SearchBar = ({ handleChangeQuery, query }) => {
  const onSubmit = (values) => {
    handleChangeQuery(values.query);
  };
  return (
    <div>
      <Formik initialValues={{ query }} onSubmit={onSubmit}>
        <Form>
          <Field name="query" placeholder="Search for movies..." />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

SearchBar.propTypes = {
  handleChangeQuery: PropTypes.func,
  query: PropTypes.string,
};

export default SearchBar;
