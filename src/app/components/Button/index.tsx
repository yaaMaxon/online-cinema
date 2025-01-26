type Props = {
  children: string;
  icon?: React.ReactNode;
  className?: string;
};

const Button = ({ children, icon, className }: Props) => {
  return (
    <button
      type="button"
      className={`flex items-center gap-1 bg-[#E50000] text-white text-sm font-semibold rounded-md px-5 py-3.5 cursor-pointer hover:bg-[#e50000eb] transition-colors ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
