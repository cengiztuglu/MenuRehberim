import React, { useState } from 'react';
import styled from 'styled-components';
import { Link,Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginForm = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ 
    userName: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8081/api/login', user)
      .then(response => {
        if (response.data === "Giriş başarılı!") {
          console.log('Giriş başarılı!');
          navigate('/menu')
          // Başarılı giriş durumunda yapılacak işlemler burada gerçekleştirilebilir
          // Örneğin, kullanıcıyı başka bir sayfaya yönlendirebilirsiniz
        } else {
          setError('Kullanıcı adı veya şifre hatalı.');
        }
      })
      .catch(error => {
        console.error('Giriş hatası:', error);
        setError('Giriş sırasında bir hata oluştu. Lütfen tekrar deneyin.');
      });
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title>Login</Title>
        <Input
          type="text"
          name='userName'
          placeholder="Kullanıcı Adı"
          value={user.userName}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          placeholder="Şifre"
          name='password'
          value={user.password}
          onChange={handleInputChange}
        />
        <Button type="submit">Giriş Yap</Button>
        {error && <Error>{error}</Error>}
      </Form>
      <RegisterLink to="/register">Hesabınız yok mu? Şimdi kayıt olun.</RegisterLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  color: #333;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 300px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Error = styled.p`
  color: red;
  margin-top: 8px;
`;

const RegisterLink = styled(Link)`
  margin-top: 16px;
  text-decoration: none;
  color: #007bff;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

export default LoginForm;
