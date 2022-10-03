import React from 'react';
import { useSelector } from 'react-redux';

import Container from '@mui/material/Container';

import { Header } from '../components/Header';
import { ContactsTable } from '../components/Table';
import { Popup } from '../components/Popup';

import { fetchContacts } from '../redux/slices/contacts/asyncActions';
import { useAppDispatch, RootState } from '../redux/store';
import { setPopup } from '../redux/slices/popup/slice';
import { PopupSliceState } from '../redux/slices/popup/types';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen, isEditMode, id } = useSelector((state: RootState) => state.popup);

  React.useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onSetPopup = ({ isOpen, isEditMode, id }: PopupSliceState) => {
    dispatch(
      setPopup({
        isOpen,
        isEditMode,
        id,
      }),
    );
  };

  return (
    <>
      <Header onSetPopup={onSetPopup} />
      <Container>
        <ContactsTable />
      </Container>
      <Popup isOpen={isOpen} isEditMode={isEditMode} id={id} onSetPopup={onSetPopup} />
    </>
  );
};

export default Home;
