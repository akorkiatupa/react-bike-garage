import React from "react";

import {IBike} from "../../interfaces/IBikes";

interface IProps {
    bike:IBike
}

class Bike extends React.Component<IProps> {

    public constructor(props:IProps){
        super(props);
    }

    public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="col-sm">
                <p>{this.props.bike.id}</p>
                <p>{this.props.bike.make}</p>
                <p>{this.props.bike.model}</p>
                <p>{this.props.bike.year}</p>
                <img className="bike-image" src={this.props.bike.picture} alt="Bike image"/>
            </div>
        );
    }
}

export default Bike;