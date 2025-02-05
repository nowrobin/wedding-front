import { useNavigate } from 'react-router';
import LoginButton from '../LoginButton';
import emailLogo from '@/assets/email-login.png'
const EmailLoginButton = () => {
  const navigate = useNavigate();

  return (
    <LoginButton
      imgSrc={emailLogo}
      altText="Email Login"
      additionalStyles="mb-3"
      onClick={() => navigate('/email-login')}
    />
  );
};

export default EmailLoginButton;
