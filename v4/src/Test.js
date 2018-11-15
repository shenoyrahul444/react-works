import React ,{Component} from 'react';

export default class Test extends Component{
state = {
    button1 : null
    
}
handleClick = (e) => {
    let flag = this.state.button1 ? false : true
    this.setState({
            [e.target.id] : flag
        });
    }

render(){

    let displayElement;
    if(this.state.button1){
        displayElement = <h1 >YesButton</h1>
    }else{
        displayElement = <h1>NoButton</h1>
    }


    
    return (
       
        <div>
            <div>
                <h4>Menu</h4>
                <button id="button1" onClick={this.handleClick}>Button 1</button>
            </div>
            <div>
                <h1>Display</h1>
                { displayElement }
            </div>
            
        </div>
    )
}    

}
