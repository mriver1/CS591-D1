import React from 'react';
import classnames from 'classnames';

export default function Button(props){
  return (
    <div className={classnames('radio', props.className)}>
      <label>
        <input
         
          value={props.value}
          checked={props.isSelected}
          onChange={props.onChange} />
        {props.radioButtonLabel}
      </label>
    </div>
  );
};
