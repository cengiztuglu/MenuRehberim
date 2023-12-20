import React, { useState } from 'react';
import styled from 'styled-components';

import "./CommentList.css";



const CommentListShow = ({ comments }) => {
  return (
        <div>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <strong>{comment.username} :  </strong> {comment.text}{' '}
                <span style={{ fontSize: '1em', color: 'gray' }}>
                  ({new Date(comment.date).toLocaleString()})
                </span>
              </li>
            ))}
          </ul>
        </div>
  );
};

const CommentList = () => {
  const comments = [
    {
      username: 'kullanici1',
      text: 'Bu ürün harika!',
      date: '2023-12-20T12:00:00Z',
    },
    {
      username: 'kullanici2',
      text: 'Fiyat performans açısından çok iyi.',
      date: '2023-12-19T15:30:00Z',
    },

  ];

  return (
    <Container>
      
    <FormCategory>
      { (
        <>
          <h1>Ürün Yorumları</h1>
          <CommentListShow comments={comments} />
        </>
      )}
    </FormCategory>
  
  </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding-top: 0px;
  padding-bottom: 0px;
  background-color: #cac6c6;
  max-width: 90%; 
  margin: 0 auto; 
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




export default CommentList;
