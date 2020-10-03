import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface Props {
  selected: boolean;
}

export const TableBody = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 750px;
  height: 100%;
`;

export const RowHead = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  height: 35px;
`;

export const RowTable = styled(motion.div)`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  background-color: #ffffff;
  height: 45px;
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
`;

export const TableTitle = styled.div`
  color: #9196ab;
  text-align: center;
`;

export const NameTitle = styled.div`
  color: #9196ab;
  text-align: left;
`;

export const NameCell = styled.div`
  color: #3e4157;
  font-weight: bold;
  text-align: left;
`;

export const Cell = styled.div`
  color: #3e4157;
  text-align: center;
`;
