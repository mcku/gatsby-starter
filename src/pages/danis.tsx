import * as React from "react";
import { Header, Icon, Grid } from "semantic-ui-react";
import Layout from "../components/layout";

export default () =>
<Layout>
  <Grid centered verticalAlign="middle">
    <Grid.Column>
      <Grid.Row>
        <Icon name="lightbulb" size="huge"/>
        <Header as="h1">Danış page</Header>
        <Header as="h2">Under construction</Header>
      </Grid.Row>
    </Grid.Column>
  </Grid>
</Layout>;
