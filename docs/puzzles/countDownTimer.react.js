var CountdownTimer = React.createClass({
  getInitialState: function() {
  	const date = new Date();
    return {
      min: date.getMinutes()
    };
  },
  
  tick: function() {
    this.setState({min: this.state.min + 1});
  },
  
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 60000);
  },
  
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  
  render: function() {
    const date = new Date();
    let minutes = this.state.min;
    let hour = date.getHours();

    if (minutes + 15 > 59) {
      hour = hour + 1;
      minutes = 15 - (60 - minutes);
      if (minutes < 10) minutes = '0' + minutes.toString();
    } else {
      minutes = minutes + 15;
    }

    if (hour > 23) hours = '00';
    
    return ( 
    <div> 
      {hour} : {minutes} 
    </div>
    );
  }
});

ReactDOM.render( <CountdownTimer /> ,
  document.getElementById('container')
);
