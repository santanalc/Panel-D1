import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const BackdropDiv = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalDiv = styled(motion.div)`
  position: relative;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px 30px;
  background: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonDiv = css`
  padding: 0;
  border: none;
  background: none;
  outline: none;
`;

export const ButtonContinue = styled.button`
  ${ButtonDiv};
  color: #117eff;
  font-weight: bold;
`;

export const ButtonCancel = styled.button`
  ${ButtonDiv};
  color: #9196ab;
`;

export const TextDiv = styled.p`
  color: #444;
  font-weight: bold;
`;

export const ModalTile = styled.p`
  color: #9196ab;
  font-weight: bold;
  text-align: left;
  padding-bottom: 15px;
  border-bottom: 1px #9196ab solid;
  width: 100%;
`;

export const InfoModal = styled.p`
  color: #3e4157;
  text-align: left;
  width: 100%;
`;

export const InputModal = styled.input`
  width: 100%;
  border: 1px solid #cccfde;
  border-radius: 5px;
  height: 35px;
  outline: none;
`;

export const InfoInputModal = styled.p`
  color: #9196ab;
  text-align: left;
  width: 100%;
`;
