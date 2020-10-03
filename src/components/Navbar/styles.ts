import styled, { css } from "styled-components";
import { ReactComponent as ChartPie } from "../../images/NavIcons/chart-pie.svg";
import { ReactComponent as Cloud } from "../../images/NavIcons/ccm-cloud.svg";
import { ReactComponent as Arrows } from "../../images/NavIcons/exchange-alt.svg";
import { ReactComponent as ExternalLink } from "../../images/NavIcons/external-link-alt-solid.svg";
import { ReactComponent as Diamond } from "../../images/NavIcons/gem.svg";
import { ReactComponent as Rocket } from "../../images/NavIcons/rocket.svg";
import { ReactComponent as SignOut } from "../../images/NavIcons/sign-out-alt.svg";
import { ReactComponent as Tools } from "../../images/NavIcons/tools.svg";
import { ReactComponent as Users } from "../../images/NavIcons/user-friends.svg";
interface Props {
  position: String;
}
export const Nav = styled.nav`
  position: fixed;
  background: #1a1731;
  top: 0;
  left: 0;
  height: 100%;
  width: 70px;
  display: grid;
  grid-template-rows: 100px 3fr 1fr 2fr;
`;

export const Border = styled.div<Props>`
  background: transparent linear-gradient(90deg, #00e1ff 0%, #117eff 100%);
  position: fixed;
  left: 0px;
  width: 70px;
  height: 5px;
  z-index: 1;
  ${(props) =>
    props.position === "top" &&
    css`
      top: 0px;
    `}
  ${(props) =>
    props.position === "bottom" &&
    css`
      bottom: 0px;
    `}
`;

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 10px;
`;

export const Logo = styled.img`
  width: 30px;
  height: 17px;
  margin: 50px 10px 10px 10px;
`;

export const NavIcon = css`
  width: 20px;
  height: 20px;
  margin: 10px;
  &:hover {
    fill: #117eff;
  }
`;

export const ChartPieIcon = styled(ChartPie)`
  ${NavIcon}
`;
export const CloudIcon = styled(Cloud)`
  ${NavIcon}
`;
export const ArrowsIcon = styled(Arrows)`
  ${NavIcon}
`;
export const ExternalLinkIcon = styled(ExternalLink)`
  ${NavIcon}
`;
export const DiamondIcon = styled(Diamond)`
  ${NavIcon}
`;
export const RocketIcon = styled(Rocket)`
  ${NavIcon}
`;
export const SignOutIcon = styled(SignOut)`
  ${NavIcon}
`;
export const ToolsIcon = styled(Tools)`
  ${NavIcon}
`;
export const UsersIcon = styled(Users)`
  ${NavIcon}
`;
