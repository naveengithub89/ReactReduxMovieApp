import React from "react"
import ReactRedirect from "react-redirect"

export default class Redirect extends React.Component {

    render() {

        if (this.props.doRedirect) {
            const location = '/imdb/' + this.props.imdbID;
            return (
                <ReactRedirect location={ location }>
                </ReactRedirect>
            )
        } else {
            return (<div></div>)
        }
    }
}
