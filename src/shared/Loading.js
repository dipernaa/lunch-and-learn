import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const Loading = () => (
  <div style={styles.loader}>
    <LinearProgress mode="indeterminate" />
  </div>
);

const styles = {
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: '60vw',
    height: '10px',
    margin: auto
  }
};

export default Loading;
