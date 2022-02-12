import styled from "styled-components";

import { BiFilter } from "react-icons/bi";

import { MdDeleteOutline } from "react-icons/md";

export const TableWrapper = styled.div`
  width: auto;
  height: 100%;
  background: orange;
  overflow: scroll;
`;

export const FilterIcon = styled(BiFilter)`
  height: 25px;
  width: 25px;

  &:hover {
    cursor: pointer;
  }
`;

export const DeleteIcon = styled(MdDeleteOutline)`
  height: 25px;
  width: 25px;

  &:hover {
    cursor: pointer;
  }
`;
