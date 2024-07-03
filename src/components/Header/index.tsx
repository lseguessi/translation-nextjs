// components/Header.tsx
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;

  input {
    padding: 8px;
    margin-right: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
`;

const LanguageSwitcher = styled.select`
  margin-left: 16px;
  padding: 4px;
`;

const Header: React.FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    console.log(locale)
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <HeaderContainer>
      <Logo>{t('title')}</Logo>
      <SearchBar>
        <input type="text" placeholder={t('search_placeholder')} />
        <button>🔍</button>
      </SearchBar>
      <UserSection>
        <button>🌐</button>
        <button>🔔</button>
        <div>DS</div>
        <LanguageSwitcher onChange={changeLanguage} defaultValue={router.locale}>
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="pt-BR">PT-BR</option>
        </LanguageSwitcher>
      </UserSection>
    </HeaderContainer>
  );
};

export default Header;
