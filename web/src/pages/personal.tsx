import React, { CSSProperties } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    fontSize: '20px',
    marginBottom: '10px'
  } as CSSProperties,
  hands: {
    marginLeft: "50%",
    transform: "translateX(-50%)",
    width: '40%',
    marginBottom: '20px'
  } as CSSProperties,
  list:{
    marginLeft: "20px",
    width: '90%',
  } as CSSProperties,
  icon:{
    fontSize: '40px',
    color: '#262642'
  } as CSSProperties
};

export class Personal extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <Typography variant="h2" style={styles.title}>
          Personal Achievements
        </Typography>
        <List style={styles.list}>
          <ListItem>
            <ListItemText
              disableTypography={true}
              style={styles.plaintext}
              primary="You have washed your hands 200 times!"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              disableTypography={true}
              style={styles.plaintext}
              primary="You have called your mum 15 times!"
            />
          </ListItem>
          <ListItem>
            <img src="/disinfector.png" alt="Disinfector" style={styles.hands}/>
          </ListItem>
          <ListItem>
            <ListItemText
              disableTypography={true}
              style={styles.plaintext}
              primary="You are a trooper!"
            />
          </ListItem>
        </List>

      </div>
    );
  }
}
