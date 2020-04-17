import React, { Component } from 'react';
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button, Badge
} from 'reactstrap';
import '../main.css';
import './styles.css';
import {
	FaPlus, FaRegEye
} from 'react-icons/fa'
import { FaBarcode, FaCalendar, FaFlag, FaTag } from 'react-icons/fa';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';

class Books extends Component {
	state = {
		image: this.props.image,
		title: this.props.title,
		author: this.props.author,
		categories: this.props.categories,
		language: this.props.language,
		publish: '',
		isbn: this.props.isbn,
		edition: this.props.edition
	}

	toast(type, text) {
		const Toast = Swal.mixin({
			toast: true,
			position: 'bottom-end',
			showConfirmButton: false,
			timer: 5000
		})
		Toast.fire({
			icon: type,
			title: text
		})
	}

	handlerSubmit = (values) => {
		const URL = 'https://api-bookstores.herokuapp.com/api/v1/books';
		axios.post(URL, values)
			.then(res => {
				this.toast('success', 'Saved')
			})
			.catch(err => {
				this.toast('error', 'Error')
			})
	};

	async menu(prop) {
		console.log(prop)
		const Menu = withReactContent(Swal)
		const { value: formValues } = await Menu.fire({
			position: 'top-end',
			showConfirmButton: true,
			showCancelButton: true,
			showCloseButton: true,
			html: `
			<img src="${prop.image}">
			<hr class="mb-5">
			<input name="image" class="d-none" id="input-image" value="${prop.image}" class="swal2-input" type="text"> 
			<label for="input-title">Title</label>
			<input name="title" id="input-title" value="${prop.title}" class="swal2-input" type="text"> 
			<label for="input-author">Author</label>
			<input name="author" id="input-author" value="${prop.author['name']}" class="swal2-input" type="text"> 
			<label for="input-isbn">ISBN</label>
			<input name="isbn" id="input-isbn" value="${prop.isbn}" class="swal2-input" type="text"> 
			<label for="input-language">Language</label>
			<input name="language" id="input-language" value="${prop.language}" class="swal2-input" type="text"> 
			<label for="input-categories">Categories</label>
			<input name="categories" id="input-categories" value="${prop.categories}" class="swal2-input" type="text"> 
			<div class="row">
				<div class="col">
					<label for="input-categories">Price</label>
					<input name="price" id="input-price" value="0" class="swal2-input" type="number"> 
				</div>
				<div class="col">
					<label for="input-stock">Stock</label>
					<input name="stock" id="input-stock" value="0" class="swal2-input" type="number"> 
				</div>
			</div>
			`,
			focusConfirm: false,
			preConfirm: () => {
				return [
					document.getElementById('input-image').value,
					document.getElementById('input-title').value,
					document.getElementById('input-author').value,
					document.getElementById('input-isbn').value,
					document.getElementById('input-language').value,
					document.getElementById('input-categories').value,
					document.getElementById('input-price').value,
					document.getElementById('input-stock').value
				]
			}
		})
		if (formValues) {
			let values = {
				image: formValues[0],
				title: formValues[1],
				author: formValues[2],
				isbn: formValues[3],
				language: formValues[4],
				categories: formValues[5],
				price: formValues[6],
				stock: formValues[7],
			}
			this.handlerSubmit(values)
		}
	}

	getData(prop) {
		console.log(prop)
	}

	render() {
		return (
			<React.Fragment>
				<div className="col-lg-4 mb-3">
					<Card >
						<div className="row">
							<div className="col-sm-4">
								<CardImg className="m-2" top width="100%" src={this.state.image} alt="Card image cap" />
							</div>
							<div className="col-sm-8">
								<CardBody className="p-0 m-2">
									<CardTitle><h5>{this.state.title}</h5></CardTitle>
									<CardSubtitle>{this.state.author.name}</CardSubtitle>
									<CardText>
										<h6 className="mt-3">Details:</h6>
										<ul>
											<li><FaBarcode color="#575757" className="mr-2" />{this.state.isbn}</li>
											<li><FaFlag color="#575757" className="mr-2" />
												{this.state.language != null
													? 'unknown'
													: this.state.language
												}
											</li>
											<li><FaCalendar color="#575757" className="mr-2" />{this.state.edition}</li>
											<li><Badge color="light"><FaTag className="mr-2" />{this.state.categories == null ? 'unknown' : this.state.categories}</Badge></li>
										</ul>
									</CardText>
								</CardBody>
							</div>
							<div className="col-sm-12">
								<Button className="btn btn-dark m-2 ml-1" size="sm">
									<FaRegEye />
								</Button>
								<Button className="btn btn-success mr-0" size="sm" onClick={() => this.menu(this.props)}>
									<FaPlus />
								</Button>
							</div>
						</div>
					</Card>
				</div>

			</React.Fragment>
		);

	}
}

export default Books;