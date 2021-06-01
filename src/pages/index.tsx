import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";
import { styled } from "linaria/react";
import { VictoryPie } from "victory";

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

const ChartWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  margin-top: 24px;
`;

const ChartDisplay = styled.div`
  background: #fff;
  border-radius: 18px;
  flex: 1;
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.2);
`;

const TransactionsWrap = styled.div`
  width: 100%;
  margin-top: 32px;
`;

const TransactionsTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
`;

const TransactionsList = styled.ul`
  width: 100%;
  margin-top: 12px;
`;

const TransactionsItem = styled.li`
  display: flex;
  margin-top: 12px;
`;

const TransactionsIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 8px;

  &.income {
    background: #5ca2d5;
  }
  &.spending {
    background: #f68887;
  }

  .icon {
    width: 32px;
    height: 32px;
    color: #fff;
  }
`;

const TransactionsDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  font-weight: bold;
  margin-left: 12px;

  .label {
    font-size: 16px;
    color: #111827;
  }

  .date {
    font-size: 14px;
    color: #6b7280;
  }
`;

const TransactionsMoney = styled.p`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #111827;
  margin-left: auto;

  .inner {
    display: flex;
    align-items: flex-end;
    gap: 4px;
  }
  .yen {
    font-size: 14px;
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

      <ChartWrap>
        <ChartDisplay>
          <VictoryPie />
        </ChartDisplay>
        <ChartDisplay>
          <VictoryPie />
        </ChartDisplay>
      </ChartWrap>

      <TransactionsWrap>
        <TransactionsTitle>Transactions</TransactionsTitle>
        <TransactionsList>
          <TransactionsItem>
            <TransactionsIcon className="spending">
              <ArrowUpIcon className="icon" />
            </TransactionsIcon>
            <TransactionsDesc>
              <p className="label">昼食すき家</p>
              <p className="date">5/4</p>
            </TransactionsDesc>
            <TransactionsMoney>
              <span className="inner">
                -450<span className="yen">円</span>
              </span>
            </TransactionsMoney>
          </TransactionsItem>
          <TransactionsItem>
            <TransactionsIcon className="income">
              <ArrowDownIcon className="icon" />
            </TransactionsIcon>
            <TransactionsDesc>
              <p className="label">昼食すき家</p>
              <p className="date">5/4</p>
            </TransactionsDesc>
            <TransactionsMoney>
              <span className="inner">
                -450<span className="yen">円</span>
              </span>
            </TransactionsMoney>
          </TransactionsItem>
          <TransactionsItem>
            <TransactionsIcon className="spending">
              <ArrowUpIcon className="icon" />
            </TransactionsIcon>
            <TransactionsDesc>
              <p className="label">昼食すき家</p>
              <p className="date">5/4</p>
            </TransactionsDesc>
            <TransactionsMoney>
              <span className="inner">
                -450<span className="yen">円</span>
              </span>
            </TransactionsMoney>
          </TransactionsItem>
        </TransactionsList>
      </TransactionsWrap>
    </Container>
  );
};

export default Home;
