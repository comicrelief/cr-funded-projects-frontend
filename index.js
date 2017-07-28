import './style.sass';
import { Component } from 'preact';
import { Result } from './result';
import Search from './search';
import Header from "./header";

// const SEARCH = 'https://1kfs7evxca.execute-api.eu-west-1.amazonaws.com/beta/grants';
const SEARCH = 'https://1kfs7evxca.execute-api.eu-west-1.amazonaws.com/beta/grants-geo';
const POSTCODE_API = 'https://api.postcodes.io';


export default class App extends Component
{

  /**
   *
   */
  constructor()
  {
    super();
    this.searchHandler = this.searchHandler.bind(this);
  }

  /**
   *
   * @param searchTerm
   * @returns {Promise.<TResult>}
   * @private
   */
	_search(searchTerm, range)
	{
    if (searchTerm.length < 5) return;
    let query = POSTCODE_API + '/postcodes/' + searchTerm;
    fetch(`${query}`)
      .then( r => r.json() )
      .then(json => {
    	  let query = searchTerm.length >= 1 ? (SEARCH + '?latitude=' + json.result.latitude + '&longitude=' + json.result.longitude) + '&range=' + range + 'km' : SEARCH;
        return fetch(`${query}`)
          .then( r => r.json() )
          .then( json => {
            this.setState({
              pagination: json && json.data && json.data.pagination || [],
              results: json && json.data && json.data.grants || []
            });
          });
      });
	}

  /**
   *
   * @param data
   */
  searchHandler(data, range)
  {
    this._search(data, range)
  }

  /**
   *
   */
	componentDidMount()
	{
		this._search('', 5);
	}

  /**
   *
   * @param props
   * @param results
   * @param pagination
   * @returns {XML}
   */
	render(props, { results=[], pagination=[] })
	{
		return (

			<div className="funded-projects">

        <Header />

        <div className="paging-information">
          <p>{pagination.total} results - Page {pagination.page} of {pagination.pages}</p>
        </div>

        <Search searchHandler={this.searchHandler} />

        { results.map( result => (
          <Result result={result.data} />
        )) }

			</div>
		);
	}

}
