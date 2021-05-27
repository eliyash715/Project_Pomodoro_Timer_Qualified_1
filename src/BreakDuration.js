
import React from 'react'
import {minutesToDuration, secondsToDuration} from "../utils/duration"


function BreakDuration({decreaseBreakTime, breakTime, timeRan, increaseBreakTime}) {
	
	
	
	return(
	<div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {minutesToDuration(breakTime)}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
				  onClick={decreaseBreakTime}
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
				  disabled={timeRan}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
				onClick={increaseBreakTime}
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
				  disabled={timeRan}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
	)
}

export default BreakDuration
