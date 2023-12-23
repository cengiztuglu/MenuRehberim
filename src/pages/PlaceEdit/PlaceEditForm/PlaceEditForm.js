import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PlaceEditForm = ({ username }) => {
  const [place, setPlace] = useState({
    restourantName: '',
    placeDefinition: '',
    placeAdress: '',
    category: '',
  });
  const [placeBgPicName, setPlaceBgPicName] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlace({ ...place, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPlaceBgPicName(file);
  };

  const handleEditer = async (event) => {
    event.preventDefault();

    if (placeBgPicName) {
      setError('');
      try {
        const formData = new FormData();
        Object.entries(place).forEach(([key, value]) => {
          formData.append(key, value);
        });
        formData.append('file', placeBgPicName);

        const response = await axios.post(
          `http://localhost:8080/api/placeAdd/${username}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        if (response.status === 200) {
          console.error('Bilgiler ve dosya başarıyla yüklendi');
          // Başka bir işlem yapılabilir
        } else {
          console.error('Dosya yüklenirken bir hata oluştu.');
        }
      } catch (error) {
        console.error('Dosya yüklenirken bir hata oluştu.', error);
      }
    } else {
      setError('Lütfen bir dosya seçin.');
    }
  };

    const FormHeader = () => {
      return (
        <div >
          <div >
              <h2 className="heading-secondary">
                Restoranınızı Tanımlayın {username} ! 
              </h2>
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
                <InputLabel>Restoran Ad :</InputLabel>
                <Input
                 type="text"
                 name='restourantName'
                 placeholder="Restoran Adı"
                value={user.restourantName}
                onChange={handleInputChange}
                />
            </InputContainer>
            <InputContainer>
            <InputLabel>Restoran Açıklama :</InputLabel>
            <Input
              type="text"
              name='placeDefinition'
              placeholder="Restoran Acçıklaması"
              value={user.placeDefinition}
              onChange={handleInputChange}
            />
             </InputContainer>

              <InputContainer>
              <InputLabel>Restoran Adres :</InputLabel>
              <Input
                type="text"
                name='placeAdress'
                placeholder="Restourant Adresi"
                value={place.placeAdress}
                onChange={handleInputChange}
              />
              </InputContainer>
              <InputContainer>
              <InputLabel>Restoran Profil Fotoğrafı :</InputLabel>
              <Input
                type="file"
                accept=".jpg, .jpeg, .png" 
                name='placeBgPicName'

                onChange={handleFileChange}
              />
              </InputContainer>
              <InputContainer>
              <InputLabel>Restoran Kategorisi :</InputLabel>
              <Input
                name='category'
                type="text"
                placeholder="Kategori"
                value={place.category}
                onChange={handleInputChange}
              />
              </InputContainer>
            </>
          )}
          <Button type='submit'>{ 'Değişiklikleri Kaydet'}</Button>
        
        </Form>
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

  export default PlaceEditForm;
