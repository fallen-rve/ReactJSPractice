const React = require('react');
const ReactDOM = require('react-dom');
const SearchComponent = require('./components/search-component');
const libraries = [
  { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'   },
  { name: 'AngularJS',   url: 'https://angularjs.org/'                     },
  { name: 'jQuery',      url: 'http://jquery.com/'                         },
  { name: 'Prototype',   url: 'http://www.prototypejs.org/'                },
  { name: 'React',       url: 'http://facebook.github.io/react/'           },
  { name: 'Ember',       url: 'http://emberjs.com/'                        },
  { name: 'Knockout.js', url: 'http://knockoutjs.com/'                     },
  { name: 'Dojo',        url: 'http://dojotoolkit.org/'                    },
  { name: 'Mootools',    url: 'http://mootools.net/'                       },
  { name: 'Underscore',  url: 'http://documentcloud.github.io/underscore/' },
  { name: 'Lodash',      url: 'http://lodash.com/'                         },
  { name: 'Moment',      url: 'http://momentjs.com/'                       },
  { name: 'Express',     url: 'http://expressjs.com/'                      },
  { name: 'Koa',         url: 'http://koajs.com/'                          },
];

var HelloWorld = React.createClass({
    render: function () {
        return (
            <div>
                Hello Reactjs Program
                <SearchComponent items={libraries}/>
            </div>
        )
    }
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
);
