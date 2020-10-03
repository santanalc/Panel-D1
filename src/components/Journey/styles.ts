import styled, { css } from "styled-components";

interface Props {
  selected?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.span`
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  cursor: default;
`;

export const Text = styled.p<Props>`
  color: #3e4157;
  ${(props) =>
    !props.selected &&
    css`
      ${Row}:hover & {
        color: #117eff;
      }
    `}
  ${(props) =>
    props.selected &&
    css`
      font-weight: bold;
      color: #117eff;
    `}
`;

export const TagInfo = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  font-size: 12px;
  background: #e4e6f1;
  ${(props) =>
    props.selected &&
    css`
      background: #117eff;
    `};
`;

export const LogoText = styled.div`
  display: flex;
  align-items: center;
`;
