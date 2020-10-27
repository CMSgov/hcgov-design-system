import { Choice, TextField } from '@cmsgov/design-system';
import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
  return (
    // Setting a min-height for demo purposes only
    <div style={{ minHeight: '250px' }}>
      <Choice
        name="preference"
        type="radio"
        value="phone"
        checkedChildren={
          <div className="hc-c-inset">
            <TextField
              labelClassName="ds-u-margin-top--0"
              label="Enter your phone number"
              name="phone"
            />
          </div>
        }
      >
        Phone
      </Choice>
      <Choice
        name="preference"
        type="radio"
        value="value"
        checkedChildren={
          <div className="hc-c-inset">
            <TextField
              labelClassName="ds-u-margin-top--0"
              label="Enter your email address"
              name="email"
            />
          </div>
        }
      >
        Email
      </Choice>
    </div>
  );
}

ReactDOM.render(<Example />, document.getElementById('js-example'));
