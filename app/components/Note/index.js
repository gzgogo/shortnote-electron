import React from 'react';
import './style.styl';

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.handleContentChange = this.handleContentChange.bind(this);
  }

  render() {
    const { note, onNoteDelete } = this.props;
    return (
      <div className="note">
        <div className="btn-close">
          <i className="iconfont icon-close" onClick={() => onNoteDelete(note)}></i>
        </div>
        <input className="note-header" type="text" defaultValue={note.header}/>
        <textarea
          className="note-body"
          name="content"
          id="content"
          ref="body"
          defaultValue={note.body}
          onInput={this.handleContentChange}
        >
        </textarea>
        {
          // <div className="note-footer"></div>
        }
      </div>
    );
  }

  handleContentChange(e) {
    console.log('e %o', e);

    const { note, onNoteUpdate } = this.props;

    var body = this.refs.body.value;
    note.body = body;

    if (typeof onNoteUpdate === 'function') {
      onNoteUpdate(note);
    }
  }
}
