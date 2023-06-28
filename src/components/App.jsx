import React, { Component } from 'react';

import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification message/Notification';

import styles from './FeedbackOptions/FeedbackOptions.module.css';
import css from './Statistics/Statistics.module.css';

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
    const totalFeedback = this.countTotalFeedback();
    return (
      <div className="Feedback">
        <Section
          title="Please leave your feedback"
          className={styles.feedback__header}
        >
          <FeedbackOptions
            onGoodFeedback={this.addGoodFeedback}
            onNeutralFeedback={this.addNeutralFeedback}
            onBadFeedback={this.addBadFeedback}
          />
        </Section>

        <Section title="Statistics" className={css.statistics__header}>
          {totalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback yet" />
          )}
        </Section>
      </div>
    );
  }
}
