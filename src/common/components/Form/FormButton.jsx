const FormButton = ({ name }) => {
  return (
    <button
      type="submit"
      className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
    >
      {name}
    </button>
  );
};

export default FormButton;
