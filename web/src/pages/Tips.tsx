import React from 'react';

interface Props {
  match: { params: {taskId: number} };
}

export class Tips extends React.PureComponent<Props> {
  render() {
    return (
      <div>Tips For Task #{this.props.match.params.taskId} Page</div>
    );
  }
}