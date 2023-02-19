import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Box } from './Box';
import { AppContainer } from './App.styled';

export const App = () => {
  return (
    <AppContainer>
      <Box
        p={4}
        mb={4}
        border="1px solid #087582"
        borderRadius={4}
        display="flex"
        flexDirection="column"
      >
        <h1>Phonebook</h1>
        <ContactForm />
      </Box>
      <Box
        p={4}
        border="1px solid #087582"
        borderRadius={4}
        display="flex"
        flexDirection="column"
      >
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Box>
    </AppContainer>
  );
};
