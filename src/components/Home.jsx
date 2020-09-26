import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function Home() {
  const styles = useStyles();
  return <section className={styles.root}></section>;
}
