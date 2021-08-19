import {
	Box,
	BoxHeader,
	HeaderBg,
	HeaderText,
	BoxContent,
	Form,
	FormText,
	FormError,
	FormLink,
	FormButton,
} from './FormStyle';
import { Link } from 'react-router-dom';

export default function FormLogin() {
	return (
		<Box>
			<BoxHeader>
				<HeaderBg />
				<HeaderText>
					<h2>Welcome</h2>
					<h2>Back</h2>
					<p>Please login to continue!</p>
				</HeaderText>
			</BoxHeader>
			<BoxContent>
				<Form>
					{/* <FormError>Invalid Email or password</FormError> */}
					<FormText>
						<input name="email" placeholder="Email" required />
					</FormText>
					<FormText>
						<input name="password" placeholder="Password" required />
					</FormText>
					<FormButton type="submit" />
					<FormLink>
						Don't have password, please
						<Link to="/signup" className="link">
							{' '}
							sign up
						</Link>
					</FormLink>
				</Form>
			</BoxContent>
		</Box>
	);
}
