import React from 'react';

interface Props {
  match: { params: {taskId: number} };
}

export class Task extends React.PureComponent<Props> {
  render() {
    return (
      <div>Task #{this.props.match.params.taskId} Page</div>
    );
  }
}