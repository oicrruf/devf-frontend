import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
	Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem, NavbarText 
} from 'reactstrap';
import { FaGhost } from 'react-icons/fa'

const Navigation = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<React.Fragment>
			<Navbar color="dark" light expand="md">
				<div className="container">
					<NavbarBrand href="/">
						<FaGhost color="#ffffff"/>
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<NavLink>
									<Link to="/">Search</Link>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>
									<Link to="/inventory">Inventory</Link>
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</div>
			</Navbar>
		</React.Fragment>
	);
}

export default Navigation;