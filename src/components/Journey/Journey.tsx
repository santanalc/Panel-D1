import React, { useState } from "react";
import { Container, TagInfo, Row, Text, LogoText } from "./styles";
import Table from "../../images/TableIcons/table.svg";
import Sent from "../../images/TableIcons/paper-plane.svg";
import Play from "../../images/TableIcons/play-circle.svg";
import Pen from "../../images/TableIcons/pen.svg";
import Bed from "../../images/TableIcons/bed.svg";
import Check from "../../images/TableIcons/check.svg";
import { Icon } from "../Navbar/styles";

interface Props {
  info: Info[];
  filter: number;
  setFilter: React.Dispatch<React.SetStateAction<number>>;
}
interface Info {
  id: number;
  name: String;
  quantity: number;
}

function GetLogo(status: number) {
  switch (status) {
    case 0:
      return <Icon src={Table} />;
    case 1:
      return <Icon src={Sent} />;
    case 2:
      return <Icon src={Play} />;
    case 3:
      return <Icon src={Pen} />;
    case 4:
      return <Icon src={Bed} />;
    case 5:
      return <Icon src={Check} />;
    default:
  }
}

function Journey(props: Props) {
  const { info, filter, setFilter } = props;

  return (
    <Container>
      {info.map((elem) => {
        return (
          <Row onClick={() => setFilter(elem.id)}>
            <LogoText>
              {GetLogo(elem.id)}
              <Text selected={filter === elem.id}>{elem.name}</Text>
            </LogoText>

            <TagInfo selected={filter === elem.id}>{elem.quantity}</TagInfo>
          </Row>
        );
      })}
    </Container>
  );
}

export default Journey;
