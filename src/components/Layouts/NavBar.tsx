import {
  ChartSquareBarIcon,
  ClipboardListIcon,
  CogIcon,
  HomeIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import { styled } from "linaria/lib/react";

const Wrap = styled.nav`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 0 8px;
  position: fixed;
  bottom: 24px;
  left: 0;
  z-index: 99;

  @media (min-width: 768px) {
    width: 180px;
    height: 100vh;
    position: sticky;
    top: 0;
  }
`;

const List = styled.ul`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 18px;
  padding: 8px 12px;
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px 0;
    width: 180px;
    height: 80%;
    margin: auto 0;
    box-shadow: none;
  }
`;

const Item = styled.li`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .icon {
    width: 48px;
    height: 48px;
  }

  .plusIcon {
    background: #818cf8;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 999px;
  }

  .plusIcon > .icon {
    color: #fff;
    width: 32px;
    height: 32px;
  }

  .label {
    display: none;

    @media (min-width: 768px) {
      display: block;
      font-size: 24px;
      font-weight: bold;
    }
  }
`;

export const NavBar = () => {
  return (
    <Wrap>
      <List>
        <Item>
          <HomeIcon className="icon" />
          <span className="label">Home</span>
        </Item>
        <Item>
          <ClipboardListIcon className="icon" />
          <span className="label">History</span>
        </Item>
        <Item>
          <div className="plusIcon">
            <PlusIcon className="icon" />
          </div>
          <span className="label">Record</span>
        </Item>
        <Item>
          <ChartSquareBarIcon className="icon" />
          <span className="label">Chart</span>
        </Item>
        <Item>
          <CogIcon className="icon" />
          <span className="label">Setting</span>
        </Item>
      </List>
    </Wrap>
  );
};
