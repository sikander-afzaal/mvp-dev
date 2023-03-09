const Button = ({ children }) => {
  return (
    <button className="bg-red px-5 cursor-pointer mt-5 hover:bg-opacity-90 py-5  text-white font-bold text-lg md:text-xl rounded-xl border-2 border-solid border-black shadow-button ">
      {children}
    </button>
  );
};

export default Button;
