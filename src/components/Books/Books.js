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

	menu() {
		const Menu = withReactContent(Swal)

		Menu.fire({
			position: 'top-end',
			showConfirmButton: false,
			showCloseButton: true
		}).then(() => {
			return console.log('Works')
		})
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
										<li><FaBarcode color="#575757" className="mr-2"/>{this.state.isbn}</li>
										<li><FaFlag color="#575757" className="mr-2"/>{this.state.language == null ? 'unknown' : this.state.language}</li>
										<li><FaCalendar color="#575757" className="mr-2"/>{this.state.edition}</li>
										<li><Badge color="light"><FaTag className="mr-2"/>{this.state.categories == null ? 'unknown' : this.state.categories}</Badge></li>
									</ul>
								</CardText>
							</CardBody>
						</div>
						<div className="col-sm-12">
							<Button className="btn btn-dark m-2 ml-1" size="sm">
								<FaRegEye />
							</Button>
							<Button className="btn btn-success mr-0" size="sm" onClick={this.menu}>
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