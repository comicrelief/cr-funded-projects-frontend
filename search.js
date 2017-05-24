import React, { Component } from 'preact'

export default class Search extends Component {

  constructor()
  {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      inputField: ''
    };
  }

  submitHandler(evt)
  {
    evt.preventDefault();
    // pass the input field value to the event handler passed
    // as a prop by the parent (App)
    this.props.searchHandler(this.state.inputField);

    this.setState({
      inputField: ''
    });
  }

  handleChange(event)
  {
    this.props.searchHandler(event.target.value);

    this.setState({
      inputField: event.target.value
    });
  }

  render()
  {
    return (
      <div className="search-container">
        <form onSubmit={this.submitHandler}>
          <input type="text"
                 placeholder="Search"
                 value={this.state.inputField}
                 onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}
