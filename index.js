import './style.sass';
import { Component } from 'preact';
import { Result } from './result';
import GrantsMap from './map';
import Search from './search';
import Header from "./header";
// Trick as per https://github.com/developit/preact-cli/issues/76 
import 'leaflet/dist/leaflet.css';

const SEARCH = 'https://1kfs7evxca.execute-api.eu-west-1.amazonaws.com/beta/grants';

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
	_search(searchTerm)
	{
	  let query = searchTerm.length >= 1 ? (SEARCH + '?search=' + searchTerm) : SEARCH;
		return fetch(`${query}`)
      .then( r => r.json() )
      .then( json => {
        this.setState({
          results: json && json.data || []
        });
      });
	}

  /**
   *
   * @param data
   */
  searchHandler(data)
  {
    this._search(data)
  }

  /**
   *
   */
	componentDidMount()
	{
		this._search('');
	}

  /**
   *
   * @param props
   * @param results
   * @returns {XML}
   */
	render(props, { results=[] })
	{
		return (

			<div className="funded-projects">

        <Header />

        <Search searchHandler={this.searchHandler} />

        <GrantsMap results={results}/>

			</div>
		);
	}

}
