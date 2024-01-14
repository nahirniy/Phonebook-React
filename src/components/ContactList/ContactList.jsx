// import { shallowEqual, useSelector } from 'react-redux';
// import { selectVisibleContacts } from '../../../redux/selectors';
import ContactItem from './ContactItem';

import { useGetContactsQuery } from 'services/contactsApi';

const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();
  console.log(contacts);
  // const [p, respp] = useLoginMutation();
  // console.log(respp);
  // console.log(resp);
  return (
    <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative inline-block max-w-[340px] md:max-w-[540px] min-h-content">
      <ul className="flex flex-col gap-5">
        {contacts?.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
