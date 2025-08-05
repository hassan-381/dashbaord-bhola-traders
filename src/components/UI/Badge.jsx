const Badge = ({ count }) => {
  if (!count) return null;

  return (
    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
      {count}
    </span>
  );
};

export default Badge;
