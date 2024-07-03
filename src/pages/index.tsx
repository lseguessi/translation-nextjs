import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import Card from "../components/Card";
import { Main, Container, Content } from "@/components/Main/styles";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


const Home: React.FC = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <Container>
      <Header />
      <Main isSidebarExpanded={isSidebarExpanded}>
        <Sidebar
          isExpanded={isSidebarExpanded}
          setIsExpanded={setIsSidebarExpanded}
        />
        <Content>
          <Card />
          <Card />
          <Card />
        </Content>
      </Main>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  return {
      props: {
          ...(await serverSideTranslations(locale || 'en')),
      },
  };
}

export default Home;
