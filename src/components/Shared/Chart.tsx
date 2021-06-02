import { styled } from "linaria/react";
import { VictoryPie } from "victory";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  margin-top: 24px;
`;

const Item = styled.div`
  background: #fff;
  border-radius: 18px;
  flex: 1;
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.2);
`;

export const Chart = () => {
  return (
    <Wrap>
      <Item>
        <VictoryPie />
      </Item>
      <Item>
        <VictoryPie />
      </Item>
    </Wrap>
  );
};
