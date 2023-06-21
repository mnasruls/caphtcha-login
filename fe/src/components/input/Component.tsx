type TextProps = {
  id?: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: 'password' | 'text' | 'email' | 'number' | 'tel';
};
const Component: React.FC<TextProps> = (props) => {
  const { id, value, onChange, placeholder, type = 'text' } = props;
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className="border-2 border-black rounded-md px-2 py-1"
      placeholder={placeholder}
    />
  );
};
export default Component;
