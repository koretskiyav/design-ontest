import React        from 'react';
import Button       from './Button.jsx';

module.exports = React.createClass({

    componentDidUpdate: function() {
        componentHandler.upgradeDom();
    },

    onClick: function() {
        if (this.props.onChoice) this.props.onChoice(this.props.data.title);
    },

    render: function() {
        let sardStyle = this.props.data.selected ? "selected" : "";
        return (
                <div className="demo-card-square mdl-card mdl-shadow--2dp">
                    <div className={sardStyle + " mdl-card__title mdl-card--expand"}>
                        <h2 className="mdl-card__title-text">
                            {this.props.data.title}
                        </h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <h5>
                            Price: {Math.floor(this.props.data.price * this.props.currency.rate)} {this.props.currency.title}
                        </h5>
                    </div>
                    <div className="mdl-card__supporting-text">
                        {this.props.data.specification}
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <Button type="button" onClick={this.onClick} value="select" />
                    </div>
                </div>
        )
    }
});