import React, { Component } from 'react';
import axios from 'axios';
import Books from './Books/Books';
import {
	InputGroup, InputGroupAddon, Button, Input
} from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

class Search extends Component {
	state = {
		title: 'Which book do you want to consult?',
		search: '',
		message: '',
		books: [],
	};

	inputSearch = (e) => {
		switch (e.target.name) {
			case 'search':
				this.state.message = 'Writing...'
				this.setState({ search: e.target.value })
				break;
			default:
				break;
		}
	}

	submit = () => {
		
		let book = this.state.search;
		const URL = `https://api-bookstores.herokuapp.com/api/v1/books/${book}`;
		axios.get(URL)
		.then(response => {
				this.state.title = book;
				const books = response.data;
				this.setState({ books });
			})
			.catch(err => console.log(err));
	}

	componentDidMount() {
		this.state.message = 'Loading...'
		if (this.state.search != ''){
			this.submit()
		} else {
			console.log('Input is empty')
		}
	}

	renderBooks() {
		const { books } = this.state;
		if (this.state.search == '') {
			return this.state.message = 'You must make a search'
		} else if (books.length === 0) {
			return <span>{this.state.message}</span>
		} else if (books.length > 0) {

			return (
				<React.Fragment>
					<h5 className="my-3">{books.length} books found</h5>
					<div className="row">
						{books.map(book => {
							return (
								<Books
									image={book.image}
									title={book.title}
									author={book.author}
									isbn={book.meta['isbn']}
									language={book.meta['languages']}
									categories={book.categories[0]['title']}
									edition={book.meta['edition']}
								/>
							)
						})}
					</div>
				</React.Fragment>
			)
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className="row">
					<div className="col-lg-8 p-0">
						<h3>{this.state.title}</h3>
					</div>
					<div className="col-lg-4 p-0">
						<InputGroup>
							<Input
								value={this.state.search}
								onChange={this.inputSearch}
								type="text"
								name="search"
							/>
							<InputGroupAddon addonType="append">
								<Button color="secondary" onClick={this.submit}>
									<FaSearch />
								</Button>
							</InputGroupAddon>
						</InputGroup>
					</div>

					{this.renderBooks()}
				</div>

			</React.Fragment>
		);
	}
}

export default Search;