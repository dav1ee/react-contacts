import React from 'react';
import { useSelector } from 'react-redux';

import Container from '@mui/material/Container';

import { Header } from '../components/Header';
import { ContactsTable } from '../components/Table';
import { Popup } from '../components/Popup';
import { SearchBar } from '../components/SearchBar';

import { fetchContacts } from '../redux/slices/contacts/asyncActions';
import { useAppDispatch, RootState } from '../redux/store';
import { setPopup } from '../redux/slices/popup/slice';
import { PopupSliceState } from '../redux/slices/popup/types';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { isOpen, isEditMode, id } = useSelector((state: RootState) => state.popup);
  const { items, status } = useSelector((state: RootState) => state.contacts);
  const { searchValue } = useSelector((state: RootState) => state.search);

  React.useEffect(() => {
    dispatch(fetchContacts(searchValue));
  }, [dispatch, searchValue]);

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
        <SearchBar />
        {status === 'loading' ? 'Загрузка' : <ContactsTable />}
      </Container>
      <Popup isOpen={isOpen} isEditMode={isEditMode} id={id} onSetPopup={onSetPopup} />
    </>
  );
};

export default Home;
