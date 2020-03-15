import React, { CSSProperties } from 'react';
import Typography from '@material-ui/core/Typography';


interface Props {
  match: { params: {taskId: number} };
}

const styles = {
  title: {
    textAlign: "center",
    fontFamily: "Lato",
    fontWeight: 700,
    fontSize: '32px',
    color: '#262642',
    marginTop: '25px',
    marginBottom: '10px'
  } as CSSProperties,
  plaintext:{
    textAlign: "center",
    fontFamily: "Lato",
    fontSize: '32px',
    marginBottom: '20px'
  } as CSSProperties,
  hands: {
    marginLeft: "50%",
    transform: "translateX(-50%)",
    width: '100px',
    borderStyle: 'solid',
    borderRadius: '12px',
    boxShadow: ' 2px 2px 2px 3px #CDC7D7',
    marginBottom: '20px'
  } as CSSProperties
};

export class Task extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <Typography variant="h2" style={styles.title}>
          Personal Hygiene
        </Typography>
        <Typography style={styles.plaintext}>Tasks</Typography>

        <img src="/soap.png" alt="Soap"  style={styles.hands}/>
      </div>
    );
  }
}
