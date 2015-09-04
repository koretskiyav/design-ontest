import React        from 'react';
import _            from 'lodash';
import Block        from './Block.jsx';
import Currency     from './Currency.jsx';
import Button       from './Button.jsx';

module.exports = React.createClass({
    getInitialState: function() {
        return {
            data: [
                {selected: false, price: 100, title: 'Choice 1', specification: 'specification 1'},
                {selected: false, price: 200, title: 'Choice 2', specification: 'specification 2'},
                {selected: false, price: 300, title: 'Choice 3', specification: 'specification 3'},
            ],
            currency: [
                {selected: false,  title: 'USD', rate: 1},
                {selected: false, title: 'EUR', rate: 1.1},
                {selected: true, title: 'UAH', rate: 23},
                {selected: false, title: 'RUB', rate: 67}
            ]
        };
    },

    componentDidUpdate: function() {
        componentHandler.upgradeDom();
    },

    currencyChoice: function(index) {
        let currency = this.state.currency.map(function(elem, i) {
            index === i ? elem.selected = true : elem.selected = false;
            return elem;
        });
        this.setState({currency: currency});
    },

    onChoice: function(title) {
        let data = this.state.data.map(function(elem) {
            elem.title === title ? elem.selected = true : elem.selected = false;
            return elem;
        });
        this.setState({data: data});
    },

    onRequest: function() {
        let currency = _.find(this.state.currency, {selected: true});
        let data = _.find(this.state.data, {selected: true});
        if (this.props.sendRequest) this.props.sendRequest(data.title, currency.title);
    },

    render: function() {
            let currency = _.find(this.state.currency, {selected: true});
            let data = _.find(this.state.data, {selected: true});
            return (
                <div>
                    <Currency data={this.state.currency} onChoice={this.currencyChoice}/>
                    <div className="centify">
                        <div className="mdl-grid">
                            <div className="mdl-cell mdl-cell--4-col">
                                <Block data={this.state.data[0]} currency={currency} onChoice={this.onChoice} />
                            </div>
                            <div className="mdl-cell mdl-cell--4-col">
                                <Block data={this.state.data[1]} currency={currency} onChoice={this.onChoice} />
                            </div>
                            <div className="mdl-cell mdl-cell--4-col">
                                <Block data={this.state.data[2]} currency={currency} onChoice={this.onChoice} />
                            </div>
                        </div>
                        {currency && data ?
                            <div className="mdl-grid">
                                <Button type="button" onClick={this.onRequest} value="Send request" />
                            </div>
                        :
                            null
                        }
                    </div>
                </div>
        );
    }
});
