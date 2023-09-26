import { useEffect } from 'react'
import { useState } from 'react'

const player = {
	name: "Ádámbátyám",
	region: "eune"
}

export default function FetchAPI() {
	const [data, setData] = useState()

	function fetchAPI() {
		fetch(`https://lol-scan-api.vercel.app/api/trpc/player.getIsInGame?input={"region":"${player.region}","name":"${player.name}"}`, {
			headers: {
				"api-key": process.env.REACT_APP_API_KEY
			}
		})
			.then(response => response.json())
			.then(json => setData(json.result.data.isInGame))
	}

	useEffect(() => {
		fetchAPI()
	}, [])

	return <div>
		<div>Is Ádámbátyám currently in a LoL game?</div>
		<div>{data ? "Yes" : "No"}</div>
	</div>
}