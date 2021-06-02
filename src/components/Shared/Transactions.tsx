import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";
import { styled } from "linaria/lib/react";
import type { VFC } from "react";

const TransactionsWrap = styled.div`
  width: 100%;
  margin-top: 32px;

  @media (min-width: 1180px) {
    width: 360px;
    margin-top: 0;
  }
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

const Item = styled.li`
  display: flex;
  margin-top: 12px;
`;

const Icon = styled.div`
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

const Desc = styled.div`
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

const Money = styled.p`
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

export const Transactions = () => {
  return (
    <TransactionsWrap>
      <TransactionsTitle>Transactions</TransactionsTitle>
      <TransactionsList>
        <TransactionsItem
          label="すき家昼飯"
          date="5/4"
          money={640}
          type="spending"
        />
        <TransactionsItem
          label="4月20日分報酬"
          date="5/9"
          money={120000}
          type="income"
        />
        <TransactionsItem
          label="スーパー玉出買い物"
          date="5/12"
          money={2483}
          type="spending"
        />
        <TransactionsItem
          label="スーパー玉出買い物"
          date="5/23"
          money={5489}
          type="spending"
        />
      </TransactionsList>
    </TransactionsWrap>
  );
};

type TransactionsItemProps = {
  label: string;
  date: string;
  money: number;
  type: "income" | "spending";
};
const TransactionsItem: VFC<TransactionsItemProps> = (props) => {
  return (
    <Item>
      <Icon className={props.type}>
        {props.type === "income" ? (
          <ArrowDownIcon className="icon" />
        ) : (
          <ArrowUpIcon className="icon" />
        )}
      </Icon>
      <Desc>
        <p className="label">{props.label}</p>
        <p className="date">{props.date}</p>
      </Desc>
      <Money>
        <span className="inner">
          {props.type === "income" ? "+" : "-"}
          {props.money.toLocaleString()}
          <span className="yen">円</span>
        </span>
      </Money>
    </Item>
  );
};
