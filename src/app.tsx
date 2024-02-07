type appProps = {
	message: string;
};

export const App = ({ message }: appProps) => {
	console.log(message);

	if (true) {
		return <div>{message}</div>;
	}

	return <div>{message}</div>;
};
