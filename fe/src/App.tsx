import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { BasicButton, BasicInput } from './components';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [imgCaptcha, setImgCaptcha] = useState('');
  const [id, setId] = useState('');
  const targetUrl = 'http://localhost:8777/';
  const config = {
    DriverDigit: {
      DotCount: 94,
      Height: 80,
      Length: 7,
      MaxSkew: 1,
      Width: 240,
    },
  };

  const _fetch = async () => {
    axios
      .post(targetUrl + 'api/getCaptcha', JSON.stringify(config))
      .then((res) => {
        if (res.data?.code === 1) {
          setId(res.data?.captchaId);
          setImgCaptcha(res.data?.data);
        }
      })
      .catch((err) => err);
  };

  useEffect(() => {
    _fetch();
  }, []);

  const xSubmit = () => {
    // do something
    console.log('email: ' + email);
    console.log('pass: ' + pass);
    const submitData = { id: id, verif: captcha, email: email, password: pass };
    axios
      .post(targetUrl + 'api/verifyCaptcha', JSON.stringify(submitData))
      .then((res) => {
        if (res.data?.code === 1) {
          window.location.replace('https://www.google.com/');
        } else toast.error(res.data?.msg);
      })
      .catch((err) => err);
  };
  const xFetch = async () => {
    await _fetch();
  };

  return (
    <div className="space-y-3">
      <h1>Test Captcha</h1>
      <div className="flex flex-col gap-4">
        <BasicInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Input Email"
        />
        <BasicInput
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Input Password"
          type="password"
        />
        <div className="flex flex-col p-4 border gap-2">
          {imgCaptcha === '' ? (
            <b className="bg-sky-500 py-6">Please click button to Reload</b>
          ) : (
            <img src={imgCaptcha} alt="" className="h-20" />
          )}
          <div className="flex gap-2">
            <BasicInput
              value={captcha}
              onChange={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCaptcha(e.target.value);
              }}
            />
            <BasicButton onClick={xFetch}>Reload</BasicButton>
          </div>
        </div>
      </div>
      <BasicButton
        type="submit"
        onClick={xSubmit}
        disabled={captcha === '' || email === '' || pass === ''}
      >
        Submit
      </BasicButton>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
