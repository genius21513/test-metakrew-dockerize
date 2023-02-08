import React from "react";
import { Card, Container } from "theme-ui";

export const Modal: React.FC = ({ children }) => (
  <Container variant="layout.components.modalOverlay">
    <Container variant="layout.components.modal">
      {children}
    </Container>
  </Container>
);

export const InformationModal: React.FC = ({ children }) => (
  <Container variant="modalOverlay">
    <Container variant="informationmodal-container">
      <Card
        sx={{
          bg: "white",
          margin: '0 auto'
        }}
        className={"informationmodal-container"}
      >
        {children}
      </Card>
    </Container>
  </Container>
);
