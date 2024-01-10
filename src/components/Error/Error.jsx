import { useSelector } from 'react-redux';
import css from './Error.module.css';
import { selectError } from '../../redux/selectors';

export const Error = () => {
  const error = useSelector(selectError);

  return (
    <div>
      <p className={css.error}>{error} </p>
      <p className={css.error}> Failed to load contacts</p>
    </div>
  );
};
