import React, {Component} from 'react';
import Statistics from './Statistacs/Statistacs';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedBack = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = Math.round((this.state.good / total) * 100);
    return total ? percentage : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const feedbackOptions = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleFeedBack}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification massage="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
