import React, { Component } from 'react';

class launchItem extends Component {

    render() {

        return (

			<div className="site-data">
	            {
		            this.props.launchItems.map((item, index) => {
		                return (
		                	<div key={index} className="data-col">
							    <div className="data-inner">
							        <div className="data-image">
							            <img alt={item.mission_name} src={item.links.mission_patch_small} />
							        </div>

							        <div className="data-value data-name">{item.mission_name} #{item.flight_number}</div>

							        <div className="data-value data-mission"><strong>Mission Ids</strong>: 
							        	<ul className="data-mission-list">
							        		{
							        			item.mission_id.map((list, index) => {
							        				return (<li key={index}>{list}</li>)
							        			})
							        		}
							        	</ul>
							        </div>

							        <div className="data-value data-year"><strong>Launch Year</strong>: {item.launch_year}</div>

							        <div className="data-value data-launch"><strong>Successful Launch</strong>: {''+item.launch_success}</div>

									<div className="data-value data-landing"><strong>Successful Landing</strong>: {''+item.launch_landing}</div>
							    </div>
							</div>
		                )
		            })
	            }
	        </div>
        )
    }
}

export default launchItem;