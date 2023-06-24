import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Notification from './Notification/Notification.jsx';
import Section from './Section/Section.jsx';



 class App extends React.Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}

handleIncrement = feedback => {
  this.setState(prevState => ({
    [feedback]: prevState[feedback] + 1
  }))
};

handleIncrementGood = () => {
this.setState(prevState => {
  return {
    good: prevState.good + 1
   }
 })
};

handleIncrementNeutral = () => {
this.setState(prevState => {
  return {
    good: prevState.neutral + 1
   }
 })
};

handleIncrementBad = () => {
this.setState(prevState => {
  return {
    good: prevState.bad + 1
   }
 })
};

countTotalFeedback = () => {
  return this.state.good + this.state.neutral + this.state.bad
};

countPositiveFeedbackPercentage = () => {
  const totalFeedback = this.countTotalFeedback();

  if (totalFeedback === 0) {
    return 0
  };

  return Math.round(this.state.good / totalFeedback * 100)
}

render () {
  const optionsBtn = Object.keys(this.state);

  return (
    <div>
      <Section title='Leave your feedback'>
        <FeedbackOptions
            options={optionsBtn}
            onFeedback={this.handleIncrement}
          />
      </Section>

      {this.countTotalFeedback() === 0? <Notification message='Please, leave your feedback first to see statistics' /> : 
      <Section title="Statistics">
        <Statistics 
          good={this.state.good} 
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()} />
      </Section>}

    </div>
  )
}

};

export default App;
