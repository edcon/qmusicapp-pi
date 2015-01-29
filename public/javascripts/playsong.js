	var bam = new BeatsAudioManager("myBeatsPlayer");
	bam.on("ready", handleReady);
	bam.on("error", handleError);

	function handleReady(value) {
		bam.clientId = "7fw6kmzz8qb4pt8g6zg7ud6x";
		bam.authentication = {
			access_token: "k5urckhtnqe69vmv93y83dz2",
			user_id: "pdepip"
		};
		bam.identifier = "tr98467973";
		bam.load();
	};

	function handleError(value) {
		console.log("Error:" + value);
		switch(value) {
			case "auth":
			// Beats Music API auth error (401)
			break;
			case "connectionfailuer":
			// Audo stream connection failure
			break;
			case "apisecurity":
			// Beats Music API crossdomain error
			break;
			case"streamsecurity":
			// Audio stream crossdomain error
			break;
			case "streamio":
			// Audio stream io error
			break;
			case "apiio":
			// Beats Music API io error getting track data
			break;
			case "flashversion":
			// Flash version too low or not installed
			break;
		}
	};