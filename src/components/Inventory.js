import React, { Component } from 'react';
import axios from 'axios';
import Books from './Books/Books';
import {
	InputGroup, InputGroupAddon, Input,
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button, Badge
} from 'reactstrap';
import { FaBarcode, FaCalendar, FaFlag, FaTag, FaMoneyBillAlt, FaCheckCircle } from 'react-icons/fa';
class Search extends Component {
	state = {
		message: '',
		books: [],
	};

	init = () => {
		const URL = `https://api-bookstores.herokuapp.com/api/v1/books`;
		axios.get(URL)
			.then(response => {
				const books = response.data;
				this.setState({ books });
			})
			.catch(err => console.log(err));
	}

	componentDidMount() {
		this.init()
	}

	renderBooks() {
		const { books } = this.state;
		if (books.length === 0) {
			return <span>{this.state.message}</span>
		} else if (books.length > 0) {
			return (
				<React.Fragment>
					<h5 className="my-3">{books.length} books found</h5>
					<div className="row">
						{books.map(book => {
							console.log(book)

							return (
								<div className="col-lg-4 mb-3">
									<Card >
										<div className="row">
											<div className="col-sm-4">
												<CardImg className="m-2" top width="100%" src={book.image} alt="Card image cap" />
											</div>
											<div className="col-sm-8">
												<CardBody className="p-0 m-2">
													<CardTitle><h5>{book.title}</h5></CardTitle>
													<CardSubtitle>{book.author}</CardSubtitle>
													<CardText>
														<h6 className="mt-3">Details:</h6>
														<ul>
															<li><FaBarcode color="#575757" className="mr-2" />{book.isbn}</li>
															<li><FaFlag color="#575757" className="mr-2" />
																{book.language != null
																	? 'unknown'
																	: book.language
																}
															</li>
															<li><FaCalendar color="#575757" className="mr-2" />{book.edition}</li>
															<li><Badge color="light"><FaTag className="mr-2" />{book.categories == null ? 'unknown' : book.categories}</Badge></li>
														</ul>
													</CardText>
												</CardBody>
											</div>
											<div className="ml-4 mb-2">
												<span className="m-2">
													<Badge color="success"><FaMoneyBillAlt className="mr-2" />{book.price}</Badge>
												</span>
												<span className="m-2">
													<Badge color="primary"><FaCheckCircle className="mr-2" />{book.stock}</Badge>
												</span>
											</div>
										</div>
									</Card>
								</div>
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
						<h3>Inventory</h3>
					</div>
					{this.renderBooks()}
				</div>
			</React.Fragment>
		);
	}
}

export default Search;