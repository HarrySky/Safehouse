import React, { CSSProperties } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  container: {
    marginLeft: "-10px",
    width: "100%"
  } as CSSProperties,
  house: {
    marginLeft: "50%",
    transform: "translateX(-50%)",
    width: '280px',
    borderRadius: '50%',
    position: "fixed"
  } as CSSProperties,
  progressBackground: {
    color: "#999999",
    width: "280px",
    height: "280px",
    marginLeft: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
    position: "fixed"
  } as CSSProperties,
  progress: {
    width: "280px",
    height: "280px",
    marginLeft: "50%",
    transform: "translateX(-50%) rotate(-90deg)",
    zIndex: 2,
    position: "fixed"
  } as CSSProperties
};

export class House extends React.PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <CircularProgress
          style={styles.progressBackground}
          variant="static"
          value={100}
        />
        <CircularProgress
          style={styles.progress}
          variant="static"
          color="primary"
          value={30}
        />
        <img src="/house.gif" alt="House" style={styles.house} />
      </div>
    );
  }
}
