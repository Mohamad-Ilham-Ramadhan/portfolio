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
      "& span:nth-child(3n+1)": {
        color: "hsl(208, 100%, 74%)",
      },
      "& span:nth-child(3n+2)": {
        color: "hsl(323, 100%, 74%)",
      },
      "& span:nth-child(3n+3)": {
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

export default function CardProject({
  className,
  img,
  to = "",
  title,
  description,
  tags,
}) {
  const styles = useStyles();
  return (
    <Paper className={clsx(styles.project, className)} elevation={4}>
      <Link to={`/project-detail/${to}`}>
        <img className="project-img" src={img} alt="" />
        <div className="project-body">
          <div className="project-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Typography component="h4" className="project-title">
            {title}
          </Typography>
          {/* <Typography className="project-desc">{description}</Typography> */}
        </div>
      </Link>
    </Paper>
  );
}
