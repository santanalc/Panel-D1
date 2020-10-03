import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  BackdropDiv,
  ButtonCancel,
  ButtonContinue,
  InfoInputModal,
  InfoModal,
  InputModal,
  ModalDiv,
  ModalTile,
} from "./styles";
import { Buttons } from "../StyledInput/StyledInput";

interface Props {
  showModal: boolean;
  closeModal: Function;
}

const BackdropAnimation = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const ModalAnimation = {
  hidden: { y: "30vh", opacity: 0 },
  visible: {
    y: "30vh",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

export default function Modal(props: Props) {
  return (
    <AnimatePresence>
      {props.showModal && (
        <BackdropDiv
          onClick={() => {}}
          variants={BackdropAnimation}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <ModalDiv variants={ModalAnimation}>
            <ModalTile>Nova Jornada</ModalTile>

            <InfoModal>
              Dê um <strong>nome </strong> para essa Jornada
            </InfoModal>
            <InputModal />
            <InfoInputModal>
              Você poderá alterar essa informação depois.
            </InfoInputModal>
            <Buttons>
              <ButtonContinue
                onClick={() => {
                  props.closeModal();
                }}
              >
                Continuar
              </ButtonContinue>
              <ButtonCancel
                onClick={() => {
                  props.closeModal();
                }}
              >
                Cancelar
              </ButtonCancel>
            </Buttons>
          </ModalDiv>
        </BackdropDiv>
      )}
    </AnimatePresence>
  );
}
