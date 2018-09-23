import Link from "gatsby-link";
import * as React from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import { Segment, Icon, Container, Sidebar, Button } from "semantic-ui-react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import { Provider } from "react-redux";
import { store } from "../store";

export const menuItems = [
   { name: "Blog Ana Sayfa", path: "/", exact: true, icon: "home" },
   { name: "Makaleler", path: "/blog/", exact: false, icon: "newspaper" },
];

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

export default class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  render() {
    const { pathname } = this.props.location;

    return (
      <Provider store={store}>
        <Sidebar.Pushable as={Segment}>

          <SidebarMenu Link={Link} pathname={pathname} items={menuItems} visible={false} />

          <Sidebar.Pusher style={{ minHeight: "100vh" }}>
            {/* Header */}
            <HeaderMenu
              Link={Link}
              pathname={pathname}
              items={menuItems}
            />

            {/* Render children pages */}
            <div style={{ paddingBottom: 60 }}>
              {this.props.children}
            </div>

            {/* Footer */}
            <Segment inverted vertical style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <Container textAlign="center">
                <p>Gatsby 1.0 <Icon name="heart" /> ile güçlendirildi</p>
              </Container>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Provider>
    );
  }
}
