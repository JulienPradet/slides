export default `\
storiesOf('Authors', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Author name={text('Author name', 'Alex Bulter')} />
  ));\
`;