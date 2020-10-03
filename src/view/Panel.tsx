import React, { useEffect, useRef, useState } from "react";
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
import Journey from "../components/Journey/Journey";
import Table from "../components/Table/Table";
import Modal from "../components/Modal/Modal";

interface Journey {
  name: String;
  recipients: String;
  success: String;
  status: number;
}

interface Info {
  id: number;
  name: String;
  quantity: number;
}

function Panel() {
  const [input, setInput] = useState("");
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [info, setInfo] = useState<Info[]>([]);
  const [filter, setFilter] = useState(0);
  const firstUpdate = useRef(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        let response = await fetch(
          `https://api-d1-test.herokuapp.com/api/journey`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        let responseObject = await response.json();
        setJourneys(responseObject);

        let responseInfo = await fetch(
          `https://api-d1-test.herokuapp.com/api/filter`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        let responseInfoObject = await responseInfo.json();
        setInfo(responseInfoObject);
      } catch {
        console.log("error");
      }
    })();
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      setTimeout(() => (firstUpdate.current = false), 500);
      return;
    }

    if (filter === 0) {
      (async () => {
        try {
          let response = await fetch(
            `https://api-d1-test.herokuapp.com/api/journey`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          let responseObject = await response.json();
          setJourneys(responseObject);
        } catch {
          console.log("error");
        }
      })();
    } else {
      (async () => {
        try {
          let response = await fetch(
            `https://api-d1-test.herokuapp.com/api/journey/${filter}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          let responseObject = await response.json();
          setJourneys(responseObject);
        } catch {
          console.log("error");
        }
      })();
    }
  }, [filter]);

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
              value={input}
              onChangeText={(txt) => setInput(txt)}
              onPressRightIcon={() => setInput("")}
              onPressLeftIcon={() => console.log("Buscar")}
            />
            <SearchButton onClick={() => setShowModal(true)}>
              <MdAdd fontSize={20} />
              <p>Nova Jornada</p>
            </SearchButton>
          </SearchContainer>
        </TopBar>

        <JourneyContainer>
          <Journey info={info} filter={filter} setFilter={setFilter} />
        </JourneyContainer>

        <TableContainer>
          <Table journeys={journeys} />
        </TableContainer>
      </PanelContainer>

      <Modal
        closeModal={() => {
          setShowModal(false);
        }}
        showModal={showModal}
      />
    </PanelDiv>
  );
}

export default Panel;
