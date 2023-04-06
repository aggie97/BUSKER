import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { sidebarState } from "../../../../commons/store";
import {
  breakPoints,
  stylePrimaryColor,
} from "../../../../commons/styles/globalStyles";
import Logo from "../../logo";
import { useEffect, useState } from "react";

interface IStyle {
  isSidebarOpen: boolean;
  scroll: number;
}

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useRecoilState(sidebarState);
  const [scrollTop, setScrollTop] = useState(0);
  let lastScroll = 0;
  const onOpenMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScrollTop = () => {
      const std = window.scrollY || document.documentElement.scrollTop;

      if (std > lastScroll) {
        console.log("scroll down");
        setScrollTop((prev) =>
          prev >= -80 ? (prev -= std - lastScroll) : -80
        );
      } else if (std < lastScroll) {
        console.log("scroll up");
        setScrollTop((prev) => (prev < 0 ? (prev += lastScroll - std) : 0));
      }
      lastScroll = std <= 0 ? 0 : std;
    };

    window.addEventListener("scroll", handleScrollTop);

    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);
  console.log(scrollTop);
  return (
    <div>
      {router.asPath !== "/" && <HeaderDiv></HeaderDiv>}
      <Wrapper scroll={scrollTop} isSidebarOpen={isOpen}>
        <HeaderBox>
          <Logo />
          <Menu>
            <MenuButton onClick={onOpenMenu}>
              {new Array(3).fill(0).map((_, index) => (
                <span
                  key={index}
                  className={`bar f ${isOpen ? "isClicked" : ""} ${
                    router.asPath === "/" ? "isHome" : ""
                  }`}
                ></span>
              ))}
            </MenuButton>
          </Menu>
        </HeaderBox>
      </Wrapper>
    </div>
  );
};

export default Header;

export const HeaderDiv = styled.div`
  width: 100%;
  height: 80px;
  @media ${breakPoints.mobile} {
    height: 50px;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  top: ${(props: IStyle) => props.scroll}px;
  width: 100vw;
  height: 80px;
  z-index: 100;
  @media ${breakPoints.mobile} {
    height: 50px;
  }
  transition: background-color 0.5s ease-in-out;
  background-color: ${(props: IStyle) =>
    props.isSidebarOpen ? "transparent" : stylePrimaryColor};
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  position: relative;
  top: 0;
  width: 80px;
  padding: 1em;
  padding-right: 50px;
  @media ${breakPoints.mobile} {
    padding-right: 0px;
    width: 70px;
  }
  z-index: 3;
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  .bar {
    position: relative;
    display: block;
    width: 30px;
    height: 5px;
    background: black;
    border-radius: 5px;
    transition: 0.3s;
  }

  .bar.isClicked {
    background: white;
  }

  .bar:nth-of-type(1).isClicked {
    transform: translateY(10px) rotate(45deg) scaleX(1.2);
  }

  .bar:nth-of-type(2).isClicked {
    transform: scale(0);
  }

  .bar:nth-of-type(3).isClicked {
    transform: translateY(-10px) rotate(-45deg) scaleX(1.2);
  }

  .bar.isHome {
    background-color: white;
  }
`;
