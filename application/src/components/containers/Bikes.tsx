import React from "react";
import axios from "axios";

import {IBike} from "../../interfaces/IBikes";
import Bike from "./Bike";

interface IState {
    bikes:IBike[];
}

class Bikes extends React.Component<{},IState>{

    constructor(props :any){
        super(props);
        this.state = {
            bikes:[]
        };
    };

    public componentDidMount(): void {
        axios.get<IBike[]>("/api/bikes")
            .then(response => {
                this.setState({bikes:response.data});
            });
    }

    public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="container">
            <h3>Bikes</h3>
            <div className="bikes row">
                {this.state.bikes.map(bike =>(
                   <Bike bike={bike} />
                ))}
            </div>
            </div>
        );
    }
}

export default Bikes;