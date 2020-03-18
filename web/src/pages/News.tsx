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
    padding: "10px",
    marginLeft: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    flexGrow : 1
  } as CSSProperties,
  newsTitle: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3
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
    items: undefined as any[] | undefined,
    confirmed: undefined as number | undefined,
    recovered: undefined as number | undefined,
    statsError: false
  }

  render() {
    const confirmed = this.state.confirmed;
    const recovered = this.state.recovered;
    const statsError = this.state.statsError;

    const statsAvailable = confirmed !== undefined && recovered !== undefined;
    const progress = statsAvailable ? recovered!/confirmed!*100 : 0;

    const news = this.state.items ? this.state.items[0] : undefined;
    const newsTitle = news ? news.title : "Loading News...";
    const newsPubDate = news ? news.pubDate : "...";
    const newsContent = news ? news.content : "...";

    return (
      <div style={styles.page}>
        <Typography variant="h2" style={styles.title}>
          Recovery Stats
        </Typography>

        <Paper style={styles.statsPaper}>
          <Typography variant="h3" color="primary" gutterBottom={true}>
            {statsAvailable && !statsError ? recovered : "..."}
          </Typography>

          <LinearProgress
            variant={statsAvailable || statsError ? "determinate" : "indeterminate"}
            value={progress}
            color="primary"
          />
        </Paper>

        <Typography variant="h2" style={styles.title} >
          Latest News
        </Typography>

        <Paper style={styles.newsPaper}>
          <Typography variant="h6" style={styles.newsTitle}>
            {newsTitle}
          </Typography>

          <Typography variant="caption" color="secondary">
            {newsPubDate}
          </Typography>

          <Typography variant="subtitle2" style={styles.content}>
            {newsContent.length > 181 ? newsContent.slice(181) : newsContent}
          </Typography>

          <Button
            style={styles.readMore}
            color="primary"
            variant="text"
            size="small"
            href={news ? news.link : "#"}
          >
            Read More > >
          </Button>
        </Paper>
      </div>
    );
  }

  componentDidMount() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(RSSFeedURL)
    ).then(response => {
      return response.json();
    }).then(feed => {
      if (!feed.items) {
        this.setState({
          items: [{
            title: "No",
            pubDate: "News",
            content: "Available",
            link: "#"
          }]
        });
        return;
      }

      this.setState({items: feed.items});
    }).catch(error => {
      this.setState({
        items: [{
          title: "Fetching News Failed!",
          pubDate: error.message,
          content: "Please Refresh Page To Try Again",
          link: "#"
        }]
      });

      console.log("Unable to fetch COVID-19 news: " + error.message);
    });

    fetch(
      "https://coronavirus-tracker-api.herokuapp.com/all"
    ).then(response => {
      return response.json();
    }).then(data => {
      const confirmed = data.latest.confirmed;
      const recovered = data.latest.recovered;

      this.setState({confirmed, recovered});
    }).catch(error => {
      this.setState({statsError: true});
      console.log("Unable to fetch COVID-19 stats: " + error.message);
    });
  }
}