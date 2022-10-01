import React from 'react';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { ContactType } from '../redux/slices/contacts/types';

export const Contact: React.FC<ContactType> = ({ firstName, lastName, email, phoneNumber }) => {
  return (
    <TableRow>
      <TableCell align="center">{firstName}</TableCell>
      <TableCell align="center">{lastName}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{phoneNumber}</TableCell>
      <TableCell align="center" sx={{ width: '170px' }}>
        <IconButton color="primary" sx={{ mr: 2 }}>
          <EditIcon />
        </IconButton>
        <IconButton sx={{ color: '#ff6b6b' }}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
