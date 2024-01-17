import { useSelector } from 'react-redux';

import { getVisibleConatcts } from 'services/helpers';
import ContactFilter from './ContactFilter';
import ContactItem from './ContactItem';
import { useGetContactsQuery } from 'services/contactsApi';

const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();
  const filter = useSelector(state => state.filter.value);

  const visibleContacts = getVisibleConatcts(contacts, filter);

  const visibleContactsExist = Boolean(visibleContacts?.length);
  const contactsExist = Boolean(contacts?.length);

  return (
    <div className="bg-slate-900 border border-slate-400 rounded-md p-4 md:p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-90 relative inline-block max-w-[320px] md:max-w-[540px] md:min-w-[436px] min-h-[310px] dark:bg-opacity-30">
      <h2 className="text-4xl text-white font-bold text-center mb-6">Contacts</h2>
      <div>
        {contactsExist && <ContactFilter />}
        <ul className="flex flex-col gap-5">
          {visibleContacts?.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
        {!visibleContactsExist && (
          <p className="text-2xl text-center">No contacts found...</p>
        )}
      </div>
    </div>
  );
};

export default ContactList;
