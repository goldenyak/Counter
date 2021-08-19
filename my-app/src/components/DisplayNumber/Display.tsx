import React from "react";

export type DisplayPropsType = {
    displayValue: number
    maxInputValue: number
}

export function Display(props: DisplayPropsType) {
    return (
        <div className={(props.displayValue === 0 ? 'number_field' : props.displayValue === props.maxInputValue ? "red" : "number_field")}
        >{props.displayValue}</div>
    )
}

