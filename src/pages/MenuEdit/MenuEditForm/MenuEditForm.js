import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


import "./MenuEditForm.css";

const MenuEditForm = ({username}) => {
  const [item, setUser] = useState({
    itemName: '',
    itemDefination: '',
    itemPicName: '',
    itemPrice: '',
  
  });
  const [error, setError] = useState(null);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...item, [name]: value });
  };

  const handleEditer = (event) => {
    event.preventDefault();
   
      // Kullanıcı kaydı
      if (item.itemName && item.itemDefination && item.itemPicName&& item.itemPrice ) {
        setError('');
        axios.post(`http://localhost:8081/api/menuItemAdd/${username}`, item)
          .then(response => {
            if (response.data === true) {
              console.error("Menü ürün Eklendi");
              
              // Başarılı kayıt durumunda başka bir sayfaya yönlendirme yapılabilir.
            } else {
              console.error("Kullanıcı kaydı sırasında bir hata oluştu.");
            }
          }).catch(error => {
            console.error("Kullanıcı kaydı sırasında bir hata oluştu.");
          });
      } else {
        setError('Lütfen tüm alanları doldurun.');
      }
  };

  const FormHeader = () => {
    return (
      <div >
        <div >
            <h2 className="heading-secondary">
              Menu İçeriğinizi Kaydedin {username}! 
            </h2>
        </div>
      </div>
     )
    } 

    const TextInfo = () => {
        return (
          <div >
            <div >
                <p >
                <br/>
                  *Ürün kategorisi listeniz boş veya aradığınız kategori yok ise, lütfen aşağıdan ürün kategorisi ekleyiniz. 
                </p>
            </div>
          </div>
         )
        } 

  return (
    <Container>
      <FormHeaderC>
        <FormHeader/>  
      </FormHeaderC>

      <Form onSubmit={handleEditer}>
        { (
          <>
            <InputContainer>
                <InputLabel>Urun Ad :</InputLabel>
                <Input
                 type="text"
                 name='itemName'
                 placeholder="Urun Adı"
                value={item.itemName}
                onChange={handleInputChange}
                />
            </InputContainer>
            <InputContainer>
            <InputLabel>Urun Açıklama :</InputLabel>
            <Input
              type="text"
              name='itemDefination'
              placeholder="Urun Açıklaması"
              value={item.itemDefination}
              onChange={handleInputChange}
            />
             </InputContainer>

             <InputContainer>
            <InputLabel>Urun Fotografı :</InputLabel>
            <Input
              type="text"
              name='itemPicName'
              placeholder="Urun Fotografı"
              value={item.itemPicName}
              onChange={handleInputChange}
            />
            </InputContainer>
            <InputContainer>
            <InputLabel>Urun Fiyatı :</InputLabel>
            <Input
              name='itemPrice'
              type="text"
              placeholder="Urun Fiyatı"
              value={item.itemPrice}
              onChange={handleInputChange}
            />
            </InputContainer>
            {/* <InputContainer>
            <InputLabel>Urun Kategorisi :</InputLabel>
            <Input
              name='Urun Kategorisi'
              type="text"
              placeholder="Urun Kategorisi"
              value={user.password}
              onChange={handleInputChange}
            />
            </InputContainer>
             */}
          </>
        )}
        <Button type='submit'>{ 'Urun Kaydet'}</Button>
      
      </Form>
      {error && <Error>{error}</Error>}


     {/* <FormCategory onSubmit={handleEditer}>
        { (
          <>
          <TextInfoC>
            <TextInfo/>  
          </TextInfoC>
            <InputContainer>
                <InputLabel>Kategori Ad :</InputLabel>
                <Input
                 type="text"
                 name='kategoriAd'
                 placeholder="Kategori Adı"
                value={user.name}
                onChange={handleInputChange}
                />
            </InputContainer>
          </>
        )}
        <Button type='submit'>{ 'Kategori Kaydet'}</Button>
      </FormCategory> */}
      {error && <Error>{error}</Error>}
    
    </Container>
    
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: #cac6c6;
  max-width: 90%; 
  margin: 0 auto; 
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 1000px;
`;

const FormCategory = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin-top: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 1000px;
`;

const Input = styled.input` 
padding: 12px;
margin-bottom: 16px;
border-radius: 4px;
border: 1px solid #ccc;
width: 70%;
font-size: 16px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  background-color: #c10e18;
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

const FormHeaderC = styled.div`
padding: 12px 24px;
border-radius: 4px;
border: none;
background-color: #c10e18;
margin-bottom: 50px;
color: white;
cursor: pointer;
transition: background-color 0.3s ease;

`;

const TextInfoC = styled.div`
padding-bottom: 24px;
border-radius: 4px;
border: none;
cursor: pointer;
transition: background-color 0.3s ease;

`;

const InputLabel = styled.span`
padding: 12px;
margin-bottom: 16px;
border-radius: 4px;
width: 30%;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: left;

  width: 100%;
`;

export default MenuEditForm;
