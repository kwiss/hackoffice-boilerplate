import Photo from './Photo';
import Note from './Note';

var Timeline = React.createClass({

    mixins: [ReactFireMixin],

    getInitialState: function () {
        return {
            items: []
        };
    },

    componentWillMount: function () {
        this.firebaseRef = firebase.database().ref("items");
        this.bindAsArray(this.firebaseRef, "items");
    },

    render: function () {

        var _this = this;
        var createTimeline = function (item, index) {

            switch (item.type) {
                case 'note':
                    return (<Note key={index} message={item.value} />);
                case 'photo':
                    return (<Photo key={index} url={item.url} date={item.date} author={item.createdBy} />);
                default:
                    return (<div key={index}>test</div>);
            }
        };
        return <div>{this.state.items.map(createTimeline) }</div>;
    }

});

export default Timeline;