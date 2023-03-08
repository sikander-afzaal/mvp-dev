const Button = ({ children }) => {
  return (
    <button className="bg-red px-7 cursor-pointer mt-5 hover:bg-opacity-90 py-5 md:py-6 text-white font-bold text-lg md:text-2xl rounded-xl border-2 border-solid border-black shadow-button ">
      {children}
    </button>
  );
};

export default Button;
