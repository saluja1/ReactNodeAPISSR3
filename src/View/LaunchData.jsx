import React, {Component} from 'react';
import LaunchItem from './LaunchItem.jsx'

class launchData extends Component {

	constructor(props) {

		super(props);

		this.state = {

	        selectedYear: '',
	        selectedLaunch: '',
	        selectedLanding: '',

	        yearData: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],

	        launchItems: [],

	        conditionData: ['true', 'false']
	    }
    }

	componentDidMount = (event) => {
		this.launchData();
	}

	launchData = (limit = 100) => {

		let url = 'https://api.spacexdata.com/v3/launches';
		let year = this.state.selectedYear;
		let launch = this.state.selectedLaunch;
		let landing = this.state.selectedLanding;

		url = url+'?limit='+limit;

		url = year ? url+'&launch_year='+year : url;

		url = launch ? url+'&launch_success='+launch : url;

		url = landing ? url+'&land_success='+landing : url;

		fetch(url)
		.then(res => res.json())
		.then (
			(result) => {
				this.setState({launchItems: result});
			},
			(error) => {
				console.log(error);
			}
		)
	}

	yearHandler = (year) => {
		let selectedYear = this.state.selectedYear;
		year = selectedYear === year ? '' : year;
		this.setState({selectedYear: year}, () => this.launchData());
	}

	launchHandler = (launch) => {
		let selectedLaunch = this.state.selectedLaunch;
		launch = selectedLaunch === launch ? '' : launch;
		this.setState({selectedLaunch: launch}, () => this.launchData());
	}

	landingHandler = (landing) => {
		let selectedLanding = this.state.selectedLanding;
		landing = selectedLanding === landing ? '' : landing;
		this.setState({selectedLanding: landing}, () => this.launchData());
	}

    render() {

    	let {selectedYear, selectedLaunch, selectedLanding, yearData, conditionData, launchItems} = this.state;

        return (
            <section className="site-wrapper">
                <div className="site-heading">
                    <h1>SpaceX Launch Programs</h1>
                </div>

                <div className="site-inner">

                    <div className="site-filters">
                        <h2>Filters</h2>

                        <span>Launch Year</span>

                        <div className="filter-row">
                        	{
								yearData && yearData.map((data, index) => {
									return <div key={index} className="filter-col">
										<span className={selectedYear === data ? 'active' : ''} onClick={() => {this.yearHandler(data)}}>{data}</span>
									</div>
								})
							}
                        </div>

                        <span>Successful Launch</span>

                        <div className="filter-row">
							{
								conditionData && conditionData.map((data, index) => {
									return <div key={index} className="filter-col">
										<span className={selectedLaunch === data ? 'active' : ''} onClick={() => {this.launchHandler(data)}}>{data}</span>
									</div>
								})
							}
                        </div>

                        <span>Successful Landing</span>

                        <div className="filter-row">
							{
								conditionData && conditionData.map((data, index) => {
									return <div key={index} className="filter-col">
										<span className={selectedLanding === data ? 'active' : ''} onClick={() => {this.landingHandler(data)}}>{data}</span>
									</div>
								})
							}
                        </div>
                    </div>
					{
						<LaunchItem launchItems={launchItems} />
					}
                </div>

                <div className="site-credit">
                    <strong>Developed by</strong>: Pankaj kumar
                </div>
            </section>
        )
    }
}

export default launchData;