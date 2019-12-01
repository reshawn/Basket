import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";

class SectionTabs extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
                <div className={classes.container}>
                    <div id="nav-tabs">
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h3>
                                    <small>Summary</small>
                                </h3>
                                <CustomTabs
                                    headerColor="primary"
                                    tabs={[
                                        {
                                            tabName: "Profile",
                                            tabIcon: Face,
                                            tabContent: (
                                                <p className={classes.textCenter}>
                                                    
                                                    <ul>
                                                        <li>Current Subscription - <strong>Basic</strong></li>
                                                        <li>Servers Joined  - <strong>2</strong></li>
                                                        <li>Maps Created - <strong>2</strong></li>
                                                        <li>Sold Campaigns - <strong>0</strong> </li>
                                                        <li>Community Points - <strong>499</strong></li>
                                                    </ul>
                        </p>
                                            )
                                        },
                                        {
                                            tabName: "Messages",
                                            tabIcon: Chat,
                                            tabContent: (
                                                <p className={classes.textCenter}>
                                                    There are no messages to view at this time.
                        </p>
                                            )
                                        },
                                        {
                                            tabName: "Settings",
                                            tabIcon: Build,
                                            tabContent: (
                                                <p className={classes.textCenter}>
                                                    Currently under maintenance.
                        </p>
                                            )
                                        }
                                    ]}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <h3>
                                    <small>New</small>
                                </h3>
                                <CustomTabs
                                    plainTabs
                                    headerColor="danger"
                                    tabs={[
                                        {
                                            tabName: "Home",
                                            tabContent: (
                                                <p className={classes.textCenter}>
                                                    Invite your friends and play D&D Campaigns. Make Maps
                                                    to enrich your Campaign experience.
                        </p>
                                            )
                                        },
                                        {
                                            tabName: "Updates",
                                            tabContent: (
                                                <p className={classes.textCenter}>
                                                    <ul>
                                                        <li>Added custom audio options</li>
                                                        <li>Can now import character sheets from other site</li>
                                                    </ul>
                        </p>
                                            )
                                        },
                                      
                                    ]}
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(tabsStyle)(SectionTabs);