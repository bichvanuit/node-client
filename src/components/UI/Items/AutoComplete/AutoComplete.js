import React, { useState } from "react";
import styled from "styled-components";

import { Airports } from '../../../../json/MoocJson';

import './AutoComplete.scss';

const Wrapper = styled.div`
    padding: 5px 10px;
    border-bottom: 1px solid #EEEEEE;
`;

const P1 = styled.p`
    font-weight: bold;
    padding-bottom: 5px;
`;

const P2 = styled.p`
    color: #888888;
    font-size: 12px;
`;

const AutoComplete = props => {

    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [userInput, setUserInput] = useState("");

    const suggestions = Airports;

    const onChangeInputHandler = e => {
        const userInput = e.currentTarget.value;
        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.airportName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
                || suggestion.symbol.toLowerCase().indexOf(userInput.toLowerCase()) > -1
                || suggestion.province.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setActiveSuggestion(0);
        setFilteredSuggestions(filteredSuggestions);
        setShowSuggestions(true);
        setUserInput(e.currentTarget.value);
    };

    const onClickInputHandler = e => {
        const airportName = e.currentTarget.querySelector("p:nth-child(1)").innerText;
        const symbol = e.currentTarget.querySelector("p:nth-child(2)").innerText;

        setActiveSuggestion(0);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
        setUserInput(`${airportName} (${symbol})`);
        props.onChange(symbol);
    };

    const onKeyDownInputHandler = e => {

        if (e.keyCode === 13) {
            const suggestion = filteredSuggestions[activeSuggestion];

            setActiveSuggestion(0);
            setShowSuggestions(false);
            setUserInput(`${suggestion.province} (${suggestion.symbol} - ${suggestion.airportName})`);
            props.onChange(suggestion.symbol);
        }
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }
            setActiveSuggestion(activeSuggestion - 1);
        }

        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            setActiveSuggestion(activeSuggestion + 1);
        }
    };

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
            suggestionsListComponent = (
                <ul className="suggestions">
                    {filteredSuggestions.map((suggestion, index) => {
                        let className;

                        if (index === activeSuggestion) {
                            className = "suggestion-active";
                        }

                        return (
                            <Wrapper key={index} className={className} onClick={onClickInputHandler} >
                                <P1>{suggestion.province}</P1>
                                <P2>{suggestion.symbol} - {suggestion.airportName}</P2>
                            </Wrapper>
                        );
                    })}
                </ul>
            );
        } else {
            suggestionsListComponent = (
                <div className="no-suggestions">
                    <em>No suggestions, you're on your own!</em>
                </div>
            );
        }
    }

    return (
        <React.Fragment>
            <input
                type="text"
                onChange={ onChangeInputHandler }
                onKeyDown={ onKeyDownInputHandler }
                value={userInput}
            />
            {suggestionsListComponent}
        </React.Fragment>
    )
};

export default AutoComplete;