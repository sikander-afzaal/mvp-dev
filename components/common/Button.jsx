const Button = ({ noShadow, children, ...rest }) => {
  return (
    <button
      className={`bg-red cursor-pointer hover:bg-opacity-90 text-white font-bold text-lg md:text-xl border-2 border-solid ${
        !noShadow
          ? "border-black shadow-button rounded-xl py-5 px-5 mt-5"
          : "rounded-2xl py-3 px-3 mt-2"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
