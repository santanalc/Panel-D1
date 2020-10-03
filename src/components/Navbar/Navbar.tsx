import React from "react";
import { Nav, Border, ContainerIcons, Icon, Logo } from "./styles";
import ChartPie from "../../images/NavIcons/chart-pie.svg";
import Cloud from "../../images/NavIcons/ccm-cloud.svg";
import Arrows from "../../images/NavIcons/exchange-alt.svg";
import ExternalLink from "../../images/NavIcons/external-link-alt-solid.svg";
import Diamond from "../../images/NavIcons/gem.svg";
import Rocket from "../../images/NavIcons/rocket.svg";
import SignOut from "../../images/NavIcons/sign-out-alt.svg";
import Tools from "../../images/NavIcons/tools.svg";
import Users from "../../images/NavIcons/user-friends.svg";
import logo from "../../images/Logos/logotipo-branco.png";

function Navbar() {
  return (
    <div>
      <Border position="top" />
      <Nav>
        <ContainerIcons>
          <Logo alt={"logo"} src={logo} />
        </ContainerIcons>
        <ContainerIcons>
          <Icon src={ChartPie} />
          <Icon src={Rocket} />
          <Icon src={Users} />
          <Icon src={Cloud} />
          <Icon src={ExternalLink} />
        </ContainerIcons>
        <ContainerIcons />
        <ContainerIcons>
          <Icon src={Diamond} />
          <Icon src={Tools} />
          <Icon src={Arrows} />
          <Icon src={SignOut} />
        </ContainerIcons>
      </Nav>
      <Border position="bottom" />
    </div>
  );
}

export default Navbar;
