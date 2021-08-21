import React from 'react'


export default class HiddenDiv extends React.Component {

    render() {

        return (
            !(this.props.isHidden === false) &&
            <div>
                {this.props.children}
            </div>
        )
    }

}