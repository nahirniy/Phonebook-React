import { shallowEqual, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../../redux/selectors';
import { ContactItem } from './ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts, shallowEqual);

  return (
    <>
      {!visibleContacts.length && <h2 className={css.not_found}>No contact found</h2>}
      <ul className={css.contact_list}>
        {visibleContacts.map(({ id, name, phone }) => {
          return <ContactItem key={id} id={id} name={name} phone={phone} />;
        })}
      </ul>
    </>
  );
};
