class ContextExample extends React.Component {
  static contextTypes = {
    authenticated: React.PropTypes.bool,
    user: React.PropTypes.object
  };

  render() {
    if (!this.context.authenticated) {
      return (
        <div>
          You need to <LoginLink />.
        </div>
      );
    }

    return (
      <div>
        Welcome {this.context.user.username}!
      </div>
    );
  }
}
