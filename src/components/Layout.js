import React from "react";
import { Grid, Segment, Sticky } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
const Layout = (props) => {
  const src = "https://arcnems.org/cms/uploads/posts/album/monthy_10_2018/img_0049afb843e6e865a8e2b7b4fac04061.png";
  return (
    <Grid container>
      <Grid.Row>
        <Grid.Column>
            <Image src={src} size="medium" centered className="headerIcon"/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>{props.children}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Layout;
