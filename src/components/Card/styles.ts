import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 300px;
  height: 200px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  margin: 16px;
`;

export const CardImage = styled.div`
  height: 100px;
  background-color: #ccc;
  border-radius: 4px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin: 8px 0;
`;

export const CardButton = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;