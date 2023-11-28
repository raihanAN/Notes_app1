import React from 'react';

class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
        }

        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }


    onTagChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.AddNote(this.state);

    }
    render() {
        return (
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <h2>Tambah Catatan</h2>
                <input type="text" placeholder="Judul" value={this.state.title} onChange={this.onNameChangeEventHandler} />
                <textarea placeholder="Isi catatan" value={this.state.body} onChange={this.onTagChangeEventHandler} />
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default NotesInput;