import React from "react";
import {
  Nav,
  Border,
  ContainerIcons,
  Logo,
  ArrowsIcon,
  ChartPieIcon,
  CloudIcon,
  DiamondIcon,
  ExternalLinkIcon,
  RocketIcon,
  SignOutIcon,
  ToolsIcon,
  UsersIcon,
} from "./styles";

import logo from "../../images/Logos/logotipo-branco.png";
import Tooltip from "@material-ui/core/Tooltip";
import { Theme, withStyles } from "@material-ui/core";

const TooltipArrow = withStyles((theme: Theme) => ({
  arrow: {
    color: "white",
  },
  tooltip: {
    backgroundColor: "white",
    color: "#3E4157",
    fontWeight: "bold",
    boxShadow: theme.shadows[1],
    padding: theme.spacing(1),
    fontSize: "14px",
  },
}))(Tooltip);

function Navbar() {
  return (
    <div>
      <Border position="top" />
      <Nav>
        <ContainerIcons>
          <Logo alt={"logo"} src={logo} />
        </ContainerIcons>
        <ContainerIcons>
          <TooltipArrow title="Análises" placement="left" arrow>
            <ChartPieIcon />
          </TooltipArrow>
          <TooltipArrow title="Jornadas" placement="left" arrow>
            <RocketIcon />
          </TooltipArrow>
          <TooltipArrow title="Clientes" placement="left" arrow>
            <UsersIcon />
          </TooltipArrow>
          <TooltipArrow title="CCM Clound" placement="left" arrow>
            <CloudIcon />
          </TooltipArrow>
          <TooltipArrow title="Versão 01" placement="left" arrow>
            <ExternalLinkIcon />
          </TooltipArrow>
        </ContainerIcons>
        <ContainerIcons />
        <ContainerIcons>
          <TooltipArrow title="Administração" placement="left" arrow>
            <DiamondIcon />
          </TooltipArrow>
          <TooltipArrow title="Help Desk" placement="left" arrow>
            <ToolsIcon />
          </TooltipArrow>
          <TooltipArrow title="Trocar Conta" placement="left" arrow>
            <ArrowsIcon />
          </TooltipArrow>
          <TooltipArrow title="Sair" placement="left" arrow>
            <SignOutIcon />
          </TooltipArrow>
        </ContainerIcons>
      </Nav>
      <Border position="bottom" />
    </div>
  );
}

export default Navbar;
