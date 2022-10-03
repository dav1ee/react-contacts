import React from 'react';
import { useDispatch } from 'react-redux';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

import { login } from '../redux/slices/user/slice';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = React.useState({ name: '', password: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(login(formValues));
  };

  return (
    <form onSubmit={handleSubmit} className="login">
      <Typography variant="h6">Авторизация</Typography>
      <TextField
        value={formValues.name}
        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
        label="Введите Имя"
        margin="normal"
        required
      />
      <TextField
        value={formValues.password}
        onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
        label="Введите Пароль"
        type="password"
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" endIcon={<LoginIcon />}>
        Войти
      </Button>
    </form>
  );
};

export default Login;
