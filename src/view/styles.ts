import styled, { css } from "styled-components";

interface Props {
  inputColor: string;
}

const SpaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PanelDiv = styled.div`
  background-color: #fafbff;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const PanelContainer = styled.div`
  width: 85%;
  height: 100%;
  margin: 20px 0px 0px 80px;
  display: grid;
  grid-template-areas:
    "bar bar"
    "journey table";
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 70px 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;

export const TopBar = styled.div`
  grid-area: bar;
  ${SpaceBetween};
  height: 100%;
  width: 100%;
`;

export const LogoBar = styled.div`
  ${SpaceBetween};
  width: 150px;
`;

export const LogoUser = styled.div`
  ${Center};
  height: 30px;
  width: 30px;
  border-radius: 30px;
  background: #117eff;
  color: white;
  cursor: default;
`;

export const SearchContainer = styled.div`
  ${SpaceBetween};
  width: 450px;
`;

export const JourneyContainer = styled.div`
  grid-area: journey;
`;

export const TableContainer = styled.div`
  grid-area: table;
  ${Center};
`;

export const SearchButton = styled.button`
  ${Center};
  width: 150px;
  height: 35px;
  background-color: #117eff;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  margin-left: 15px;
  &:hover {
    background: transparent linear-gradient(90deg, #00e1ff 0%, #117eff 100%) 0%
      0% no-repeat padding-box;
  }
`;
