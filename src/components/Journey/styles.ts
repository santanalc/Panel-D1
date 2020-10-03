import styled, { css } from "styled-components";

interface Props {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.span`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p<Props>`
  font: normal normal normal 13px/19px Gotham;
  color: #3e4157;
  &:hover ${Row} {
    color: #117eff;
  }
  ${(props) =>
    props.selected &&
    css`
      font: normal normal bold 13px/14px Gotham;
      color: #117eff;
    `}
`;

export const TagInfo = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background: #e4e6f1;
  &:hover ${Row} {
    background: #ebeef6;
  }
  ${(props) =>
    props.selected &&
    css`
      background: #117eff;
    `}
`;
