import {
	Box,
	BoxHeader,
	HeaderBg,
	HeaderText,
	BoxContent,
	Form,
	FormText,
	FormCheck,
	FormError,
	FormLink,
	FormButton,
} from './FormStyle';
import { Link } from 'react-router-dom';

export default function FormSignup() {
	async function handleSubmit(e: any) {
		e.preventDefault();
	}

	return (
		<Box>
			<BoxHeader>
				<HeaderBg />
				<HeaderText>
					<h2>Join us</h2>
					<p>Sign up to follow Daily News</p>
				</HeaderText>
			</BoxHeader>
			<BoxContent>
				<Form onSubmit={handleSubmit}>
					{/* {error ? <FormError>Invalid Email and Password</FormError> : null} */}
					<FormText>
						<input name="email" placeholder="Email" required />
					</FormText>
					<FormText>
						<input name="password" placeholder="Password" required />
					</FormText>
					<FormCheck>
						<input type="checkbox" name="check" />
						<span>You agree to receive updates and offers from The Daily. You may opt out anytime.</span>
					</FormCheck>
					<FormButton type="submit" />
					<FormLink>
						Already registered?
						<Link to="/login" className="link">
							{' '}
							Login
						</Link>
					</FormLink>
				</Form>
			</BoxContent>
		</Box>
	);
}
