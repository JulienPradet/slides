export default `\
// Authors.stories.js
const stories = storiesOf('Authors', module)
  .add('Author', function () {
    const story = <Author name="Alex Bulter" />;
    specs(() => describe('Author', function () {
      it('should display the name of the author', function () {
        let output = mount(story);
        expect(output.text()).toContain('Alex Bulter');
      });
    }));
    return story;
  });\
`;