import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const Main = styled.main<{ isSidebarExpanded: boolean }>`
  display: flex;
  flex: 1;
  transition: margin-left 0.3s ease;
  margin-left: ${({ isSidebarExpanded }) => (isSidebarExpanded ? '0' : '0')};
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;