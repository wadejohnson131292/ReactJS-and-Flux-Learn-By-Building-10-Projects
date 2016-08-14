var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm.js');

function getAppState(){

    console.log('App.getAppState()');

    return {
        showForm: AppStore.getShowForm(),
        workouts: AppStore.getWorkouts()
    };
}


var App = React.createClass ({

    getInitialState: function(){
        return getAppState();
    },

    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function(){
        AppStore.removeChangeListener(this._onChange);
    },

    onShowFormClick: function(e){

        console.log('App.onShowFormClick()');

        e.preventDefault();
        AppActions.showForm();
    },

    render: function(){

        // console.log(this.state.workouts);

        if(this.state.showForm){
            var form = <AddForm />
        } else {
            var form = '';
        }

        return(
            <div>
                <h1 className="text-center page-header">WorkoutLogger</h1>
                <a onClick={this.onShowFormClick} href="#" className="btn btn-primary btn-block">Add Workout</a>
                <br/>
                {form}
                <br/>
                WORKOUTS
                <br/>
            </div>
        )
    },

    _onChange: function(){
        this.setState(getAppState());
    }
});

module.exports = App;
