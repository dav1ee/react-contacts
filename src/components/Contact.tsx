import React from 'react';
import { useDispatch } from 'react-redux';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { setPopup } from '../redux/slices/popup/slice';
import { deleteContact } from '../redux/slices/contacts/slice';
import { ContactType } from '../redux/slices/contacts/types';

export const Contact: React.FC<ContactType> = ({ id, firstName, lastName, email, phoneNumber }) => {
  const dispatch = useDispatch();

  const onSetPopup = () => {
    const obj = { isOpen: true, isEditMode: true, id };
    dispatch(setPopup(obj));
  };

  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <TableRow>
      <TableCell align="center">{firstName}</TableCell>
      <TableCell align="center">{lastName}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{phoneNumber}</TableCell>
      <TableCell align="center" sx={{ width: '170px' }}>
        <IconButton onClick={onSetPopup} color="primary" sx={{ mr: 2 }}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={onDeleteContact} sx={{ color: '#ff6b6b' }}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
