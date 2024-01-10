import css from './Container.module.css';

export const Container = ({ title, children }) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};
