import React, { useEffect } from "react";
import $ from 'jquery';

import './InputFloat.css';

const InputFloat = (props) => {

    useEffect(() => {
        $(".field-wrapper .field-placeholder").on("click", function () {
            $(this).closest(".field-wrapper").find("input").focus();
        });
        $(".field-wrapper input").on("keyup", function () {
            var value = $.trim($(this).val());
            if (value) {
                $(this).closest(".field-wrapper").addClass("hasValue");
            } else {
                $(this).closest(".field-wrapper").removeClass("hasValue");
            }
        });
    })
    return (
        <div className="field-wrapper">
            <input type={props.type} name={props.name} />
            <div className="field-placeholder"><span>{props.placeholder}</span></div>
        </div>
    );
}

export default InputFloat;