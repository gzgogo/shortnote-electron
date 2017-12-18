import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Note from '../Note';
import './style.styl';

export default class Notes extends React.Component {
  render() {
    const { notes, onNoteDelete, onNoteUpdate } = this.props;

    var noteNodes = notes.map((note) => {
      return (
        <Note
          key={note.id}
          note={note}
          onNoteDelete={onNoteDelete}
          onNoteUpdate={onNoteUpdate}
        />
      );
    });

    return (
      <div className="notes" >
        {
          <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            { noteNodes }
          </ReactCSSTransitionGroup>
        }
      </div>
    );
  }
}
