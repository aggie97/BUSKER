import styled from "@emotion/styled";
import {
  boxShadow,
  breakPoints,
  stylePrimaryColor,
} from "../../../../commons/styles/globalStyles";

export const buttonStyle = {
  borderBottom: "none",
  borderRadius: "0px",
};

export const Wrapper = styled.div`
  max-width: 1200px;
  @media ${breakPoints.mobile} {
    padding: 0 10px;
  }

  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const Left = styled.div`
  position: sticky;
  top: 10rem;
  flex: 1.5;
  border: 1px solid black;
  box-shadow: ${boxShadow};
  border-radius: 1rem;
  padding: 1rem;
`;

export const ImageBox = styled.div`
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChangeImageButton = styled.div`
  width: 100%;
  text-align: center;
`;

export const Right = styled.div`
  flex: 3;
  border: 1px solid red;
  height: 150vh;
`;

export const Contents = styled.div`
  @media ${breakPoints.desktop} {
    padding: 3rem 5rem;
  }
  @media ${breakPoints.tablet} {
    padding: 2rem 4.5rem;
  }
  @media ${breakPoints.mobile} {
    padding: 1rem 0.5rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  @media ${breakPoints.mobile} {
    justify-content: center;
  }
`;

export const UserName = styled.span`
  font-size: 1.5em;
`;

export const ButtonBox = styled.div`
  display: flex;
  padding-top: 2.5rem;
  flex-wrap: wrap;
  align-items: center;

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
    justify-content: center;
  }
`;

export const MyPickBox = styled.div``;
export const PickComment = styled.h2`
  font-size: 2rem;
  & > span {
    font-size: 2rem;
    color: ${stylePrimaryColor};
  }
`;

export const PickedArtistBox = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 500px;
  min-width: 200px;
`;

export const PickedArtistLi = styled.li`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    font-size: 1.4rem;
  }
  cursor: pointer;
  transition: all ease 0.2s;
  border-radius: 5px;
`;

export const PickedArtistProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PickedArtistName = styled.span`
  font-size: 1.4rem;
`;

export const MyDetailEditBox = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;
export const FormBox = styled.div`
  width: 100%;
  min-width: 375px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  font-size: 1.3rem;

  span {
    font-size: 1.3rem;
  }

  button {
    width: 100px;
    height: fit-content;
  }

  @media ${breakPoints.mobile} {
    min-width: 100%;
    gap: 5px;
  }
`;

export const ButtonBoxEdit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
`;

export const StyledInput = styled.input`
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
`;
