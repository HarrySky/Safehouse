import React, { CSSProperties } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Props, mapStateToProps, mapDispatchToProps } from 'store/ui/House';
import { connect } from 'react-redux';

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
  } as CSSProperties,
  progressFetching: {
    width: "280px",
    height: "280px",
  } as CSSProperties,
  progressFetchingContainer: {
    width: "280px",
    height: "280px",
    marginLeft: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
    position: "fixed"
  } as CSSProperties
};

class House extends React.PureComponent<Props> {
  render() {
    return (
      <div style={styles.container}>
        <CircularProgress
          style={styles.progressBackground}
          variant="static"
          value={100}
        />

        {
          this.props.isFetching ? 
          <div style={styles.progressFetchingContainer}>
            <CircularProgress
              style={styles.progressFetching}
              variant="indeterminate"
              color="primary"
            />
          </div> :
          <CircularProgress
            style={styles.progress}
            variant="static"
            color="primary"
            value={this.props.progress}
          />
        }

        <img src="/house.gif" alt="House" style={styles.house} />
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchProgress()
  }
}

// tslint:disable-next-line: no-default-export
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(House);
