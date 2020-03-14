import React, { CSSProperties } from 'react';
import Typography from '@material-ui/core/Typography';
import House from 'ui/House';

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

        <House />
      </div>
    );
  }
}
