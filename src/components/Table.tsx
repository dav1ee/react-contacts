import React from 'react';
import { useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

import { Contact } from './Contact';

import { RootState } from '../redux/store';

const tableHeadings = ['Имя', 'Фамилия', 'E-mail', 'Телефон', ''];

export const ContactsTable: React.FC = () => {
  const { items, totalCount } = useSelector((state: RootState) => state.contacts);

  return (
    <>
      {items.length > 0 ? (
        <>
          <Table sx={{ boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)' }}>
            <TableHead sx={{ backgroundColor: '#fff' }}>
              <TableRow>
                {tableHeadings.map((title, index) => (
                  <TableCell key={index} align="center">
                    {title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <Contact key={`${item.email}-${item.phoneNumber}`} {...item} />
              ))}
            </TableBody>
          </Table>
          <div style={{ margin: '20px 20px 0 0', float: 'right' }}>
            <Typography variant="body1">
              Мои Контакты: <b style={{ marginLeft: '5px' }}>{totalCount}</b>
            </Typography>
          </div>
        </>
      ) : (
        <Typography variant="h5" sx={{ textAlign: 'center', opacity: '0.3' }}>
          У вас нет контактов
        </Typography>
      )}
    </>
  );
};
