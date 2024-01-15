import { nanoid } from '@reduxjs/toolkit';
import { RiContactsBook2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

import { setFilter } from '../../redux/filterSlice';

const ContactFilter = () => {
  const dispatch = useDispatch();

  const findContact = ({ target: { value } }) => dispatch(setFilter(value));

  const currentId = nanoid();

  return (
    <div className="relative my-4">
      <input
        type="text"
        className="block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer pr-9"
        placeholder=""
        id={currentId}
        onInput={findContact}
        name="filter"
      />
      <label
        htmlFor={currentId}
        className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        *Filter Contacts
      </label>
      <RiContactsBook2Line className="absolute top-4 right-4" />
    </div>
  );
};

export default ContactFilter;
