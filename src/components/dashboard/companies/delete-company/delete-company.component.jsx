import React, { useContext } from "react";

import { deleteCompany } from "../../../../services/company.service";

import { UpdateContext } from "../../../../routes/dashboard/user-dashboard.component";

import {
  CancelIcon,
  CheckmarkIcon,
  ModalContainer,
  SelectSection,
  WarningIcon,
  WarningSection,
  Wrapper,
} from "./delete-company.styles";

const DeleteCompany = ({ setDeleteModal, compData }) => {
  // for display and data to send to server
  const { uuid, companyName } = compData;

  // upon initial success - update data
  const { setUpdate } = useContext(UpdateContext);

  // upon pressing the affirm button
  const handleDeleteConfirm = () => {
    // async delete company using uuid extracted from data
    const runAsyncDelete = async () => {
      let res = await deleteCompany(uuid);
      if (res.status === 204) {
        alert("Successfully Deleted");
        setUpdate("companies");
        setDeleteModal(false);
      }
    };

    runAsyncDelete();
  };
  return (
    <Wrapper className="center-flex">
      <ModalContainer>
        <WarningSection>
          <WarningIcon />
          <h2>Are You Sure?</h2>
        </WarningSection>
        <SelectSection>
          <p>
            You are about to delete data for {companyName}. This cannot be
            undone. Data to be deleted includes:
          </p>
          <ul>
            <li>Training Records</li>
            <li>Inspections</li>
            <li>Machine Safety</li>
            <li>SDS Compliance</li>
          </ul>
          <div className="icon-container__wrapper">
            <button className="icon-container confirm">
              <CheckmarkIcon onClick={handleDeleteConfirm} />
              <h5>Confirm</h5>
            </button>
            <button className="icon-container delete">
              <CancelIcon onClick={() => setDeleteModal(false)} />
              <h5>Cancel</h5>
            </button>
          </div>
        </SelectSection>
      </ModalContainer>
    </Wrapper>
  );
};

export default DeleteCompany;
