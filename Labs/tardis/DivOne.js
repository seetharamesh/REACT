class DivOne extends React.Component {
      render() {
      console.log("inside DivOne");
      console.log(this.props.passingProp1);
        return (
          <div id="divone">
          <DivTwo passingProp1 = {this.props.passingProp1} passingProp2={this.props.passingProp2}/>
          </div>
        )
    }
}
