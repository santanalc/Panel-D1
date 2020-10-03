import React, { useState } from "react";
import { Container, TagInfo, Row, Text } from "./styles";
import Table from "../../images/TableIcons/table.svg";
import Sent from "../../images/TableIcons/paper-plane.svg";
import Play from "../../images/TableIcons/play-circle.svg";
import Pen from "../../images/TableIcons/pen.svg";
import Bed from "../../images/TableIcons/bed.svg";
import Check from "../../images/TableIcons/check.svg";
import { Icon } from "../Navbar/styles";

function Journey() {
  const [tableSelect, setTableSelect] = useState(false);
  const [sentSelect, setSentSelect] = useState(false);
  const [playSelect, setPlaySelect] = useState(false);
  const [penSelect, setPenSelect] = useState(false);
  const [bedSelect, seBedSelect] = useState(false);
  const [checkSelect, setCheckSelect] = useState(false);

  return (
    <Container>
      <Row onClick={() => setTableSelect((flag) => !flag)}>
        <Icon src={Table} />
        <Text selected={tableSelect}>TEXT</Text>
        <TagInfo selected={tableSelect}>12</TagInfo>
      </Row>
      <Row onClick={() => setSentSelect((flag) => !flag)}>
        <Icon src={Sent} />
        <Text selected={sentSelect}>TEXT</Text>
        <TagInfo selected={sentSelect}>12</TagInfo>
      </Row>
      <Row onClick={() => setPlaySelect((flag) => !flag)}>
        <Icon src={Play} />
        <Text selected={playSelect}>TEXT</Text>
        <TagInfo selected={playSelect}>12</TagInfo>
      </Row>
      <Row onClick={() => setPenSelect((flag) => !flag)}>
        <Icon src={Pen} />
        <Text selected={penSelect}>TEXT</Text>
        <TagInfo selected={penSelect}>12</TagInfo>
      </Row>
      <Row onClick={() => seBedSelect((flag) => !flag)}>
        <Icon src={Bed} />
        <Text selected={bedSelect}>TEXT</Text>
        <TagInfo selected={bedSelect}>12</TagInfo>
      </Row>
      <Row onClick={() => setCheckSelect((flag) => !flag)}>
        <Icon src={Check} />
        <Text selected={checkSelect}>TEXT</Text>
        <TagInfo selected={checkSelect}>12</TagInfo>
      </Row>
    </Container>
  );
}

export default Journey;
