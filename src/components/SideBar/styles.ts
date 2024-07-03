import styled, { css } from 'styled-components';

export const SidebarContainer = styled.aside<{ isExpanded: boolean }>`
  width: ${(props) => (props.isExpanded ? '250px' : '60px')};
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  padding: 16px;
  transition: width 0.3s ease;

  ${(props) =>
    !props.isExpanded &&
    css`
      padding: 16px 8px;
    `}
`;

export const SidebarItem = styled.div<any>`
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  span {
    margin-left: 8px;
    font-weight: bold;
    ${(props) =>
      !props.isExpanded &&
      css`
        display: none;
      `}
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  margin-bottom: 16px;
`;