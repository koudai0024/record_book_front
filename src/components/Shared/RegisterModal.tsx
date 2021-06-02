import { XIcon } from "@heroicons/react/solid";
import cc from "classcat";
import { styled } from "linaria/react";
import type { MouseEventHandler } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { RegisterModalState } from "src/lib/atoms/RegisterModal";

const Wrap = styled.div`
  background: rgba(243, 244, 246, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

const Modal = styled.div`
  background: #fff;
  width: 80%;
  max-width: 420px;
  border-radius: 18px;
  padding: 18px;
  box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const Close = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  .icon {
    width: 24px;
    height: 24px;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  width: 180px;
  overflow: hidden;
  margin: 0 auto;
  .button {
    background: #818cf8;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    padding: 4px 0;
    flex: 1;
    border: none;
  }
  .pressed {
    background: #d1d5db;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  font-size: 12px;
  font-weight: bold;
  width: 100%;
  margin-top: 12px;

  .input {
    display: block;
    background: #e5e7eb;
    width: 100%;
    height: 32px;
    border: none;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 0 8px;
  }
`;

const SendButton = styled.button`
  background: #818cf8;
  display: block;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  color: #fff;
  width: 200px;
  border: 0;
  border-radius: 8px;
  padding: 4px 0;
  margin: 12px auto 0;
`;

export const RegisterModal = () => {
  const [isType, setIsType] = useState("spending");
  const [isOpen, setIsOpen] = useRecoilState(RegisterModalState);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClickTypeChange: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.currentTarget.dataset.type === "spending") {
      setIsType("spending");
    } else {
      setIsType("income");
    }
  };

  if (isOpen) {
    return (
      <Wrap>
        <Modal>
          <Close onClick={handleClose}>
            <XIcon className="icon" />
          </Close>
          <Buttons>
            <button
              className={cc([
                "button",
                {
                  pressed: isType === "spending",
                },
              ])}
              data-type="spending"
              onClick={handleClickTypeChange}
            >
              支出
            </button>
            <button
              className={cc([
                "button",
                {
                  pressed: isType === "income",
                },
              ])}
              data-type="income"
              onClick={handleClickTypeChange}
            >
              収入
            </button>
          </Buttons>
          {isType === "spending" ? <SpendingForm /> : <IncomeForm />}
        </Modal>
      </Wrap>
    );
  }
  return null;
};

const SpendingForm = () => {
  return (
    <div>
      <Label>
        <span>カテゴリ</span>
        <input type="text" className="input" list="categiry_list" />
        <datalist id="categiry_list">
          <option value="生活費" />
        </datalist>
      </Label>
      <Label>
        <span>金額</span>
        <input type="number" className="input" />
      </Label>
      <Label>
        <span>内容</span>
        <input type="text" className="input" />
      </Label>
      <Label>
        <span>日付</span>
        <input type="text" className="input" />
      </Label>
      <SendButton>登録</SendButton>
    </div>
  );
};

const IncomeForm = () => {
  return (
    <div>
      <Label>
        <span>カテゴリ</span>
        <input type="text" className="input" list="categiry_list" />
        <datalist id="categiry_list">
          <option value="本業" />
        </datalist>
      </Label>
      <Label>
        <span>金額</span>
        <input type="number" className="input" />
      </Label>
      <Label>
        <span>内容</span>
        <input type="text" className="input" />
      </Label>
      <Label>
        <span>日付</span>
        <input type="text" className="input" />
      </Label>
      <SendButton>登録</SendButton>
    </div>
  );
};
