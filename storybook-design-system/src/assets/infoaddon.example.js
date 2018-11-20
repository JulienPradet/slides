export default `\
storiesOf('Authors', module)
  .add('Default', () => (
    <Author name="Alex Bulter" />
  ), {
    info: {
      text: \`
        Author allows to display the main informations of
        a person and is usually associated to an article.
      \`,
    },
  });\
`;