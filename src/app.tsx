type AppProps = {
	message: string;
};

export const App = ({ message }: AppProps) => {
	console.log(message);

	if (true) {
		return <div>{message}</div>;
	}

	return <div>{message}</div>;
};
