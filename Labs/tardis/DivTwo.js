class DivTwo extends React.Component {

    render() {
      console.log("inside DivTwo");
      console.log(this.props.name);
      //according to assignment requirement we are passing called DivThree twice
        return (
          <div id="divtwo">
          <DivThree passingProp1 = {this.props.name} passingProp2={this.props.changeIt}/>
          <DivThree passingProp1 = {this.props.name} passingProp2={this.props.changeIt}/>

          </div>

        )
    }
}
