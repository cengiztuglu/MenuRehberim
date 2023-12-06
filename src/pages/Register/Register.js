import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const RegisterForm = () => {
  const [user,setUser]=useState({
    name:'',
    surname:'',
    email:'',
    username:'',
    password:''
  });

 
  const [error, setError] = useState(null);

  const handleInputChange=(event)=>{
    const{name,value}=event.target;
    setUser({...user,[name]:value});
  }

  const handleRegister = () => {
    if (user.name && user.surname && user.username && user.email && user.password) {
      setError('');
      axios.post('http://localhost:8081/api/user',user)
    .then(response=>
      {
        if(response.data===true){
          console.error("Kayıt Başarılı");
          
        }
        else{
          console.error("kayıtta patladı");
        }

      }).catch(error=>{console.error("bende patladı");})
      alert('Başarıyla kayıt oldunuz!');
      // Kayıt başarılıysa başka bir sayfaya yönlendirme yapılabilir.
    } else {
      setError('Lütfen tüm alanları doldurun.');
    }
    
    // Kayıt işlemi genellikle sunucuya istek yaparak gerçekleştirilir.
    // Örnek olarak burada basit bir kontrol yapılıyor.
    
  };

  return (
    <Container>
      <Form onSubmit={handleRegister} >
        <Title>Register</Title>
        <Input
          type="text"
          name='name'
          placeholder="Ad"
          value={user.name}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name='surname'
          placeholder="Soyad"
          value={user.surname}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name='username'
          placeholder="Kullanıcı Adı"
          value={user.username}
          onChange={handleInputChange}
        />
        <Input
        name='email'
          type="email"
          placeholder="E-posta Adresi"
          value={user.email}
          onChange={handleInputChange}
        />
        <Input
        name='password'
          type="password"
          placeholder="Şifre"
          value={user.password}
          onChange={handleInputChange}
        />
        <Button type='submit'>Kayıt Ol</Button>
        {error && <Error>{error}</Error>}
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export default RegisterForm;
