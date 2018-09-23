import * as React from "react";
import { Button, Header, Icon, Grid } from "semantic-ui-react";
import Link from "gatsby-link";
import Layout from "../components/layout";
import DanismakIsterMisin from "../components/DanismakIsterMisin/DanismakIsterMisin";

export default () =>
<Layout>
  <Grid centered verticalAlign="middle"
    style={{
      minHeight: "700px",
      }}
    >
    <Grid.Column>
      <Grid.Row style={{textAlign: "center"}}>
        <Icon name="marker" size="huge"/>
        <Header as="h1">Aradığınız adres bulunamadı!</Header>
        <p>Makalelere göz atın <Icon name="hand right outline" size="huge"/><Button color="orange" as={Link} to="/blog">
            Hemen okumaya başla</Button> 
            </p>
            <DanismakIsterMisin />
                  </Grid.Row>
    </Grid.Column>
  </Grid>
</Layout>;
