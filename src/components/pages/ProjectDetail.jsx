import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import waveImg from "../../images/wave.svg";
import Heading from "../Heading";
import NavbarTop from "../NavbarTop";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 100,
    paddingRight: 100,
  },
  navbar: {
    marginBottom: 72,
  },
  heading: {
    marginBottom: 72,
  },
  title: {
    fontSize: "4.5rem",
    fontWeight: 700,
  },
}));

export default function ProjectDetail() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <NavbarTop className={styles.navbar} />
      <Heading className={styles.heading}>Shortly</Heading>
      <Grid container>
        <Grid item xs={6}>
          <Typography className={styles.title} variant="h2">
            URL API Landing Page
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
}
