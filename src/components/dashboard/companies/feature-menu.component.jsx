import React, { useState } from "react";

import { MenuWrapper, CompAdd } from "./feature-menu.styles";

import AddModal from "./add-company/add-company.component";

const FeatureMenu = () => {
  const [addModal, setAddModal] = useState(true);

  const handleAddClick = () => {
    console.log("handleAddClick");
    setAddModal(true);
  };

  return (
    <MenuWrapper>
      <div className="btn-modal-container">
        <button onClick={handleAddClick}>
          <CompAdd />
          <h3>Add Client</h3>
        </button>
      </div>
      {addModal ? <AddModal setModal={setAddModal} /> : null}
    </MenuWrapper>
  );
};

export default FeatureMenu;
