const MiniButton = ({ type = 'submit', handleClick, children }) => {
  return (
    <button
      className="w-[80px] flex items-center justify-center h-[35px]  text-[16px]  rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white transition-colors duration-300"
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default MiniButton;
