export default `\
storiesOf('Authors', module)
  .add('Default', () => (
    <button onClick={linkTo('module', 'story')}>
      <Author name="Alex Bulter" />
    </button>
  ));\
`;