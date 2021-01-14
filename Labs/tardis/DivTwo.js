class DivTwo extends React.Component {

    render() {
      console.log("inside DivTwo");
      console.log(this.props.passingProp1);
      //according to assignment requirement we are passing called DivThree twice
        return (
          <div id="divtwo">
          <DivThree passingProp1 = {this.props.passingProp1} passingProp2={this.props.passingProp2}/>
          <DivThree passingProp1 = {this.props.passingProp1} passingProp2={this.props.passingProp2}/>

          </div>

        )
    }
}
