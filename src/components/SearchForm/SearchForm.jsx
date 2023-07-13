import React from 'react';
import Button from '../Button/Button';
import './searchForm.scss';
import { useFormik } from 'formik';
import { TextField, InputAdornment, Box } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
const SearchForm = ({ onSubmit }) => {

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values) => {
      console.log('values :>> ', values);
    
      onSubmit(values.search);
    },
  });

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
