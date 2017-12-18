import React, { Component } from 'react';
import {inject, observer} from "mobx-react";
import Notes from 'components/Notes';
import Sidebar from 'components/Sidebar';
import './style.styl';

@inject(stores => ({
  loading: stores.loading,
  store: stores.notes
}))
@observer
export default class NotesPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.notes.load();
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const { store } = this.props;
    return (
      <div className="page notes ">
        <Sidebar onNoteAdd={() => store.add()}></Sidebar>
        <Notes
          notes={ store.notes }
          onNoteDelete={note => store.remove(note)}
          onNoteUpdate={store.save}
        />
      </div>
    );
  }
};
