import { Form as MyForm } from 'formik';

const Form = ({ children, title }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-slate-900 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-90 relative inline-block max-w-[340px] md:w-[340px] min-h-content dark:bg-opacity-30">
        <h1 className="text-4xl text-white font-bold text-center mb-6">{title}</h1>
        <MyForm>{children}</MyForm>
      </div>
    </div>
  );
};

export default Form;
