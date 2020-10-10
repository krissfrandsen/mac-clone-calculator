import React, { useState } from "react";
import Button from "../Button";
import Display from "../Display";
import { Row, RowItem } from "../Row";
import "./styles.css";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonPress = (value) => () => {
    const number = parseFloat(currentValue);
    const calculate = () => {
      if (operator === "+") {
        setCurrentValue((memory + parseFloat(currentValue)).toString());
      } else if (operator === "−") {
        setCurrentValue((memory - parseFloat(currentValue)).toString());
      } else if (operator === "x") {
        setCurrentValue((memory * parseFloat(currentValue)).toString());
      } else if (operator === "÷") {
        setCurrentValue((memory / parseFloat(currentValue)).toString());
      }
    };
    const logic = () => {
      if (operator !== null) {
        calculate();
      } else {
        setMemory(parseFloat(currentValue));
      }
    };

    if (value === "AC") {
      setCurrentValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (value === "-") {
      logic();
      setCurrentValue("0");
      setOperator("−");
      return;
    }

    if (value === "x") {
      logic();
      setCurrentValue("0");
      setOperator("x");
      return;
    }

    if (value === "÷") {
      logic();
      setCurrentValue("0");
      setOperator("÷");
      return;
    }

    if (value === "+") {
      logic();
      setCurrentValue("0");
      setOperator("+");
      return;
    }

    if (value === "=") {
      if (!operator) return;
      calculate();
      setMemory(null);
      setOperator(null);
      return;
    }
    setCurrentValue(parseFloat(number + value).toString());
  };

  return (
    <div className="calculator">
      <Display value={currentValue}> </Display>
      <Row>
        <RowItem>
          <Button
            className="row-item__reset"
            type="reset"
            onButtonClick={handleButtonPress}
            value="AC"
          />
        </RowItem>
        <RowItem>
          <Button type="operator" onButtonClick={handleButtonPress} value="÷" />
        </RowItem>
      </Row>
      <Row>
        {["7", "8", "9"].map((event) => (
          <RowItem key={event}>
            <Button
              type="number"
              onButtonClick={handleButtonPress}
              value={event}
            />
          </RowItem>
        ))}
        <RowItem>
          <Button type="operator" onButtonClick={handleButtonPress} value="x" />
        </RowItem>
      </Row>
      <Row>
        {["4", "5", "6"].map((event) => (
          <RowItem key={event}>
            <Button
              type="number"
              onButtonClick={handleButtonPress}
              value={event}
            />
          </RowItem>
        ))}
        <RowItem>
          <Button type="operator" onButtonClick={handleButtonPress} value="-" />
        </RowItem>
      </Row>
      <Row>
        {["1", "2", "3"].map((event) => (
          <RowItem key={event}>
            <Button
              type="number"
              onButtonClick={handleButtonPress}
              value={event}
            />
          </RowItem>
        ))}
        <RowItem>
          <Button type="operator" onButtonClick={handleButtonPress} value="+" />
        </RowItem>
      </Row>
      <Row>
        <RowItem>
          <Button type="number" onButtonClick={handleButtonPress} value="0" />
        </RowItem>
        <RowItem>
          <Button type="operator" onButtonClick={handleButtonPress} value="=" />
        </RowItem>
      </Row>
    </div>
  );
};

export default Calculator;
