import React, { CSSProperties } from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
  title: {
    textAlign: "center"
  } as CSSProperties,
  house: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  } as CSSProperties,
};

export class Home extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Typography variant="h2" style={styles.title}>
          My SafeHouse
        </Typography>
        <img src="/house.gif" alt="House" style={styles.house} />
      </React.Fragment>
    );
  }
}
