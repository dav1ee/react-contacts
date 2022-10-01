import React from 'react';

import Container from '@mui/material/Container';

import { Header } from '../components/Header';
import { ContactsTable } from '../components/Table';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <ContactsTable />
      </Container>
    </>
  );
};

export default Home;
