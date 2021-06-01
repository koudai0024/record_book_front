import { styled } from "linaria/react";

const Container = styled.div`
  background: #eff6ff;
  width: 100%;
  min-height: 100vh;
  padding: 12px 8px;
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

const MainCard = styled.div`
  background: #818cf8;
  width: 100%;
  border-radius: 18px;
  padding: 24px 0;
  margin-top: 16px;
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.2);
`;

const MainCardInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const MainCardItem = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const MainCardLabel = styled.p`
  background: #fff;
  font-size: 24px;
  font-weight: bold;
  border-radius: 8px;
  padding: 4px 16px;

  .income {
    color: #5ca2d5;
  }
  .spending {
    color: #f68887;
  }
`;

const MainCardMoney = styled.p`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  font-size: 32px;
  font-weight: bold;
  color: #fff;

  .yen {
    font-size: 18px;
  }
`;

const Home = () => {
  return (
    <Container>
      <MonthSelecter type="month" value="2021-05" />
      <MainCard>
        <MainCardInner>
          <MainCardItem>
            <MainCardLabel>
              <span className="income">収入</span>
            </MainCardLabel>
            <MainCardMoney>
              285,000<span className="yen">円</span>
            </MainCardMoney>
          </MainCardItem>
          <MainCardItem>
            <MainCardLabel>
              <span className="spending">支出</span>
            </MainCardLabel>
            <MainCardMoney>
              285,000<span className="yen">円</span>
            </MainCardMoney>
          </MainCardItem>
        </MainCardInner>
      </MainCard>
    </Container>
  );
};

export default Home;
