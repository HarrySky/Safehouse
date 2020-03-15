import React, { CSSProperties } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
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
export class SelfCareTips extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <Typography variant="h2" style={styles.title}>
          Self Care
        </Typography>
        <Typography style={styles.plaintext}>Tips & Tricks</Typography>
        <img src="/soap.png" alt="Soap"  style={styles.hands}/>
        <List style={styles.list}>
          <ListItem>
            <ListItemIcon>
              <CheckOutlinedIcon style={styles.icon}/>
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              primary="Listen to natural sounds, recordings or apps that play ocean waves or rainfall."
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckOutlinedIcon style={styles.icon}/>
            </ListItemIcon>
            <ListItemText
              disableTypography={true}
              primary="You should take a break and limit social media use. The only Toxic vibes you need is from Britney."
            />
          </ListItem>
        </List>
      </div>
    );
  }
}
