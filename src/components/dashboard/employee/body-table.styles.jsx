import styled from "styled-components";

import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";

export const TableWrapper = styled.div`
  width: 100%;
  height: 90%;
  overflow: auto;
  padding: 0 1rem;
`;

export const TableSubWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  overflow: scroll;
`;

export const DeleteIcon = styled(MdDeleteOutline)`
  height: 20px;
  width: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const EditIcon = styled(MdOutlineModeEditOutline)`
  height: 20px;
  width: 20px;

  &:hover {
    cursor: pointer;
  }
`;
