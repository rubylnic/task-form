import ReactDOM from 'react-dom';
import React from 'react';


class LifeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }
    


    render() {
        return (
        <>
            {/* {current: div.simple-div} */}
            <div className="simple-div"
            ref={this.divRef}
            >
            {this.props.name}
            </div>
        </>
    )};
        
}

LifeComponent.defaultProps = {
    name: 'Компонент'
};

ReactDOM.render(
    <LifeComponent />,
    document.getElementById('root')
);


export default LifeComponent;