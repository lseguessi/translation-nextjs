import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 8px;
    margin-right: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
`;