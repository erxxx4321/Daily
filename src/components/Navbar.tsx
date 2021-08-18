import styled from '@emotion/styled';
import { FiHome, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Turn as Hamburger } from 'hamburger-react';

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);
	const [isHide, setHide] = useState(false);
	const [prev, setPrev] = useState(0);

	const close = () => {
		setOpen(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, [prev]);

	function handleScroll() {
		if (prev > window.pageYOffset) {
			setHide(false); // scroll up
		} else if (prev < window.pageYOffset) {
			setHide(true); // scroll down
		}
		setPrev(window.pageYOffset);
	}

	return (
		<Nav>
			{!isHide && (
				<>
					<Hamburger
						rounded
						toggled={isOpen}
						toggle={setOpen}
						size={32}
						color="var(--white01)"
						distance="lg"
					/>
					<div className={'nav-list ' + (isOpen ? 'open' : '')}>
						<Link className="nav" to="/" onClick={close}>
							<FiHome style={{ fontSize: '31px' }} />
							<span>HOME</span>
						</Link>
						<Link className="nav" to="/login" onClick={close}>
							<FiLogIn style={{ fontSize: '31px' }} />
							<span>LOGIN</span>
						</Link>
					</div>
				</>
			)}
		</Nav>
	);
};

export default Navbar;

/*
 * Style
 */
const Nav = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: fixed;
	top: 0;
	z-index: 999;
	display: block;
	background: var(--orange01);

	.nav-btn {
		background: #000;
	}
	.nav-list {
		z-index: 999;
		transition: all 0.4s ease-in-out;
		margin-left: -200px;
		background: none;
		position: absolute;
		top: 45px;
	}
	.open {
		margin-left: 0;
		background: var(--orange01);
	}
	.nav {
		color: var(--white01);
		padding: 0.5rem 0.75rem;
		display: flex;
		align-items: center;
		&:hover {
			color: var(--black01);
			transition: 0.6s;
		}
		span {
			font-size: 1.25rem;
			margin-left: 0.25rem;
		}
	}
`;
