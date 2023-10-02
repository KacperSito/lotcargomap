const airportsCoordinates = {
	"WAW": {lat: 52.16586593126193, lng: 20.967062665855927, city: "Warsaw", country: "Poland"},
	"ORD": {lat: 41.978611, lng: -87.904724, city: "Chicago", country: "USA"},
	"JFK": {lat: 40.641766, lng: -73.780968, city: "New York", country: "USA"},
	"KRK": {lat: 50.07778, lng: 19.78472, city: "Cracow", country: "Poland"},
	"EWR": {lat: 40.6895314, lng: -74.17446239999998, city: "New York", country: "USA"},
	"RZE": {lat: 50.11680625231919, lng: 22.024685822724084, city: "Rzeszow", country: "Poland"},
	"LHR": {lat: 51.470020, lng:-0.454295, city: "London", country: "UK"},
	"VCE": {lat: 45.503455, lng:12.344693, city: "Venice", country: "Italy"},
	"MXP": {lat: 45.630063, lng:8.725531, city: "Milan", country: "Italy"},
	"CDG": {lat: 49.008331,	lng:2.550791, city: "Paris", country: "France"},
	"MUC": {lat: 48.1351253 , lng:11.5819806, city: "Munich", country: "Germany"},
	"NCE": {lat: 43.6595, lng:7.2062, city: "Nice", country: "France"},
	"GYD": {lat: 40.465, lng:50.0522, city: "Baku", country: "Azerbaijan"},
	"TBS": {lat: 41.6697, lng:44.9568, city: "Tbilisi", country: "Georgia"},
	"EVN": {lat: 40.149178, lng:44.398857, city: "Yerevan", country: "Armenia"},
	"LAX": {lat: 33.9415889,  lng:-118.40853, city: "Los Angeles", country: "USA"},
	"MIA": {lat: 25.795865, lng:-80.28704570000002, city: "Miami", country: "USA"},
	"STR": {lat: 48.69, lng:9.221944, city: "Stuttgart", country: "Germany"},
	"FRA": {lat: 50.0379326, lng:8.562151800000038, city: "Frankfurt", country: "Germany"},
	"BER": {lat: 52.3663978, lng:13.4895614152, city: "Berlin", country: "Germany"},
	"HAM": {lat: 53.63636215, lng:9.99455013468418, city: "Hamburg", country: "Germany"},
	"DUS": {lat: 51.2827846, lng:6.762270100000023, city: "Dusseldorf", country: "Germany"},
	"ZRH": {lat: 47.458217, lng:8.555476, city: "Zurich", country: "Switzerland"},
	"GVA": {lat: 46.236979, lng:6.109089, city: "Geneva", country: "Switzerland"},
	"MAD": {lat: 40.525792, lng:-3.645054, city: "Madrid", country: "Spain"},
	"BCN": {lat: 41.297445, lng:2.08329409999998, city: "Barcelona", country: "Spain"},
	"ARN": {lat: 59.649762 , lng:17.923781, city: "Stockholm", country: "Sweden"},
	"CPH": {lat: 55.6180236 ,lng:12.650762799999939, city: "Copenhagen", country: "Denemark"},
	"BLL": {lat: 55.7408067 , lng:9.152599900000041, city: "Billund", country: "Denemark"},
	"OSL": {lat: 60.19755 , lng:11.100415, city: "Oslo", country: "Norway"},
	"GOT": {lat: 57.668799 , lng:12.292314, city: "Goteborg", country: "Sweden"},
	"OSR": {lat: 49.69611, lng:18.11083, city: "Ostrava", country: "Czech Republic"},
	"KSC": {lat: 48.6631 , lng:21.2411, city: "Kosice", country: "Sloviakia"},
	"PRG": {lat: 50.1018, lng:14.2632, city: "Prague", country: "Czech Republic"},
	"DBV": {lat: 42.5611109 ,lng:18.268056, city: "Dubrovnik", country: "Croatia"},
	"BEG": {lat: 44.818401,lng:20.309099, city: "Belgrade", country: "Serbia"},
	"SJJ": {lat: 43.8246 , lng:18.3315, city: "Sarajevo", country: "Bosnia and Herzegovina"},
	"TGD": {lat: 42.359167 , lng:19.251666999999998, city: "Podgorica", country: "Montenegro"},
	"PRN": {lat: 42.572778, lng:21.035833, city: "Pristina", country: "Kosovo"},
	"SKP": {lat: 41.960876 , lng:21.627192, city: "Skopje", country: "North Macedonia"},
	"TIA": {lat: 41.414445 ,lng:19.7193, city: "Tirana", country: "Albania"},
	"ZAG": {lat: 45.74075 , lng:16.067437, city: "Zabgreb", country: "Croatia"},
	"LJU": {lat: 46.225943, lng:14.455914, city: "Lubljana", country: "Slovenia"},
	"SOF": {lat: 42.689369, lng:23.414425, city: "Sofia", country: "Bulgaria"},
	"OTP": {lat: 44.570731, lng:26.084412, city: "Bucharest", country: "Romania"},
	"CLJ": {lat: 46.782507 , lng:23.688024, city: "Cluj-Napoca", country: "Romania"},
	"RIX": {lat: 56.922655, lng:23.973313, city: "Riga", country: "Latvia"},
	"TLL": {lat: 59.414138 , lng:24.833375, city: "Tallin", country: "Estonia"},
	"SXB": {lat: 48.5382995605469 , lng:7.62823009490967, city: "Strasbourg", country: "France"},
	"GDN": {lat: 54.377499, lng:18.466110, city: "Gdansk", country: "Poland"},
	"SZY": {lat: 53.47583143, lng:20.935996256, city: "Szczytno", country: "Poland"},
	"BZG": {lat: 53.097951 , lng:17.972681, city: "Bydgoszcz", country: "Poland"},
	"WRO": {lat: 51.104165, lng:16.880933, city: "Wroclaw", country: "Poland"},
	"KTW": {lat: 50.472802, lng:19.075881, city: "Katowice", country: "Poland"},
	"SZZ": {lat: 53.58472,lng:14.90222, city: "Szczecin", country: "Poland"},
	"POZ": {lat: 52.416666666667, lng:16.833333333333, city: "Poznan", country: "Poland"},
	"LUZ": {lat: 51.235667869925, lng:22.715193661164, city: "Lublin", country: "Poland"},
	"IEG": {lat: 52.13850021362305 , lng:15.79860019683838, city: "Zielona Gora", country: "Poland"},
	"DXB": {lat: 25.2531745 , lng:55.3656728, city: "Dubai", country: "United Arab Emirates"},
	"DEL": {lat: 28.5561624 , lng:77.0999578, city: "Delhi", country: "India"},
	"BOM": {lat: 19.0901765 ,lng:72.86873909999997, city: "Mumbai", country: "India"},
	"ICN": {lat: 37.4601908, lng:126.4406957, city: "Seoul", country: "Korea"},
	"NRT": {lat: 35.773118,lng:140.387184, city: "Tokyo", country: "Japan"},
	"NQZ": {lat: 51.022202,lng:71.466904, city: "Astana", country: "Kazakhstan"},
	"KIV": {lat: 47.033333333333, lng:28.966666666667, city: "Chisinau", country: "Moldova"},
	"TLV": {lat: 32.005532, lng:34.88541120000002, city: "Tel Aviv", country: "Israel"},
	"BUD": {lat: 47.433333333333, lng:19.233333333333, city: "Buddapest", country: "Hungary"},
	"CAI": {lat: 30.119832854 ,lng:31.40333172, city: "Cairo", country: "Egypt"},
	"YYZ": {lat: 43.67771760000001 ,lng:-79.62481969999999 , city: "Toronto", country: "Canada"},
	"BEY": {lat: 33.819376 , lng:35.491204, city: "Beirut", country: "Lebanon"},
	"PEK": {lat: 40.0798573, lng:116.60311209999998, city: "Beijing", country: "China"},
	"PKX": {lat: 39.49731625, lng:116.412330862356, city: "Beijing", country: "China"},
	"IST": {lat: 41.276901, lng:28.729324, city: "Istanbul", country: "Turkiye"},
	"VIE": {lat: 48.1158333, lng:16.566575100000023, city: "Vienna", country: "Austria"},
	"BRU": {lat: 50.900999, lng:4.485574400000019, city: "Brussels", country: "China"},
	"LUX": {lat: 49.628899, lng:6.214745, city: "Luxembourg", country: "Luxembourg"},
	"AMS": {lat: 52.308056, lng:4.764167, city: "Amsterdam", country: "Netherlands"},
	"LCY": {lat: 51.504844, lng: 0.049518, city: "London", country: "UK"},
	"SPU": {lat: 43.538944, lng: 16.297964, city: "Split", country: "Croatia"},
	"VNO": {lat: 54.633333333333,lng: 25.283333333333, city: "Vilnius", country: "Lithuania"},
	"RDO": {lat:  51.3892, lng:21.2133, city: "Radom", country: "Poland"},
	"FCO": {lat:  41.773540, lng:12.239712, city: "Rome", country: "Italy"},
	"PVK": {lat:  38.92556, lng:20.76528, city: "Preveza", country: "Greece"},
	"VAR": {lat:  43.23194, lng:27.82528, city: "Var", country: "Bulgaria"},
	"BZG": {lat:  53.09667, lng:17.97778, city: "Bydgoszcz", country: "Poland"},
};