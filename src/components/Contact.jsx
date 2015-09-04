import React        from 'react';
import Input        from './Input.jsx';
import Button       from './Button.jsx';
import Textarea     from './Textarea.jsx';

module.exports = React.createClass({

    componentDidUpdate: function() {
        componentHandler.upgradeDom();
    },

    handleTextFieldChange: function(e) {
        if (this.props.contactChange) this.props.contactChange(e.target.id, e.target.value);
    },

    onSubmitForm: function(e) {
        e.preventDefault();
        this.props.onSaveContact();
    },

    render: function() {
        return (
            <div className="centify">
                <form onSubmit={this.onSubmitForm}>
                    <div className="mdl-grid">
                        <h4>Please enter your contact details here:</h4>
                    </div>
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--6-col">
                            <Input onChange     ={this.handleTextFieldChange}
                                   id           ="name"
                                   error        ={this.props.error}
                                   value        ={this.props.contact.name} />
                        </div>
                        <div className="mdl-cell mdl-cell--6-col">
                            <Input onChange     ={this.handleTextFieldChange}
                                   id           ="mail"
                                   error        ={this.props.error}
                                   value        ={this.props.contact.mail} />
                        </div>
                    </div>
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--6-col">
                            <Input onChange     ={this.handleTextFieldChange}
                                   id           ="country"
                                   error        ={this.props.error}
                                   value        ={this.props.contact.country} />
                        </div>
                        <div className="mdl-cell mdl-cell--6-col">
                            <Input onChange     ={this.handleTextFieldChange}
                                   id           ="company"
                                   error        ={this.props.error}
                                   value        ={this.props.contact.company} />
                        </div>
                    </div>
                    <div className="mdl-grid">
                        <Textarea onChange     ={this.handleTextFieldChange}
                               type         ="textarea"
                               id           ="company description"
                               value        ={this.props.contact["company description"]} />
                    </div>
                    <div className="mdl-grid">
                            <Button type="submit" value="GO to step 2" />
                    </div>
                </form>
            </div>
        )
    }
});