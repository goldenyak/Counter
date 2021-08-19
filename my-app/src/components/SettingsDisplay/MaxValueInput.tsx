import React, {ChangeEvent} from "react";

type MaxValueInputType = {
    maxInputValue: number
    getMaxInputValue: (event: ChangeEvent<HTMLInputElement>) => void
}

export function MaxValueInput(props: MaxValueInputType) {
    return (
        <div className="maxvalue_wrapper">
            <span>max value:</span>
            <input
                value={props.maxInputValue}
                type="number"
                onChange={props.getMaxInputValue}/>
        </div>
    )
}