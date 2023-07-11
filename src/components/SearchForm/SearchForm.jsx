import React from 'react';
import Button from '../Button/Button';
import './searchForm.scss';
import { useFormik } from 'formik';
import { TextField, InputAdornment, Box } from '@mui/material';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import SearchIcon from '@mui/icons-material/Search';
const SearchForm = ({ onSubmit }) => {
  // const [value, setValue] = useState('')
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values) => {
      console.log('values :>> ', values);
      // alert(JSON.stringify(values, null, 2));
      onSubmit(values.search);
    },
  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   onSubmit(value);

  //   console.log('value :>> ', value);
  // }

  // const handleChange = (event) => {
  //   setValue(event.target.value)
  // }

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="form__field">
        <Box sx={{ backgroundColor: '#fff' }}>
          <TextField
            {...formik.getFieldProps('search')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        {/* <Input onChange={handleChange} value={value} /> */}
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
};

export default SearchForm;
