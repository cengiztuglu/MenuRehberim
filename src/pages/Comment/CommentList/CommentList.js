import React, { useState } from 'react';
import styled from 'styled-components';

import "./CommentList.css";



const CommentListShow = ({ comments }) => {
  return (
    <div>
    <ul style={commentStyle}>
        <h1 style={headerPrimary}>Ürün Yorumları</h1>
      {comments.map((comment, index) => (
        <li key={index} style={listItemStyle}>
          <strong>{comment.username}:</strong> {comment.text}{' '}
          <span style={{ fontSize: '0.8em', color: 'gray' }}>
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
          <CommentListShow comments={comments} style={commentListShowStyle}/>
        </>
      )}
    </FormCategory>
  
  </Container>
  );
};

const commentStyle = {
    listStyle: 'none',
    paddingLeft: 0,
    marginLeft: 0,
  };

  const listItemStyle = {
    marginBottom: '30px',
    textAlign: 'left',
  };

  const commentListShowStyle = {
    marginBottom: '30px',
    textAlign: 'left',
  };

  const headerPrimary = {
    textAlign: 'center',
    marginBottom:'40px',
    color: '#c10e18',
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
  padding: 30px;
  margin-top: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 1000px;
`;




export default CommentList;
