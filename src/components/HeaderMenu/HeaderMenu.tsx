import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleSidebar } from "../../store";
import { Container, Label, Menu, Icon, Image, Segment } from "semantic-ui-react";
import { MenuProps } from "../Menu";
const reconLogo = require("../../assets/reconLogoTr2018.png");

interface HeaderMenuProps extends MenuProps {
  dispatch?: Dispatch<any>;
  inverted?: boolean;
}

export const HeaderMenu = ({ items, pathname, Link, inverted, dispatch }: HeaderMenuProps) =>
  <Container>
          <Menu size="large" pointing secondary inverted={inverted}>
          <Container className="mobile only">
            <Menu.Item as="a"  onClick={() => dispatch && dispatch(toggleSidebar())} >
              <Icon name="sidebar" />
              <Image src={reconLogo}  size="medium" spaced="left"/>
            </Menu.Item>
          </Container>
          <Container className="mobile hidden">
              <Image wrapped src={reconLogo} size="large"  />
              {items.map((item) => {
                      const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
                      return <Menu.Item as= { Link }
                      name={item.name}
                      to={item.path}
                      key={item.path}
                      active={active}
                    />;
              })}
          </Container>
    </Menu>
  </Container>;

export default connect()(HeaderMenu);
