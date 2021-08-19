import React, {ChangeEvent, ChangeEventHandler, FC, useState} from "react";

export  type StartValueInputType = {
    startInputValue: number
    getStartInputValue: (event: ChangeEvent<HTMLInputElement>) => void
}

export const StartValueInput: FC<StartValueInputType> = ({startInputValue, getStartInputValue}) => {

    return (
        <div className="maxvalue_wrapper">
            <span>start value:</span>
            <input
                value={startInputValue}
                type="number"
                onChange={getStartInputValue}
            />
        </div>
    )
}


// export function StartValueInput(props: StartValueInputType) {
//
//     return (
//         <div className="maxvalue_wrapper">
//             <span>start value:</span>
//             <input
//                 value={props.startCount}
//                 type="number"
//                 onChange={ (e) => {props.startCountNumber(+e.currentTarget.value)}  }
//             />
//         </div>
//     )
// }

