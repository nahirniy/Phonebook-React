const Button = ({ type = 'submit', children }) => {
  return (
    <button
      type={type}
      className="w-full flex items-center justify-center h-[43px] mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white transition-colors duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
