import React,{Component} from 'react';
import Card from "./Card";


class Cardlist extends Component
{
	render(){
		const Cardarray = this.props.robots.map((robo,i) => {
			return <Card name = {robo.name} id = {robo.id} key = {i}/>
		})
		
	return(
<div>
	{Cardarray}
</div>
)

	}
}

export default Cardlist;