import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { API } from '../utils/config';

interface AccountInfo {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

//비번확인
const SignUpPage = () => {
  const navigate = useNavigate();
  const [accountInfo, setAccountInfo] = useState<AccountInfo>({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });
  // const [passwordValid, setPasswordValid] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAccountInfo({
      ...accountInfo,
      [name]: value,
    });
  }

  const handleSignUp = () => {
    fetch(`${API.SIGNUP}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: accountInfo.name,
          email: accountInfo.email,
          password: accountInfo.password,
          provider: ""
        }),
      }
    ).then((response) => {
      if (response.status == 201) {
        return response.json()
      } else throw new Error(`${response.status}에러`)
    }).then(() => {
      navigate("/login")
    })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="splash-layout">
      <div className="column-center w-full p-8">
        <img className="w-52 mb-10" src="/src/assets/logo2.png" alt="Title" />

        <div className="flex flex-col w-full gap-3">
          <input
            name="name"
            onChange={handleChange}
            className="splash-input"
            type="text"
            placeholder="이름"
          />
          <input
            name="email"
            onChange={handleChange}
            className="splash-input"
            type="text"
            placeholder="이메일"
          />
          <input
            name="password"
            onChange={handleChange}
            className="splash-input"
            type="password"
            placeholder="비밀번호"
          />
          <input
            name="confirmPassword"
            onChange={handleChange}
            className="splash-input"
            type="password"
            placeholder="비밀번호 확인"
          />
          <button
            className="h-12 mt-4 mb-4 text-sm bg-logo rounded-lg text-white shadow-sm hover:bg-primary transition duration-100 ease-out hover:ease-in"
            onClick={() => {
              navigate('/login');
            }}
          >
            회원가입
          </button>
        </div>
        <div className="text-gray-500 text-xs">
          이미 계정이 있나요?{' '}
          <Link to="/login" className="text-primary">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};


export default SignUpPage;
