import React, {Dispatch, SetStateAction } from "react";

export type ResetButtonPropsType = {
    startInputValue: number
    maxInputValue: number
    displayValue: number
    resetButton: () => void
}

export function ResetButton(props: ResetButtonPropsType) {
    return (
        <button  className={ (props.displayValue === 0 ? 'disabled_button' : '') }
                 disabled={props.displayValue === 0 && props.startInputValue === 0 && props.maxInputValue === 0}
                 onClick={props.resetButton}>reset</button>

    )
}