import React        from 'react';

module.exports = React.createClass({

    componentDidUpdate: function() {
        componentHandler.upgradeDom();
    },

    onClick: function() {
        if (this.props.onClick) this.props.onClick();
    },

    render: function() {
        return  <input  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                        value   ={this.props.value}
                        type    ={this.props.type}
                        onClick ={this.onClick} >
                </input>

    }
});