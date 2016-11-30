import React from 'react';
import { translate, Interpolate } from 'react-i18next';

let Answer = ({ i18nAnswer }) => (
  <div className="content">
    <Interpolate
      i18nKey={i18nAnswer}
      useDangerouslySetInnerHTML
    />
  </div>
);

Answer.propTypes = {
  i18nAnswer: React.PropTypes.string.isRequired,
};

Answer = translate('publishNative')(Answer);

let Question = ({ i18nQuestion }) => (
  <div className="content is-medium">
    <strong style={{ color: '#69707a' }}>
      <Interpolate
        i18nKey={i18nQuestion}
        useDangerouslySetInnerHTML
      />
    </strong>
  </div>
);

Question.propTypes = {
  i18nQuestion: React.PropTypes.string.isRequired,
};

Question = translate('publishNative')(Question);

export const QuestionsAndAnswers = ({ questions }) => (
  <div>
    <hr />
    <h1 className="title">Any questions?</h1>
    <div className="subtitle">
      Here are some answers.
    </div>
    <br />
    {questions.map((i18nEntry, index) => (
      <div key={index}>
        <Question i18nQuestion={`Q&A-${i18nEntry}-answer`} key={`question-${index}`} />
        <Answer i18nAnswer={`Q&A-${i18nEntry}-answer`} key={`answer-${index}`} />
        <br />
      </div>
      )
    )
    }
    <div className="content is-medium">
      <strong style={{ color: '#69707a' }}>
        Have more questions? <a href="https://www.worona.org/get-help">Contact us</a>
      </strong>
    </div>
  </div>
);

QuestionsAndAnswers.propTypes = {
  questions: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default QuestionsAndAnswers;
