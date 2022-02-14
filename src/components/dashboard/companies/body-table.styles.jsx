import styled from "styled-components";

import { BiFilter } from "react-icons/bi";

import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";

export const TableWrapper = styled.div`
  width: 100%;
  height: 441px;
  overflow: auto;
  padding: 0 1rem;

  table {
    border-radius: 25px 25px 0 0;
    border-collapse: collapse;
    max-height: 253px;

    thead {
      height: 66px;
    }

    tbody {
      /* height: 325px; */

      tr:nth-child(even) {
        /* background: rgba(169, 185, 209, 0.8); */
        background: #dff1ff;
      }
    }
  }
`;

export const TableSubWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: white;
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
