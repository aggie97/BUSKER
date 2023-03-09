import styled from "@emotion/styled";
import { Modal } from "antd";
import {
  breakPoints,
  stylePrimaryColor,
} from "../../../commons/styles/globalStyles";

export const AddTeamInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid ${stylePrimaryColor};
  border-radius: 10px;
  margin: 20px 0;
  padding: 10px;
  width: 70%;
  max-width: 600px;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
    }
  }
`;

export const MemberImgBtn = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2.5rem;
  border-radius: 100px;
  background-color: #ccc;
  width: 50px;
  height: 50px;
  aspect-ratio: 1/1;
`;

export const MemberTextStyle = styled.div`
  font-size: 1.5rem;
  width: 40%;
  padding-left: 10px;
`;

export const EventBtn = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 1.5rem;
  font-weight: 600;
  font-size: 1.7rem;
  cursor: pointer;
  color: white;
  background: ${stylePrimaryColor};
  border: 1px solid ${stylePrimaryColor};
`;

export const EventModal = styled(Modal)``;

export const FileInput = styled.input`
  display: none;
`;

export const AddBtn = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 1.5rem;
  font-weight: 600;
  font-size: 1.7rem;
  cursor: pointer;
  color: white;
  background: ${stylePrimaryColor};
  border: 1px solid ${stylePrimaryColor};
`;
