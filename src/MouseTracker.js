import React from "react"

class MouseTracker extends React.Component {
    constructor(props){
    super(props);
    this.HandleMouseMovement = this.HandleMouseMovement.bind(this);
    this.state={x:0,y:0};
    }


    HandleMouseMovement(event){
        this.setState({
            x:event.clientX,
            y:event.clientY
        });
    }

    render(){
        return(
        <div style={{height:'100%',width:'100%'}}><h1>M O V E _T H E  _C U R S O R</h1>
            <div  style={{height:'100vh',width:'100%'}} onMouseMove={this.HandleMouseMovement} >
                    
                    <p> p o si_ti o n : {this.state.x}  , {this.state.y} </p>
                    <div style={{height:`${this.state.x/10}px`,width:`${this.state.x/10}px`,borderRadius:`${this.state.x}px`,
                    backgroundColor:'blueviolet',position:'absolute',left:this.state.x,top:this.state.y}} ></div>

                </div>
           </div>     
        )

    }

}

export default MouseTracker