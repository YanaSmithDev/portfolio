import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
        <Name>Yana</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"instagram"}
                height={"21px"}
                width={"21px"}
                viewBox={"0 0 21 21"}
              />
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"telegram"}
                height={"21px"}
                width={"21px"}
                viewBox={"0 0 21 21"}
              />
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"vk"}
                height={"21px"}
                width={"21px"}
                viewBox={"0 0 21 21"}
              />
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"linkedin"}
                height={"21px"}
                width={"21px"}
                viewBox={"0 0 21 21"}
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #b49a9a;
  min-height: 20vh;
`;

const Name = styled.span``;

const SocialList = styled.ul`
  display: flex;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const Copyright = styled.small``;
