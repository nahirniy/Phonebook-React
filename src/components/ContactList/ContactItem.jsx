const ContactItem = ({ id, name, number }) => {
  return (
    <li className="flex gap-9 justify-between items-center">
      <p className="flex flex-col gap-1">
        <span className="block">
          <b>Name:</b> {name}
        </span>
        <span className="block">
          <b>Number:</b> {number}
        </span>
      </p>
      <button
        className="w-[80px] flex items-center justify-center h-[35px]  text-[16px]  rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white transition-colors duration-300"
        type="button"
        onClick={() => console.log('deleted')}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
