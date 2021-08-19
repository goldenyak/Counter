import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Display} from "./components/DisplayNumber/Display";
import {IncrementButton} from './components/DisplayNumber/IncrementButton';
import {ResetButton} from "./components/DisplayNumber/ResetButton";
import {SettingsButton} from "./components/SettingsDisplay/SettingsButton";
import {MaxValueInput} from "./components/SettingsDisplay/MaxValueInput";
import {StartValueInput} from "./components/SettingsDisplay/StartValueInput";

function App() {
    let [displayValue, setDisplayValue] = useState<number>(0)
    let [startInputValue, setStartInputValue] = useState<number>(0)
    let [maxInputValue, setMaxInputValue] = useState<number>(0)

    function getCountNumber() {
        displayValue++
        setDisplayValue(displayValue)
    }
    function resetButton() {
        setDisplayValue(0)
        setMaxInputValue(0)
        setStartInputValue(0)
    }
    function getStartInputValue(event: ChangeEvent<HTMLInputElement>) {
        setStartInputValue(+event.currentTarget.value)
    }
    function getMaxInputValue(event: ChangeEvent<HTMLInputElement>) {
        setMaxInputValue(+event.currentTarget.value)
    }
    function addValueToDisplay() {
        setDisplayValue(startInputValue)
        setMaxInputValue(maxInputValue)
    }

    return (
        <div className="main_wrapper">
            <div className="settings_wrapper">
                <div className="settings_display__wrapper">
                    <MaxValueInput maxInputValue={maxInputValue} getMaxInputValue={getMaxInputValue}/>
                    <StartValueInput getStartInputValue={getStartInputValue} startInputValue={startInputValue}/>
                </div>
                <div className="settings_button__wrapper">
                    <SettingsButton addValueToDisplay={addValueToDisplay}
                                    startInputValue={startInputValue}
                                    maxInputValue={maxInputValue}
                                    displayValue={displayValue}/>
                </div>
            </div>

            <div className="display_wrapper">
                <Display displayValue={displayValue} maxInputValue={maxInputValue}/>
                <div className='button_wrapper'>
                    <IncrementButton displayValue={displayValue}
                                     maxInputValue={maxInputValue}
                                     startInputValue={startInputValue}
                                     getCountNumber={getCountNumber}/>
                    <ResetButton startInputValue={startInputValue}
                                 maxInputValue={maxInputValue}
                                 displayValue={displayValue}
                                 resetButton={resetButton}/>
                </div>
            </div>

        </div>
    );
}

export default App;