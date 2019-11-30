import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import { Call, DirectionsRun, Android } from "@material-ui/icons";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Roll20? Troll20 Compared to Basket</h2>
            <h5 className={classes.description}>
              Basket is a sweeping assortment of tools for crafting a D&D campaign
              that you'll never forget.
              Map building, character creation, dice rolling, audio/video calls and much more
              all in the same place.
              Weaved together for a seamless experience that lets you dive right into the fun.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Characters"
                description="Bring your latest persona to life directly in Basket. Manage characters and your lore with no hassle. Forgot your Str stat? Our shortcut commands allow you to easily retrieve character information too."
                icon={DirectionsRun}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Comms"
                description="Crystal clear audio calls and reliable instant messaging. DM doesn't believe your spell is real? Our text channels allow for easy sharing, storing and creation of all your OP details"
                icon={Call}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Bots"
                description="Playing online doesn't need to mean less immersion. Use our smart bots in your server for adding music to set the scene, program NPCs, random events and more."
                icon={Android}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
