import { ContactContent } from './ContactContent/ContactConten';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <Section>
      <Container title="Phonebook">
        <ContactForm />
      </Container>
      <Container title="Contacts">
        <Filter />
        <ContactContent />
      </Container>
    </Section>
  );
};
