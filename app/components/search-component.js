const React = require('react');

var SearchComponent = React.createClass({

  getInitialState: function() {
    return { searchString: ''};
  },

  handleChange: function(e) {
    this.setState({searchString:e.target.value});
  },

  render: function() {
    var libraries = this.props.items,
        searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      libraries = libraries.filter(function(l) {
        return l.name.toLowerCase().match( searchString );
      });
    }

    return (
      <div>
          <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Search" />
          <ul>
            {
              libraries.map(function(l, i) {
                return <li key={i}>{l.name} <a href={l.url}>{l.url}</a></li>
              })
            }
          </ul>
      </div>
    );
  }

});

module.exports = SearchComponent;
