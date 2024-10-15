import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Menu } from "../../../components/menu/Menu";
import { SectionTitle } from "../../../components/SectionTitle";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/social_network.png";
import timerImg from "../../../assets/images/timer.png";

const items = ["All", "landing page", "React", "spa"];

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={items} />
      <FlexWrapper justify="space-around">
        <Work
          src={socialImg}
          title="Social Network"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <Work
          src={timerImg}
          title="Timer"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.div`
  min-height: 100vh;
  background-color: #706897;
`;
