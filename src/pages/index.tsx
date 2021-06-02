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

  @media (min-width: 860px) {
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0;
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
  @media (min-width: 860px) {
    background: #eff6ff;
    flex: 1;
    padding: 24px 16px;
  }
  @media (min-width: 1180px) {
    background: #fff;
    display: flex;
    gap: 16px;
  }
`;

const Orverview = styled.div`
  @media (min-width: 1180px) {
    flex: 1;
    background: #eff6ff;
    border-radius: 18px;
    padding: 24px 16px;
    position: relative;
  }
`;

const OrverviewInner = styled.div`
  @media (min-width: 1180px) {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Home = () => {
  return (
    <Container>
      <NavBar />

      <MainContainer>
        <Orverview>
          <MonthSelecter type="month" value="2021-05" />
          <OrverviewInner>
            <MainCard />

            <Chart />
          </OrverviewInner>
        </Orverview>

        <Transactions />
      </MainContainer>
    </Container>
  );
};

export default Home;
