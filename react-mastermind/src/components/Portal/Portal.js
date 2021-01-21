import { Component } from 'react'
import ReactDOM from 'react-dom'

const portalRoot = document.getElementById("portal")

class Portal extends Component {

    newElement = document.createElement("div")

    componentDidMount() {
        portalRoot.appendChild(this.newElement)
    }

    componentWillUnmount() {
        portalRoot.removeChild(this.newElement)
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.newElement)
    }
}

export default Portal;
