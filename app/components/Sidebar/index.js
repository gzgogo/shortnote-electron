import React from 'react';
import './style.styl';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidebar'>
        <i className="iconfont icon-add" onClick={this.props.onNoteAdd}></i>
      </div>
    );
  }
}
