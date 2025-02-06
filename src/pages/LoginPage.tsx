import PageLayout from '@/components/layout/PageLayout';
import Login from '@/components/login/Login';
import { API } from '@/utils/config';

const LoginPage = () => {
  console.log(API.EMAILLOGIN(), API.SIGNUP())
  return (
    <PageLayout customHeader={false} customFooter={false}>
      <Login />
    </PageLayout>
  );
};

export default LoginPage;
