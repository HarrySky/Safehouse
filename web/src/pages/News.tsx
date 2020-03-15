import React, { CSSProperties } from 'react';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

const styles = {
  page: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    paddingBottom: "100px"
  } as CSSProperties,
  title: {
    textAlign: "center",
    fontFamily: "Lato",
    fontWeight: 700,
    fontSize: '32px',
    color: '#262642',
    marginTop: '40px',
    marginBottom: '20px',
  } as CSSProperties,
  statsPaper: {
    width: "250px",
    height: "120px",
    padding: "20px",
    marginLeft: "50%",
    transform: "translateX(-50%)",
    textAlign: "center"
  } as CSSProperties,
  newsPaper: {
    width: "80%",
    padding: "20px",
    marginLeft: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    flexGrow : 1
  } as CSSProperties
};

export class News extends React.PureComponent {
  render() {
    return (
      <div style={styles.page}>
        <Typography variant="h2" style={styles.title}>
          Recovery Stats
        </Typography>

        <Paper style={styles.statsPaper}>
          Stats
        </Paper>

        <Typography variant="h2" style={styles.title}>
          Latest News
        </Typography>

        <Paper style={styles.newsPaper}>
          News
        </Paper>
      </div>
    );
  }
}