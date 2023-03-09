import styled from "@emotion/styled";
import {
  boxShadow,
  breakPoints,
  styleSecondColor,
} from "../../../commons/styles/globalStyles";

export const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  @media ${breakPoints.mobile} {
    padding: 0 20px;
  }
  padding-bottom: 100px;

  @media ${breakPoints.tablet} {
    padding: 0 30px;
  }
`;

export const CommonTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: ${styleSecondColor};
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const SummaryInfo = styled.div`
  position: relative;
  span * {
    font-size: 3rem;
  }
`;

export const TypingIntro = styled.div`
  width: fit-content;
  .typewriter span {
    display: block;
    font-size: 2rem;
    color: #222;
    font-family: monospace;
    overflow: hidden;
    border-right: 0.15rem solid orange;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.2em;
  }

  .typewriter span:nth-of-type(1) {
    width: fit-content;
    margin: 0;
    animation: typing1 3.5s steps(30, end),
      blink-caret 0.5s step-end infinite alternate;
    animation-fill-mode: forwards;
  }

  .typewriter span:nth-of-type(2) {
    opacity: 0;
    width: fit-content;
    animation: typing2 3.5s steps(30, end),
      blink-caret 0.5s step-end infinite alternate;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
  }

  strong {
    font-size: 2.5rem;
    font-family: monospace;
    color: ${styleSecondColor};
  }

  /* The typing effect */
  @keyframes typing1 {
    0% {
      width: 0;
    }
    99% {
      border-right: 0.15rem solid ${styleSecondColor};
      width: 100%;
    }
    100% {
      border: none;
    }
  }

  @keyframes typing2 {
    0% {
      width: 0;
      opacity: 1;
    }

    to {
      opacity: 1;
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${styleSecondColor};
    }
  }

  @media ${breakPoints.mobile} {
    .typewriter span {
      font-size: 1.5rem;
    }
    span {
      font-size: 1.8rem;
    }

    @keyframes typing2 {
      0% {
        width: 0;
        opacity: 1;
      }

      to {
        opacity: 1;
        width: 100%;
      }
    }
  }
`;

export const ArtistContents = styled.div`
  display: flex;
  width: 100%;
`;

export const ArtistContentsLeft = styled.div`
  width: 68.3333%;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ArtistIntro = styled.p`
  font-size: 2rem;
  width: 100%;
  word-wrap: break-word;
  word-break: keep-all;
  @media ${breakPoints.mobile} {
    font-size: 1.8rem;
  }
`;

export const TeamMemberBox = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;
  gap: 20px;
  padding: 1rem;
  border: 1px solid #9900ff;
  border-radius: 30px;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;

export const Member = styled.li`
  width: 100%;
  flex: 1;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;

  * {
    font-size: 1.5rem;
  }

  @media ${breakPoints.mobile} {
    flex-direction: row;
    gap: 20px;
  }
`;

export const ArtistContentsRight = styled.div`
  width: 26.3333%;
  margin-left: 5.333%;
  @media ${breakPoints.mobile} {
    width: 100%;
    margin: 0;
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;

export const StickyBox = styled.div`
  position: sticky;
  top: 50px;
  width: 100%;

  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: ${boxShadow};

  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${breakPoints.mobile} {
    position: static;
    height: 80px;
    border-top: 1px solid #ddd;
    border-radius: 0px;
    padding: 0;
    box-shadow: none;
    background-color: white;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & button {
      min-width: 80px;
    }
  }
`;

export const RecentArts = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const RecentArt = styled.div`
  flex: 1;
  max-width: 360px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  word-break: keep-all;
  cursor: pointer;
`;

export const RecentImageBox = styled.div`
  width: 100%;
  aspect-ratio: 1.2 / 1;
  border-radius: 15px;
  overflow: hidden;
`;

export const RecentInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;

  * span {
    font-size: 1.2rem;
  }
`;

export const RecentImage = styled.img`
  width: 100%;
  height: 100%;
`;
