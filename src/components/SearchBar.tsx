import React from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import { setSearchValue } from '../redux/slices/search/slice';

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 350),
    [],
  );

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <TextField
        value={value}
        onChange={onInputChange}
        label="Поиск по имени"
        variant="filled"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
