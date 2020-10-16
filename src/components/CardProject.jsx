import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  project: {
    color: "white",
    textAlign: "left",
    backgroundColor: theme.palette.neutral.darkBlueGrayishLighter,
    overflow: "hidden",
    borderRadius: 8,
    cursor: "pointer",
    "&:hover": {
      "& .project-img": {
        transform: "scale(1.05)",
      },
    },
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
    "& .project-img": {
      transition: "300ms",
      width: "100%",
      display: "block",
    },
    "& .project-body": {
      padding: [24, 32, 40],
    },
    "& .project-tags": {
      marginBottom: 8,
      fontWeight: 700,
      "& span": {
        marginRight: 8,
      },
      "& span:nth-child(1)": {
        color: "hsl(208, 100%, 74%)",
      },
      "& span:nth-child(2)": {
        color: "hsl(323, 100%, 74%)",
      },
      "& span:nth-child(3)": {
        color: "hsl(159, 100%, 74%)",
      },
    },
    "& .project-title": {
      fontSize: "1.25rem",
      marginBottom: 16,
    },
    "& .project-desc": {
      fontSize: ".8rem",
      fontWeight: 500,
      color: "#b5b5b5",
    },
  },
}));

export default function CardProject({ className, img }) {
  const styles = useStyles();
  return (
    <Paper className={clsx(styles.project, className)} elevation={4}>
      <Link to="/project-detail">
        <img className="project-img" src={img} alt="" />
        <div className="project-body">
          <div className="project-tags">
            <span>ReactJS</span>
            <span>API</span>
            <span>Layout</span>
          </div>
          <Typography component="h4" className="project-title">
            Huddle landing page with curved sections
          </Typography>
          <Typography className="project-desc">
            This project is more emphaize in layout skills
          </Typography>
        </div>
      </Link>
    </Paper>
  );
}
