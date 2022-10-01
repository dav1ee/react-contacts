import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';

import { RootState } from '../redux/store';
import { logout } from '../redux/slices/user/slice';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state: RootState) => state.user);

  const onLogout = () => dispatch(logout());

  return (
    <div className="header">
      <Container>
        <div className="header__inner">
          <div className="header__logo">
            <Typography variant="h6">Привет, {name}</Typography>
          </div>
          <div className="header__buttons">
            <Button variant="contained" endIcon={<AddIcon />}>
              Создать Контакт
            </Button>
            <Button onClick={onLogout} variant="outlined" endIcon={<LogoutIcon />}>
              Выход
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
