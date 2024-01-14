// import { ContactContent } from './ContactContent/ContactConten';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { Container } from './Container/Container';
// import { Section } from './Section/Section';

import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';

export const App = () => {
  return (
    // <Section>
    //   <Container title="Phonebook">
    //     <ContactForm />
    //   </Container>
    //   <Container title="Contacts">
    //     <Filter />
    //     <ContactContent />
    //   </Container>
    // </Section>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<Register />} />
        <Route path="login-in" element={<Login />} />
      </Route>
    </Routes>
  );
};
