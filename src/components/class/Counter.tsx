import React from "react";
type CounterPropsType = {
    message: string
}
type CounterStateType = {
    count: number
}
export class Counter extends React.Component <CounterPropsType, CounterStateType>{
    state = { count: 0, message: "Hello moto"};

    handleClick= () => {
        this.setState((prev) => ({count: prev.count +1}));
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}