---
title: Exposed within
status: site package
usage: |
  The "Exposed within" pattern is a way to progressively reveal an additional question only when it is relevant to the user.

  <div class="ds-c-alert">
    <div class="ds-c-alert__body">
      This is an experimental pattern that we are trying out as part of App 3. Feedback is welcome!
    </div>
  </div>
react-example: ExposedWithin.example.jsx
---

## Guidance

- Only expose one piece of information. If you need to ask for more than one thing, do so below the original question or on a separate screen.
- Limit to one level of nesting
- Be careful using this pattern with checkboxes. Exposing too many nested fields within a fieldset may be disorienting to users.

## Learn more

Some research on this pattern was mentioned in [Web Form Design](http://rosenfeldmedia.com/books/web-form-design/), by Luke Wroblewski:

> The “expose within radio buttons” method also hid irrelevant form inputs from people until they needed them. This meant it was easy on the eyes and completed quite quickly. In fact, this was the fastest solution we tested and had the lowest number of average fixations.

> If the number of selection-dependent inputs is substantial, this method breaks down quickly. The combination of page jumping and the movement of the initial set of options as the elements between them are revealed and hidden makes for a disorientating interaction that frequently has people questioning which user interface element triggers which set of options.

This pattern is also largely based on [the one suggested by GOV.uk](http://govuk-elements.herokuapp.com/form-elements/#form-toggle-content) and [Co-op Design Manual](http://coop-design-manual.herokuapp.com/styles/forms/form-patterns.html#progressive-reveals).
