import { styled } from "linaria/lib/react";
import type { VFC } from "react";

const Wrap = styled.div`
  background: #818cf8;
  width: 100%;
  border-radius: 18px;
  padding: 24px 0;
  margin-top: 16px;
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Label = styled.p`
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

const Content = styled.p`
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

export const MainCard = () => {
  return (
    <Wrap>
      <Inner>
        <MainCardLabelBlock type="income" money={285000} />
        <MainCardLabelBlock type="spending" money={98000} />
      </Inner>
    </Wrap>
  );
};

type MainCardLabelBlockProps = {
  type: "income" | "spending";
  money: number;
};
const MainCardLabelBlock: VFC<MainCardLabelBlockProps> = (props) => {
  const label = props.type === "income" ? "収入" : "支出";
  return (
    <Item>
      <Label>
        <span className={props.type}>{label}</span>
      </Label>
      <Content>
        {props.money.toLocaleString()}
        <span className="yen">円</span>
      </Content>
    </Item>
  );
};
