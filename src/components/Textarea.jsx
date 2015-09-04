import React from 'react';

module.exports = React.createClass({

    componentDidUpdate: function() {
        componentHandler.upgradeDom();
    },

    onChange: function(e) {
        if (this.props.onChange) this.props.onChange(e);
    },

    render: function() {
        return  <div className="textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <textarea className="mdl-textfield__input"
                              type      ="text"
                              rows      ="5"
                              id        ={this.props.id}
                              value     ={this.props.value}
                              onChange  ={this.onChange}/>
                    <label className="mdl-textfield__label text-align-center" htmlFor={this.props.id}>
                        {this.props.id}
                    </label>
                </div>
    }
});