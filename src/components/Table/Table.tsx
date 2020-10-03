import React, { useEffect, useState } from "react";
import {
  Cell,
  NameCell,
  NameTitle,
  RowHead,
  RowTable,
  TableBody,
  TableTitle,
} from "./styles";
import Sent from "../../images/TableIcons/paper-plane.svg";
import Play from "../../images/TableIcons/play-circle.svg";
import Pen from "../../images/TableIcons/pen.svg";
import Bed from "../../images/TableIcons/bed.svg";
import Check from "../../images/TableIcons/check.svg";
import { LogoText, Text } from "../Journey/styles";
import { Icon } from "../Navbar/styles";

interface Journey {
  name: String;
  recipients: String;
  success: String;
  status: number;
}

interface Props {
  journeys: Journey[];
}

function GetStatus(status: number) {
  switch (status) {
    case 1:
      return (
        <LogoText>
          <Icon src={Sent} />
          <Text>Enviando</Text>
        </LogoText>
      );
    case 2:
      return (
        <LogoText>
          <Icon src={Play} />
          <Text>Ativadas</Text>
        </LogoText>
      );
    case 3:
      return (
        <LogoText>
          <Icon src={Pen} />
          <Text>Configurando</Text>
        </LogoText>
      );
    case 4:
      return (
        <LogoText>
          <Icon src={Bed} />
          <Text>Ociosa</Text>
        </LogoText>
      );
    case 5:
      return (
        <LogoText>
          <Icon src={Check} />
          <Text>Concluí</Text>
        </LogoText>
      );
    default:
  }
}

function Table(props: Props) {
  const { journeys } = props;

  return (
    <TableBody>
      <RowHead>
        <NameTitle>Nome</NameTitle>
        <TableTitle>Destinatários</TableTitle>
        <TableTitle>Sucesso</TableTitle>
        <TableTitle>Status</TableTitle>
      </RowHead>
      {journeys.map((el) => (
        <RowTable>
          <NameCell>{el.name}</NameCell>
          <Cell>{el.recipients}</Cell>
          <Cell>{el.success}</Cell>
          <Cell>{GetStatus(el.status)}</Cell>
        </RowTable>
      ))}
    </TableBody>
  );
}

export default Table;
