import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import StyledInput from "../components/StyledInput/StyledInput";
import Acme from "../images/Logos/acme-logo.png";

import {
  JourneyContainer,
  LogoBar,
  LogoUser,
  PanelContainer,
  PanelDiv,
  SearchButton,
  SearchContainer,
  TableContainer,
  TopBar,
} from "./styles";
import { MdAdd } from "react-icons/md";

function Panel() {
  const [journey, setJourney] = useState("");

  return (
    <PanelDiv>
      <Navbar />
      <PanelContainer>
        <TopBar>
          <LogoBar>
            <LogoUser>A</LogoUser>
            <img
              alt={"acme"}
              src={Acme}
              style={{ width: "90px", height: "30px" }}
            ></img>
          </LogoBar>
          <SearchContainer>
            <StyledInput
              value={journey}
              onChangeText={(txt) => setJourney(txt)}
              onPressRightIcon={() => setJourney("")}
              onPressLeftIcon={() => console.log("OI")}
            />
            <SearchButton>
              <MdAdd fontSize={20} />
              <p>Nova Jornada</p>
            </SearchButton>
          </SearchContainer>
        </TopBar>

        <JourneyContainer></JourneyContainer>

        <TableContainer></TableContainer>
      </PanelContainer>
    </PanelDiv>
  );
}

export default Panel;
