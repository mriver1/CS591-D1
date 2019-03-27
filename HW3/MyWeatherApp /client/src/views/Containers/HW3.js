import React from 'react';
import { connect } from 'react-redux';


import { setLocationTextInput,
  setDefaultInput } from '../../store/actions/index';

export class Homepage extends React.Component {

  constructor(props) {
    super(props);

    this.props.actions.setDefaultInput();
    this.inputFieldRef = React.createRef();
  }

  

  handleButtonClick = (event) => {
    this.props.actions.setLocationTextInput({ locationData: this.inputFieldRef.current.value });
  }

  componentDidUpdate = (prevProps) => {
    const { locationData, locationType } = this.props;

    if (prevProps.locationData !== locationData) {
      this.props.history.push({
        pathname: '/current-weather',
        state: {
          locationType: locationType,
          locationData: locationData,
        },
      });
    }
  }

  render() {
    return (
      <div>
        <div className='header'>
          <h1>My Weather App</h1>
        </div>
        
        <div className='zipcodeInput'>
          <input
            ref={this.inputFieldRef}
            type='text'
            placeholder='Enter zipcode here'
            name='zipcode'
          />
          <button onClick={this.handleButtonClick}>GO</button>
        </div>
      </div>
    );
  }
};

<html>
<body style="background-color:powderblue;">

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>

const get_location = function(state) {
  const locationData = state && state.locationData;
  const locationType = state && state.locationType;

  return {
    locationType: locationType,
    locationData: locationData,
  };
};

const set_location = function(dispatch) {
  const InputActions = {
    setLocationTextInput: function(locationTextConfig) {
      dispatch(setLocationTextInput(locationTextConfig));
    },
    setDefaultInput: function() {
      dispatch(setDefaultInput());
    },
  };

  return {
    actions: InputActions,
  };
};

export default connect(get_location, set_location)(Homepage);
