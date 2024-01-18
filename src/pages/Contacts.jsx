import Wrapper from 'common/components/Wrappers/Wrapper';
import ContactList from 'components/ContactList/ContactList';
import ContactsForm from 'components/Forms/ContactsForm';

const Contacts = () => {
  return (
    <Wrapper>
      <ContactsForm />
      <ContactList />
    </Wrapper>
  );
};

export default Contacts;
