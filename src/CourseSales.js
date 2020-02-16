import React, { Component } from 'react'

export class CourseSales extends Component {
    constructor(props){
        super(props);
        this.state ={
            total:0
        }
        this.sumPrice = this.sumPrice.bind(this);
    }
    sumPrice(price){
        this.setState({total : this.state.total + price});
    }
    render() {
        console.log(this.props.items);    
        const {total} = this.state;    
        return (
            <div>
                <h1>You can Buy courses here and pick:</h1>
                {this.props.items.map((course) =>
                    <div id="courses">                    
                        <Course name={course.name} price={course.price}   sumPrice={this.sumPrice} active={course.active} id={course.id} clickMain={this.props.clickMain} key={course.id}/>
                    </div>
                )}
                <p id="total">Total : {total}</p>
            </div>
        )
    }
}

class Course extends Component {
    constructor(props){
        super(props);
        this.state ={
            active : this.props.active
        }
    }  
    clicker = ()=>{
        var active = !this.state.active;
        console.log('buy');
        this.setState({active : active});
        this.props.sumPrice(active ? this.props.price : -this.props.price);   
        this.props.clickMain(this.props.id);            
    } 
    render() {
        const {name,price} = this.props;
        return (
            <div>
                <p className={this.state.active ? 'active' : ''}  onClick={this.clicker}>
                    {name} $ {price}
                </p>
            </div>
        )
    }
}



export default CourseSales
