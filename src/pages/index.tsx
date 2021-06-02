import { styled } from "linaria/react";
import { NavBar } from "src/components/Layouts/NavBar";
import { Chart } from "src/components/Shared/Chart";
import { MainCard } from "src/components/Shared/MainCard";
import { Transactions } from "src/components/Shared/Transactions";

const Container = styled.div`
  background: #eff6ff;
  width: 100%;
  min-height: 100vh;
  padding: 12px 8px 80px 8px;

  @media (min-width: 768px) {
    background: #fff;
    display: flex;
    justify-content: space-between;
    max-width: 860px;
    padding: 0;
    margin: 0 auto;
    position: relative;
  }
`;

const MonthSelecter = styled.input`
  display: block;
  background: #e5e7eb;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  height: 32px;
  padding: 0 12px;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  @media (min-width: 768px) {
    background: #eff6ff;
    flex: 1;
    padding: 24px 16px;
  }
`;

const Home = () => {
  return (
    <Container>
      <NavBar />

      <MainContainer>
        <MonthSelecter type="month" value="2021-05" />
        <MainCard />

        <Chart />

        <Transactions />
      </MainContainer>
    </Container>
  );
};

export default Home;
