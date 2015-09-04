import React        from 'react';

module.exports = React.createClass({

    componentDidUpdate: function() {
        componentHandler.upgradeDom();
    },

    onChoice: function(index) {
        if (this.props.onChoice) this.props.onChoice(index);
    },

    render: function() {
        let tabs = this.props.data.map(function(d, index) {
            return (
                <a href={d.selected ? "#starks-panel" : "#lannisters-panel"}
                   onClick={this.onChoice.bind(this, index)}
                   className ={"mdl-tabs__tab " + (d.selected ? "is-active" : "")}>
                    {d.title}
                </a>
            )
        }.bind(this));
        return (
            <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                <div className="mdl-tabs__tab-bar">
                    {tabs}
                </div>
            </div>
        );
    }
});