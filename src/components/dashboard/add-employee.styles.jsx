import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export const Wrapper = styled.div`
  height: calc(100% - 60px);
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  /* background: yellow; */
  position: fixed;
  top: 60px;
  left: 0;

  .modal {
    width: 480px;
    height: 600px;
    background: white;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 1rem;
    overflow-x: scroll;

    .icon-container {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    form {
      height: calc(100% - 50px);
      display: flex;
      flex-direction: column;
      align-items: center;

      .form-title {
        height: 50px;
        width: 100%;
      }

      .form-body {
        width: 100%;
        background: #b4c2b8;
        overflow: scroll;
        border: 1px solid black;
        height: 75%;
        padding: 1rem;

        .employee {
          margin: 2rem 0;
        }

        .form-item {
          width: auto;

          &.index {
            display: inline-block;
            width: 100%;
            position: relative;
            display: flex;
            justify-content: center;
            margin-bottom: 0.5rem;

            &:before {
              content: "";
              position: absolute;
              top: calc(50% - 1px);
              left: 0;
              height: 2px;
              width: 40%;
              background: blue;
            }

            &:after {
              content: "";
              position: absolute;
              top: calc(50% - 1px);
              right: 0;
              height: 2px;
              width: 40%;
              background: blue;
            }
          }

          &.form-input {
            display: flex;
            align-items: center;
            margin: 0.5rem 0;
          }

          &.edit {
            display: flex;
            width: auto;
            justify-content: space-evenly;
          }

          label {
            width: 25%;
          }

          input {
            color: blue;
            height: 36px;
            font-size: 150%;
            width: 65%;
          }

          .add-btn {
            width: 100px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 5px;
            border: 1px solid blue;
            border-radius: 15px;
            background: #fff;

            &:hover {
              cursor: pointer;
            }
          }

          .submit {
            padding: 0.5rem;
            width: 84px;
            background: white;
            border: blue;
            border-radius: 25px;

            &:hover {
              cursor: pointer;
              background: #eee;
            }
          }
        }
      }
    }
  }
`;

export const CloseIcon = styled(GrClose)`
  height: 25px;
  width: 25px;

  &:hover {
    cursor: pointer;
  }
`;

export const AddSign = styled(AiOutlinePlusCircle)`
  height: 20px;
  width: 20px;
  color: green;
  margin: 0rem 0.5rem 0 0;

  &:hover {
    cursor: pointer;
  }
`;

export const MinusSign = styled(AiOutlineMinusCircle)`
  height: 20px;
  width: 20px;
  color: red;
  margin: 0rem 0.5rem 0 0;

  &:hover {
    cursor: pointer;
  }
`;
