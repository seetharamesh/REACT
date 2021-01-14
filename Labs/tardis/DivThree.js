class DivThree extends React.Component {

    render() {
      console.log("inside DivThree");
      console.log(this.props.name);
        return (
          <div id="divthree">
              <h3 onClick={() => this.changeIt(this.props.name)}> {this.props.changeIt}</h3>
          </div>
        )
    }
}
