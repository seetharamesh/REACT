class DivOne extends React.Component {
      render() {
      console.log("inside DivOne");
      console.log(this.props.name);
        return (
          <div id="divone">
          <DivTwo passingProp1 = {this.props.name} passingProp2={this.props.changeIt}/>
          </div>
        )
    }
}
