import styled from "styled-components";

import { BiFilter } from "react-icons/bi";

import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";

export const TableWrapper = styled.div`
  width: 100%;
  height: auto;
  background: orange;
`;

export const FilterIcon = styled(BiFilter)`
  height: 25px;
  width: 25px;

  &:hover {
    cursor: pointer;
  }
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
