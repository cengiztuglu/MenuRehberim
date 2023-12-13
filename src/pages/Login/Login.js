import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ 
    userName: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [isRestoranGirisi, setIsRestoranGirisi] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (isRestoranGirisi) {
      // Restoran girişi için işlemler burada yapılabilir
      navigate('/menu');
    } else {
      axios.post('http://localhost:8081/api/login', user)
        .then(response => {
          if (response.data === "Giriş başarılı!") {
            console.log('Giriş başarılı!');
            navigate('/menu');
          } else {
            setError('Kullanıcı adı veya şifre hatalı.');
          }
        })
        .catch(error => {
          console.error('Giriş hatası:', error);
          setError('Giriş sırasında bir hata oluştu. Lütfen tekrar deneyin.');
        });
    }
  };

  const toggleRestoranGirisi = () => {
    setIsRestoranGirisi(!isRestoranGirisi);
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

  const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-top: 8px;
    cursor: pointer;
  `;

  const CheckboxInput = styled.input`
    margin-right: 8px;
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
        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            checked={isRestoranGirisi}
            onChange={toggleRestoranGirisi}
          />
          Restoran Girişi
        </CheckboxLabel>
        <Button type="submit">Giriş Yap</Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Form>
      <RegisterLink to="/register">Hesabınız yok mu? Şimdi kayıt olun.</RegisterLink>
    </Container>
  );
};

export default LoginForm;
