import React, { Component } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackBtn/FeedbackOptions';

import { Section } from './Section/Section';

// import css from './FeedbackBtn/FeedbackOptions.module.css';
// import css from './Statistics/Statistics.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  addNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  addBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    const positivePercentage = (good / this.countTotalFeedback()) * 100;
    return Math.round(positivePercentage);
  };

  render() {
    return (
      <div className="Feedback">
        <Section
          title="Please leave your feedback"
          className="css.feedback__header"
        >
          <FeedbackOptions
            onGoodFeedback={this.addGoodFeedback}
            onNeutralFeedback={this.addNeutralFeedback}
            onBadFeedback={this.addBadFeedback}
          />
        </Section>

        <Section title="Statistics" className="css.feedback__header">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
