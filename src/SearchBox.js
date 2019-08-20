import React,{Component} from 'react';



class SearchBox extends Component
{

	render()
	{
		return(
			<div>
			<input onChange ={this.props.searchchange} className = "bg-light-green h2 pa2" type='Text' placeholder = "Enter the robot's name"/>
			</div>





		)
	}
}

export default SearchBox;
