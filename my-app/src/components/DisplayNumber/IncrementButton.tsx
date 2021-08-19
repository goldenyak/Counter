import React from "react";

export type IncrementButtonPropsType = {
    displayValue: number
    startInputValue: number
    maxInputValue: number
    getCountNumber: () => void

}

export function IncrementButton(props: IncrementButtonPropsType) {
    return (
        <button className={ (props.displayValue < props.startInputValue ? 'disabled_button' : ''
                             || props.displayValue === 0 ? 'disabled_button' : ''
                             || props.displayValue === props.maxInputValue ? 'disabled_button' : '' ) }
                disabled={props.displayValue === props.maxInputValue}
                onClick={props.getCountNumber}>inc</button>
        )
}

