import React, { CSSProperties } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';

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
  } as CSSProperties,
  page: {
    overflow: "hidden",
    padding: "10px"
  } as CSSProperties,
  list:{
    fontFamily: "Lato",
    fontSize: '18px',
    marginLeft: '30px',
    marginRight: '20px',
  } as CSSProperties,
  icon:{
    fontSize: '40px',
    color: '#262642'
  } as CSSProperties
};

export class Tips extends React.PureComponent<Props> {
  render() {
    return (
      <div>
      <Typography variant="h2" style={styles.title}>
        Personal Hygiene
      </Typography>
      <div style={styles.plaintext}>Tips & Tricks</div>
      <img src="/soap.png" alt="House"  style={styles.hands}/>
      <List style={styles.list}>
        <ListItem>
          <ListItemIcon>
            <CheckOutlinedIcon style={styles.icon}/>
          </ListItemIcon>
          <ListItemText disableTypography='true' primary="Do not touch your face & eyes & nose. Or anyone else’s"/>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckOutlinedIcon style={styles.icon}/>
          </ListItemIcon>
          <ListItemText disableTypography='true' primary="Use alcohol-based (>60%) hand sanitizer. Do not drink it"/>
        </ListItem>
      </List>
      </div>
    );
  }
}
