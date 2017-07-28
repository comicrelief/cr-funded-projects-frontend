import React, { Component } from 'preact'


export default class Search extends Component {

  /**
   *
   */
  constructor()
  {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      inputField: '',
      range: '5',
      searchTimeout: 0,
    };
  }

  /**
   *
   * @param evt
   */
  submitHandler(evt)
  {
    evt.preventDefault();
    // pass the input field value to the event handler passed
    // as a prop by the parent (App)
    this.props.searchHandler(this.state.inputField, this.state.range);

    this.setState({
      inputField: '',
      range: '',
    });
  }

  /**
   *
   * @param event
   */
  handleChange(event)
  {
    let self = this;

    clearTimeout(self.state.searchTimeout);

    self.state.searchTimeout = setTimeout(function () {
      self.props.searchHandler(event.target.value);
      self.setState({
        inputField: event.target.value
      });
    }, 500);
  }



  /**
   *
   * @returns {XML}
   */
  render()
  {
    return (
      <div className="search-container">
        <form onSubmit={this.submitHandler}>
          <input type="text"
                 placeholder="Postcode Search (e.g. N4 2HR)"
                 value={this.state.inputField}
                 onKeyUp={this.handleChange} />
        </form>
      </div>
    );
  }
}
