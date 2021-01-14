class DivThree extends React.Component {

    render() {
      console.log("inside DivThree");
      console.log(this.props.passingProp1);
        return (
          <div id="divthree">
              <h3 onClick={() => this.props.passingProp2(this.props.passingProp1)}> {this.props.passingProp1}</h3>
          </div>
        )
    }
}
