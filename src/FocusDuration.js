
import React from 'react'
import {minutesToDuration, secondsToDuration} from "../utils/duration"

function FocusDuration({focusTime, decreaseFocusTime, timeRan, increaseFocusTime}) {
	
	
	return (
	<div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              Focus Duration: {minutesToDuration(focusTime)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <button
				onClick={decreaseFocusTime}
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
				disabled={timeRan}
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <button
				onClick={increaseFocusTime}
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
				disabled={timeRan}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
	)
}

export default FocusDuration;