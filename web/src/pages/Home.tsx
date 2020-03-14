import React, { CSSProperties } from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
  title: {
    textAlign: "center",
    fontFamily: "Lato",
    fontWeight: 700,
    fontSize: '32px',
    color: '#262642',
    marginTop: '100px',
    marginBottom: '30px',
  } as CSSProperties,
  house: {
    marginLeft: "50%",
    transform: "translateX(-50%)",
    width: '370px'
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
