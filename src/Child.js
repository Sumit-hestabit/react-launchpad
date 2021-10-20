import React from "react";

export default class extends React.Component{
    render()
    {
        return(
            <div>
                <h3>{this.props.data.name}</h3>
                <button onClick={()=>this.props.data.changeUnit("Child Hestabit")}>Click</button>
            </div>
        )
    }
}