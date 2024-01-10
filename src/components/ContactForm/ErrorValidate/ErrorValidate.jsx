import css from './ErrorValidate.module.css';

export const ErrorValidate = ({ error }) => {
  return <div className={css.error}>{error}</div>;
};
