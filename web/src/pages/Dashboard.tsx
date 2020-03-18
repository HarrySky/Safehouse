import React, { CSSProperties } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';

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
    width: '50px',
    border: 'solid',
    borderWidth: '1.5px',
    borderColor:'#262642',
    borderRadius: '6px',
    boxShadow: ' 1px 2px 2px 3px #CDC7D7',
    marginBottom: '10px'
  } as CSSProperties,
  page: {
    overflow: "hidden",
    padding: "10px"
  } as CSSProperties,
  list:{
    fontFamily: "Lato",
    fontSize: '20px',
    marginLeft: "15%",
    marginRight: '20px',
  } as CSSProperties
};

export class Dashboard extends React.PureComponent {
  render() {
    return (
      <div>
      <Typography variant="h2" style={styles.title}>
        Task Manager
      </Typography>

      <List style={styles.list}>
        <ListItem>
          <IconButton>
            <img src="/soap.png" alt="Soap"  style={styles.hands}/>
          </IconButton>
          <a href="/task/personalHygiene">
          <ListItemText
            disableTypography={true}
            primary="Personal hygiene"
          >
            <LinearProgress
              variant="determinate"
              color="primary"
              value={30}
            />
          </ListItemText>
          </a>
        </ListItem>
        <ListItem>
          <IconButton>
            <img src="/cleaning.png" alt="Soap"  style={styles.hands}/>
          </IconButton>
          <ListItemText
            disableTypography={true}
            primary="Household Hygiene"
          />
        </ListItem>
        <ListItem>
          <IconButton>
            <img src="/relationship.png" alt="Soap"  style={styles.hands}/>
          </IconButton>
          <ListItemText
            disableTypography={true}
            primary="Personal contact"
          />
        </ListItem>
        <ListItem>
          <IconButton>
            <img src="/brain.png" alt="Soap"  style={styles.hands}/>
          </IconButton>
          <ListItemText
            disableTypography={true}
            primary="Stay motivated"
          />
        </ListItem>
        <ListItem>
          <IconButton>
            <img src="/care.png" alt="Soap"  style={styles.hands}/>
          </IconButton>
          <a href="/task/selfCare">
          <ListItemText
            disableTypography={true}
            primary="Self Care"
          />
          </a>
        </ListItem>
      </List>
      </div>
    );
  }
}
