import React from "react";

type SettingsButtonType = {
    addValueToDisplay: () => void
    startInputValue: number
    maxInputValue: number
    displayValue: number
}

export function SettingsButton(props: SettingsButtonType) {


    return (
        // <button className={(props.startInputValue === 0 ? "disabled_button" : "settings_button"
        //                     && props.displayValue >= props.startInputValue ? "disabled_button" : "settings_button"
        //                     && props.maxInputValue <= props.startInputValue ? "disabled_button" : "settings_button")}
        //         onClick={props.addValueToDisplay}>set</button>

        <button className={(props.startInputValue === 0 ? "disabled_button" : "settings_button"
                            || props.displayValue >= props.startInputValue ? "disabled_button" : "settings_button"
                            || props.maxInputValue <= props.startInputValue ? "disabled_button" : "settings_button")}
                disabled={props.startInputValue < 0 || props.startInputValue > props.maxInputValue || props.startInputValue === props.maxInputValue}
                onClick={props.addValueToDisplay}>set</button>

    )
}

