import { InputHTMLAttributes, useState, forwardRef } from "react";
import styled, { css } from "styled-components";
import { motion, MotionStyle, TargetAndTransition } from "framer-motion";
import { MdClose, MdSearch } from "react-icons/md";
import React from "react";

interface Props {
  value: string;
  onChangeText: (text: string) => any;
  onPressRightIcon?: () => any;
  onPressLeftIcon?: () => any;
}

function StyledInput(props: Props) {
  let [inputFocus, setInputFocus] = useState(false);

  return (
    <InputContainer>
      <LeftIconStyle onClick={props.onPressLeftIcon}>
        <MdSearch fontSize={25}></MdSearch>
      </LeftIconStyle>

      <motion.div
        style={placeholderStyle}
        animate={
          inputFocus || props.value.length > 0
            ? upperPlaceholderState
            : initialPlaceholderState
        }
      >
        Buscar
      </motion.div>
      <InputStyled
        type={"text"}
        value={props.value}
        onChange={(evt) => props.onChangeText(evt.target.value)}
      ></InputStyled>
      {props.value.length > 0 && (
        <RightIconStyle onClick={props.onPressRightIcon}>
          <MdClose fontSize={25}></MdClose>
        </RightIconStyle>
      )}
    </InputContainer>
  );
}

export default StyledInput;

const placeholderStyle: MotionStyle = {
  position: "absolute",
  bottom: 10,
  left: 45,
  scale: 1,
  pointerEvents: "none",
  originX: 0.1,
};

const initialPlaceholderState: TargetAndTransition = {
  y: 0,
  x: 0,
  scale: 1,
  opacity: 0.6,
};

const upperPlaceholderState: TargetAndTransition = {
  y: -25,
  x: -45,
  scale: 0.8,
  opacity: 1,
};

const InputStyled = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: #d5d5d5;
  padding: 10px;
  text-indent: 35px;
  outline: none;
`;

const placeHolderStyle = css`
  text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
`;

const LeftIconStyle = styled.div`
  position: absolute;
  bottom: 5px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightIconStyle = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 300px;
  display: flex;
  position: relative;
`;
