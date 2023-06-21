import { useState } from 'react';
import './App.css';

type TextProps = {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const TextField: React.FC<TextProps> = (props) => {
  const { value, onChange, placeholder } = props;
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="border-2 border-black rounded-md p-1"
      placeholder={placeholder}
    />
  );
};

function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [captcha, setCaptcha] = useState('');

  const xSubmit = () => {
    // do something
    console.log('email: ' + email);
    console.log('pass: ' + pass);
  };

  return (
    <div className="space-y-3">
      <h1>Test Captcha</h1>
      <div className="flex flex-col gap-4">
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Input Email"
        />
        <TextField
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Input Password"
        />
        <div className="flex flex-col p-4 border">
          <img
            src={
              'data:image/png;base64,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'
            }
            alt=""
          />
          <div className="flex gap-2">
            <TextField
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
            />
            <button>cek</button>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-sky-700 rounded-lg text-white"
        onClick={xSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
