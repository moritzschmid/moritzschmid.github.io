import { React, useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styles from './Graph.module.css';
import "mafs/build/index.css";
import { Mafs, CartesianCoordinates, FunctionGraph, Text } from "mafs";



const Graph = ({ dataTestId }) => {


  const [termInput, setTermInput] = useState("2*x+5");
  const [term, setTerm] = useState(termInput);
  const [hasError, setHasError] = useState(false);
  const [min, setMin] = useState(-10);
  const [max, setMax] = useState(10);

  

  const handleChangeMin = event => {
    setMin(event.target.value);
  }

  const handleChangeMax = event => {
    setMax(event.target.value);
  }

  const handleChange = event => {
    setTermInput(event.target.value);
    try {
      function f(x) {
        return eval(event.target.value);
      }
      eval(f(1));
      setTerm(event.target.value);
      setHasError(false);
      console.log("set: " + event.target.value);
    }
    catch (ex) {
      setHasError(true);
    }

    console.log(event.target.value);
  };

  const data02 = [];
  for (var i = min; i <= max; i++) {
    function f(x) {
      return eval(term);
    }
    data02.push(
      { time: i, height: f(i) });
  }



  return (
    <div className={styles.graph} data-testid={dataTestId}>
      <table>
        <tbody>

          <tr>
            <td>
              <label htmlFor="term">Term: </label>
            </td>
            <td>
              <input name="Term" type="text" value={termInput} onChange={handleChange}></input>
            </td>
            <td>
              {hasError ? <span className={styles.error}> Fehler!</span> : <span></span>}
            </td>
          </tr>
          
        </tbody>
      </table>

{/* <tr>
            <td>
              <label htmlFor="min">Min: </label>
            </td>
            <td>
              <input name="min" type="number" value={min} onChange={handleChangeMin}></input>
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="max">Max: </label>
            </td>
            <td>
              <input name="max" type="number" value={max} onChange={handleChangeMax}></input>
            </td>
            <td>&nbsp;</td>
          </tr>  */}

      <div className={styles.chart} >
        <Mafs viewBox={{ y: [-max, max] }}>
          <Text x={-10} y={9}>I love math!</Text>
          <CartesianCoordinates subdivisions={2} />
          <FunctionGraph.OfX y={(x) => eval(term)} />
        </Mafs>
      </div>
    </div>
  );
}

Graph.propTypes = {};

Graph.defaultProps = {};

export default Graph;
