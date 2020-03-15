import React, { CSSProperties } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';

const styles = {
  page: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    paddingBottom: "100px"
  } as CSSProperties,
  title: {
    textAlign: "center",
    fontFamily: "Lato",
    fontWeight: 700,
    fontSize: '32px',
    color: '#262642',
    marginTop: '10px',
    marginBottom: '10px',
  } as CSSProperties,
  statsPaper: {
    width: "250px",
    height: "120px",
    padding: "20px",
    marginLeft: "50%",
    transform: "translateX(-50%)",
    textAlign: "center"
  } as CSSProperties,
  newsPaper: {
    width: "90%",
    padding: "20px",
    marginLeft: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    flexGrow : 1
  } as CSSProperties,
  readMore: {
    bottom: "5px",
    right: "5px",
    position: "absolute"
  } as CSSProperties,
  content: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 4
  } as CSSProperties
};

const RSSFeedURL = "https://www.valitsus.ee/et/news/1+3/feed?keyword=koroonaviirus"

export class News extends React.PureComponent {
  state = {
    items: undefined as any[] | undefined
  }
  render() {
    const news = this.state.items;

    return (
      <div style={styles.page}>
        <Typography variant="h2" style={styles.title}>
          Recovery Stats
        </Typography>

        <Paper style={styles.statsPaper}>
          <Typography variant="h3" color="primary" gutterBottom={true}>
            72624
          </Typography>

          <LinearProgress
            variant="determinate"
            color="primary"
            value={72624/156102*100}
          />
        </Paper>

        <Typography variant="h2" style={styles.title} >
          Latest News
        </Typography>

        <Paper style={styles.newsPaper}>
          <Typography variant="h6">
            {news ? news[0].title : "Loading Title..."}
          </Typography>

          <Typography variant="caption" color="secondary">
            {news ? news[0].pubDate : "Loading Date..."}
          </Typography>

          <Typography variant="subtitle2" style={styles.content}>
            {news ? news[0].content.slice(181) : "Loading Snippet..."}
          </Typography>

          <Button
            style={styles.readMore}
            color="primary"
            variant="text"
            size="small"
            href={news ? news[0].link : "#"}
          >
            Read More > >
          </Button>
        </Paper>
      </div>
    );
  }

  componentDidMount() {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(RSSFeedURL)).then(response => {
      return response.json();
    }).then(feed => {
      if (!feed.items) {
        this.setState({items: [{
            title: "No",
            pubDate: "News",
            contentSnippet: "Available",
            link: "#"
          }]
        });
        return;
      }

      this.setState({items: feed.items});
    });
  }
}