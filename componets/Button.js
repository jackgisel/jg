const Button = ({ to, label }) => {
  return (
    <div className="m-6 shadow-lg">
      <a
        className="bg-red-600 rounded-full p-4 px-10 text-white text-md font-bold"
        href={to}
      >
        {label}
      </a>
    </div>
  );
};

export default Button;
