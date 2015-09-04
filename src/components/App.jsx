import React        from 'react';
import $            from 'jquery';
import Contact      from './Contact.jsx';
import Choice       from './Choice.jsx';

let contactStorage = localStorage.getItem('contact');

module.exports = React.createClass({

    getInitialState: function() {
        return {contact: contactStorage ? JSON.parse(contactStorage) : {}};
    },

    componentDidUpdate: function() {
        componentHandler.upgradeDom();
    },

    saveContact: function() {
        if (this.state.contact.name &&
            this.state.contact.mail &&
            this.state.contact.country &&
            this.state.contact.company)
        {
            this.setState({submit: true});
        } else {
            this.setState({error: true});
        }
    },

    contactChange: function(id, value) {
        this.state.contact[id] = value;
        localStorage.setItem('contact', JSON.stringify(this.state.contact));
        this.setState({contact: this.state.contact});
    },

    sendRequest: function(choice, currency) {
        $.ajax({
            method: 'POST',
            url: './order/create/',
            data: {
                name:               this.state.contact.name,
                mail:               this.state.contact.mail,
                country:            this.state.contact.country,
                company:            this.state.contact.company,
                companyDescription: this.state.contact['company description'],
                choice:             choice,
                currency:           currency
          }
        })
            .done(function() {
                alert('Order created!')
            })
            .fail(function() {
                alert('Request FAIL!')
            });
    },

    render: function() {
        return  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
                    {this.state.submit ?
                        <Choice sendRequest={this.sendRequest} contact={this.state.contact}/>
                    :
                        <Contact onSaveContact  ={this.saveContact}
                                 contact        ={this.state.contact}
                                 contactChange  ={this.contactChange}
                                 error          ={this.state.error} />
                    }
                </div>
    }
});