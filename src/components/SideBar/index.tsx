import React from 'react';
import { SidebarContainer, ToggleButton, SidebarItem } from './styles';

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, setIsExpanded }) => {
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SidebarContainer isExpanded={isExpanded}>
      <ToggleButton onClick={toggleSidebar}>
        {isExpanded ? '⬅️' : '➡️'}
      </ToggleButton>
      <SidebarItem isExpanded={isExpanded}>
        <span>Opção 1</span>
      </SidebarItem>
      <SidebarItem isExpanded={isExpanded}>
        <span>Opção 2</span>
      </SidebarItem>
      <SidebarItem isExpanded={isExpanded}>
        <span>Opção 3</span>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
