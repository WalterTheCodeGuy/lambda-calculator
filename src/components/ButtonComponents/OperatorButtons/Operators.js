import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
	// STEP 2 - add the imported data to state
	const [operatorState] = useState(operators);
	return (
		<div className="operator-buttons-container">
			{operatorState.map((button, index) => (
				<OperatorButton key={index} operators={button} />
			))}
		</div>
	);
};

export default Operators;
