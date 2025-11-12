import CTAButton from '../components/CTAButton';

const NotFoundPage = () => {
	return (
		<div className="w-full init_sec_center flex flex-col justify-center items-center">
			<h1 className="text-6xl">404</h1>
			<h2 className="mt-2">PAGE NOT FOUND</h2>
			<CTAButton link="/" className="bg-blue-700 mt-4">Back to Home Page</CTAButton>
		</div>
	);
}

export default NotFoundPage;
