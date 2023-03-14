const WhiteBtn = ({ children }) => {
  return (
    <button className="bg-white px-5 cursor-pointer hover:bg-opacity-90 py-5  text-black font-bold text-lg md:text-xl rounded-xl border-2 border-solid border-black shadow-button2 ">
      {children}
    </button>
  );
};

export default WhiteBtn;
