import classNames from 'classnames';

var Note = React.createClass({

    render: function () {
        return (<div className="note">{this.props.message}</div>)
    }

});

export default Note;