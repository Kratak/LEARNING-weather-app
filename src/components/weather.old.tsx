// import * as React from 'react';
// import { Component } from 'react';

// import { API, APIKEY } from '../api/config.api';
// import { WeatherData, UserInput } from '../type';

// interface IProps { }

// interface IState {
//     loading: boolean;
// 	weatherData?: WeatherData;
// }

// export default class Weather extends Component<any, any> {
// 	constructor(props: any) {
// 		super(props);
// 		this.state = {
// 			loading: true,
// 			weatherData: undefined
// 		};
// 	}

// 	public getCurrentPosition(): Promise<UserInput> {
// 		return new Promise((resolve) => {
//             const test01 = `warsaw`
//             const test02 = `pl`
            
//             resolve({
//                 city: test01,
//                 country: test02
//             }
//             )
// 		});
// 	}

// 	public getCurrentWeather(geolocation: UserInput): void {
// 		const { city, country } = geolocation;
// 		fetch(`${API}q=${city},${country}${APIKEY}`)
// 			.then(res => res.json())
// 			.then(data => {
          
//                 const {
// 					cod,
// 					message,
// 					cnt,
// 					city,
// 					list
// 				} = data.current_observation;
// 				const weatherData = {
// 					cod,
// 					message,
// 					cnt,
// 					city,
// 					list
//                 };
                
// 				this.setState({ weatherData, loading: false });
// 			})
// 			.catch(err => console.log(err));
// 	}
     
     
   
     
 


// 	componentDidMount() {
// 		this.getCurrentPosition()
// 			.then(geolocation => this.getCurrentWeather(geolocation))
// 			.catch(err => console.log(err));
// 	}

// 	render() {
// 		const loading = this.state.loading && <img src={loader} />;

//         const weatherDisplay = this.state.weatherData
//          && (
// 			<WeatherDisplay weatherData={this.state.weatherData} />
// 		);

// 		return (
// 			<>
				
// 			</>
// 		);
// 	}
// }
