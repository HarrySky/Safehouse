import React, { CSSProperties } from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
  title: {
    textAlign: "center"
  } as CSSProperties,
  house: {
    marginLeft: "50%",
    transform: "translateX(-50%)"
  } as CSSProperties,
  page: {
    overflow: "hidden",
    padding: "10px"
  } as CSSProperties
};

export class Home extends React.PureComponent {
  render() {
    return (
      <div style={styles.page}>
        <Typography variant="h2" style={styles.title}>
          My SafeHouse
        </Typography>
        <img src="/house.gif" alt="House" style={styles.house} />
      </div>
    );
  }
}
