class HelloWorld extends React.Component {
  render() {
    return <span>Hello, World!</span>;
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('hello-world-element')
);
