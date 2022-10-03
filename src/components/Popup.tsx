import React from 'react';
import { useSelector } from 'react-redux';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

import { useAppDispatch } from '../redux/store';
import { getContactByIdSelector } from '../redux/slices/contacts/slice';
import { createContact, updateContact } from '../redux/slices/contacts/asyncActions';
import { PopupSliceState } from '../redux/slices/popup/types';

type PopupProps = PopupSliceState & {
  onSetPopup: (obj: PopupSliceState) => void;
};

export const Popup: React.FC<PopupProps> = ({ isOpen, isEditMode, id, onSetPopup }) => {
  const dispatch = useAppDispatch();

  const [formValues, setFormValues] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const contact = useSelector(getContactByIdSelector(id))[0];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEditMode) {
      const contact = {
        id: id as number,
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        phoneNumber: formValues.phoneNumber,
      };

      dispatch(updateContact({ id, contact }));
    } else {
      const contact = {
        id: new Date().getMilliseconds() * 10,
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        phoneNumber: formValues.phoneNumber,
      };

      dispatch(createContact(contact));
    }

    onSetPopup({ isOpen: false, isEditMode: false, id: null });

    setFormValues({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    });
  };

  React.useEffect(() => {
    if (isEditMode) {
      setFormValues({
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phoneNumber: contact.phoneNumber,
      });
    } else {
      setFormValues({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      });
    }
  }, [isEditMode, contact]);

  return (
    <Dialog open={isOpen} sx={{ top: '-10%' }}>
      <div className="popup">
        <DialogTitle className="popup__title">
          {isEditMode ? 'Редактировать' : 'Создать'} контакт
          <IconButton onClick={() => onSetPopup({ isOpen: false, isEditMode: false, id: null })}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} className="popup__form">
            <TextField
              value={formValues.firstName}
              onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })}
              label="Имя"
              margin="normal"
              required
            />
            <TextField
              value={formValues.lastName}
              onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value })}
              label="Фамилия"
              margin="normal"
              required
            />
            <TextField
              value={formValues.email}
              onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
              label="E-mail"
              margin="normal"
              required
            />
            <TextField
              value={formValues.phoneNumber}
              onChange={(e) => setFormValues({ ...formValues, phoneNumber: e.target.value })}
              label="Телефон"
              margin="normal"
              required
            />
            {isEditMode ? (
              <Button type="submit" variant="contained" endIcon={<EditIcon />}>
                Обновить
              </Button>
            ) : (
              <Button type="submit" variant="contained" endIcon={<AddIcon />}>
                Создать
              </Button>
            )}
          </form>
        </DialogContent>
      </div>
    </Dialog>
  );
};
