import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { LoginFormValues } from '../types/authTypes';
import SigninForm from '../components/auth/SigninForm';
import PublicLayout from '../components/layout/PublicLayout';
import api from '../network/api';
import { useAuthContext } from '../contexts/authContext';
import ErrorModal from '../components/modals/ErrorModal';

function SigninPage() {
  const SIGNIN_PAGE = 'signin-page';
  const COOKIE_DURATION_7_DAYS = 604800;
  
  const [cookies, setCookie, removeCookie] = useCookies(['authToken']);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { accessToken, setAccessToken } = useAuthContext();
  const navigate = useNavigate();

  const setAuthUser = async ({ email, password }: LoginFormValues) => {
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      setAccessToken(token);

      navigate('/');

      return token;
    } catch (error) {
      setErrorModalOpen(true);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unexpected error occurred');
      }
      console.log(error);
    }
  };
  const handleSubmit = (values: LoginFormValues) => {
    setAuthUser(values)
      .then(token => {
        if(values.rememberMe) {
          setCookie('authToken', token, { path: '/', maxAge: COOKIE_DURATION_7_DAYS });
        } else {
          removeCookie('authToken', { path: '/'})
        }
      })
  };


  return (
    <PublicLayout>
      <section className={'flex flex-col h-full ' + SIGNIN_PAGE}>
        <h2 className="text-white font-secondary font-extrabold text-4xl mb-6">
          Sign In
        </h2>
        <div className="mt-4 p-2">
          <SigninForm handleSubmit={handleSubmit} />
        </div>
      </section>
      {isErrorModalOpen && (
        <ErrorModal
          isOpen={isErrorModalOpen}
          setIsOpen={setErrorModalOpen}
          parentPage={SIGNIN_PAGE}
          errorMessage={errorMessage}
        />
      )}
    </PublicLayout>
  );
}

export default SigninPage;
