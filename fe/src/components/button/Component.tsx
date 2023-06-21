type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  const { children, disabled, onClick, type, className } = props;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`bg-sky-700 rounded-lg text-white w-full disabled:bg-gray-500 hover:bg-sky-500 ${
        className ? className : ''
      }`}
    >
      {children}
    </button>
  );
};
export default Component;
