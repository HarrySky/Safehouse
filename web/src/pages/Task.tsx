import React, { CSSProperties } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import LinearProgress from '@material-ui/core/LinearProgress';
import Checkbox from '@material-ui/core/Checkbox';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

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
    marginBottom: '10px'
  } as CSSProperties,
  page: {
    overflow: "hidden",
    padding: "10px"
  } as CSSProperties,
  progress:
  {
    width: "70%",
    marginLeft: "15%",
    marginBottom: '30px',
    boxShadow: ' 2px 2px 2px 8px #EBE1DF',
    borderRadius: '12px',
  } as CSSProperties,
  list:{
    fontFamily: "Lato",
    fontSize: '32px',
    marginLeft: "15%",
    marginRight: '20px',
  } as CSSProperties,
  checkbox:{
    borderRadius: 3,
    width: 30,
    height: 30,
    boxShadow: '1px 1px 3px 2px #CDC7D7',
  } as CSSProperties,
  button: {
    marginLeft: "40%",
    boxShadow: '1px 1px 3px 2px #CDC7D7',
  } as CSSProperties,
  textButton:{
    position: 'fixed',
    bottom: '11%',
    right: '5%',
    boxShadow: '1px 1px 3px 2px #CDC7D7'
  } as CSSProperties,
  relative:{
    position: 'relative'
  } as CSSProperties
};

export class Task extends React.PureComponent<Props> {
  render() {
    return (
      <div>
      <Typography variant="h2" style={styles.title}>
        Personal Hygiene
      </Typography>
      <div style={styles.plaintext}>Tasks</div>
      <div style={styles.progress}>
        <LinearProgress
          variant="determinate"
          color="primary"
          value={30}
        />
        </div>
      <img src="/soap.png" style={styles.hands}/>
        <List style={styles.list}>
          <ListItem>
            <ListItemIcon>
              <Checkbox style={styles.checkbox} />
            </ListItemIcon>
            <ListItemText disableTypography='true' primary='Wash hands' />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Checkbox style={styles.checkbox}/>
            </ListItemIcon>
            <ListItemText disableTypography='true' primary='Use sanitizer' />
          </ListItem>
        </List>
        <IconButton style={styles.button}>
          <AddOutlinedIcon fontSize="large" />
        </IconButton>
        <div style={styles.relative}>
        <Button size="small" style={styles.textButton}>
          Tips & Tricks >>
        </Button>
        </div>
      </div>
    );
  }
}
