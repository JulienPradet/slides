export default `\
// Author.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import Author from '../Author';

storiesOf('Authors', module)
  .add('Article author', () => (
    <Author
      avatar={...}
      name="Alex Bulter"
      description="Global news reporter"
    />
  ))
  .add('Author', () => (
    // ...
  ));\
`;