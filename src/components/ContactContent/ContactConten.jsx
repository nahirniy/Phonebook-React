import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {  selectStatus } from '../../redux/selectors';
import { ContactList } from './ContactList/ContactList';
import { Loader } from '../Loader/Loader';
import { getContactsThunk } from '../../redux/thunk';
import { Error } from '../Error/Error';

export const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

export const ContactContent = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      {status === STATUS.FULFILLED && <ContactList />}
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.REJECTED && <Error />}
    </>
  );
};
