import React, { useRef } from "react";

import { Wrapper, CloseIcon } from "./conduct-modal.styles";

const ConductModal = ({ setConductModal }) => {
  const closeRef = useRef(); //close icon

  const handleCloseClick = (e) => {
    setConductModal(false);
  };

  return (
    <Wrapper className="center-flex">
      <div className="modal">
        <div ref={closeRef} className="icon-container">
          <CloseIcon onClick={handleCloseClick} />
        </div>
      </div>
    </Wrapper>
  );
};

export default ConductModal;
