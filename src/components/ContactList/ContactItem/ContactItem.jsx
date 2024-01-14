import { useDispatch } from 'react-redux';

import { deleteContactThunk } from '../../../../redux/thunk';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContactThunk(id));

  return (
    <li className={css.item}>
      <p className={css.contact_text}>
        {name}: {phone}
      </p>
      <button type="button" className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
