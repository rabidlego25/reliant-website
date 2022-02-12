import React, { useState } from "react";

import { MenuWrapper, AddIcon, InspectIcon } from "./feature-menu.styles";

import AddModal from "./add-company/add-company.component";

const FeatureMenu = () => {
  const [addModal, setAddModal] = useState(false);

  const handleAddClick = () => {
    console.log("handleAddClick");
    setAddModal(true);
  };

  return (
    <MenuWrapper>
      <div className="btn-modal-container">
        <button onClick={handleAddClick}>
          <AddIcon />
          <h3>Add Client</h3>
        </button>
        <button>
          <InspectIcon />
          <h3>Conduct Inspection</h3>
        </button>
      </div>
      {addModal ? <AddModal setModal={setAddModal} /> : null}
    </MenuWrapper>
  );
};

export default FeatureMenu;
