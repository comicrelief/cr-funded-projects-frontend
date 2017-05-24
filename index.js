import './style';
import { Component } from 'preact';
import { Result } from './result';
import Search from './search';
import Header from "./header";

const SEARCH = '//api.github.com/search/repositories';

export default class App extends Component
{

  constructor()
  {
    super();
    this.searchHandler = this.searchHandler.bind(this);
  }

  /**
   *
   */
	_search(searchTerm)
	{
		return fetch(`${SEARCH}?q=` + searchTerm)
      .then( r => r.json() )
      .then( json => {
        this.setState({
          results: json && json.items || []
        });
      });
	}

  searchHandler(data)
  {
    this._search(data)
  }

  /**
   *
   */
	componentDidMount()
	{
		this._search('preact');
	}

  /**
   *
   */
	render(props, { results=[] })
	{
		return (

			<div className="funded-projects">

        <Header />

        <Search searchHandler={this.searchHandler} />

        { results.map( result => (
          <Result result={result} />
        )) }

			</div>
		);
	}

}
