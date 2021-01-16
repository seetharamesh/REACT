class DivTwo extends React.Component {

    render() {
      console.log("inside DivTwo");
      //according to assignment requirement we are passing called DivThree twice
        return (
          <div id="divthree">
          <DivThree />
          <DivThree />

          </div>

        )
    }
}
