import styled from "@emotion/styled";
import {
  breakPoints,
  stylePrimaryColor,
  styleSecondColor,
} from "../../../commons/styles/globalStyles";

export const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;

  @media ${breakPoints.tablet} {
    padding: 0 2rem;
  }
  @media ${breakPoints.mobile} {
    padding: 0 1rem;
  }
`;

export const Title = styled.span`
  display: block;
  font-size: 2.5rem;
  padding: 2rem 1rem;

  & > span {
    font-size: 2.5rem;
    color: ${styleSecondColor};
  }

  @media ${breakPoints.mobile} {
    font-size: 2rem;
    & > span {
      font-size: 2rem;
    }
  }
`;

export const TopDaesungSolGD = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5%;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const ContentBox = styled.div`
  width: 35%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media ${breakPoints.mobile} {
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
`;

export const ArtistInfoBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  @media ${breakPoints.tablet} {
    gap: 5px;
  }
  @media ${breakPoints.mobile} {
    min-width: 100px;
  }
`;

export const ArtistName = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 0;
  cursor: pointer;
`;

export const Contents = styled.p`
  font-size: 1.5rem;
  margin: 0;
  padding: 1rem;
  margin-top: 2rem;
  background-color: #eee;
  border-radius: 1rem;
  word-break: keep-all;
  overflow: auto;
  @media ${breakPoints.mobile} {
    margin: 0;
  }
`;

export const Genre = styled.span`
  font-size: 2rem;
  padding: 0.5rem 2rem;

  & > span {
    font-size: 2rem;
    color: ${styleSecondColor};
  }

  background-color: ${stylePrimaryColor};
  border-radius: 50px;
  color: white;

  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
  }
`;

export const KakaoBox = styled.div`
  width: 100%;
  height: 400px;
`;

export const ControllBox = styled.div`
  position: absolute;
  right: 0;
  top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  * {
    font-size: 2rem;
    cursor: pointer;
  }

  & > span:nth-of-type(1) {
    :hover {
      color: green;
    }
  }
  & > span:nth-of-type(2) {
    :hover {
      color: red;
    }
  }

  @media ${breakPoints.mobile} {
    right: 20px;
  }
`;
