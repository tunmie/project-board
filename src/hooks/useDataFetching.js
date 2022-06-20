import {useEffect, useState} from "react";

function useDataFetching(datasource) {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await fetch(datasource)
				const result = await data.json();

				if (result) {
					setData(true);
					setLoading(false);
				}
			} catch (e) {
				setLoading(false)
				setError(e.message)
			}
		}

		fetchData();
	}, [datasource])

	return [data, loading, error];
}

export default useDataFetching;