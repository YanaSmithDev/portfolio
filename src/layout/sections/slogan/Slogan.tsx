import styled from "styled-components";
import { Button } from "../../../components/Button";
import { SectionTitle } from "../../../components/SectionTitle";

export const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle>I Am Available For Freelance</SectionTitle>
      <Button>Hire me</Button>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  text-align: center;
  background-color: #1e8888;
`;
