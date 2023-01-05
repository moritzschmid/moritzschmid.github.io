import { React, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Graph.module.css';

//import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Brush, Label, LabelList } from 'recharts';

const Graph = ({dataTestId}) => {
  const [termInput, setTermInput] = useState("x*x");
  const [term, setTerm] = useState(termInput);
  const [hasError, setHasError] = useState(false);
  const [min, setMin] = useState(-20);
  const [max, setMax] = useState(20);

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
          <tr>
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
          </tr>
        </tbody>
      </table>


      <div className={styles.chart} >
        {/* <LineChart width={350} height={350} data={data02} syncId="test"  >
          <CartesianGrid stroke="#f5f5f5" fill="#e6e6e6" />
          <XAxis type="time" dataKey="time" height={40}   >
            <Label value="Uhrzeit" position="insideBottom" stroke="#ff7300" />
          </XAxis>
          <YAxis type="number" dataKey="height" width={60}  >
            <Label value="Höhne (m)" position="insideLeft" angle={90} stroke="#ff7300" begin={1000} />
          </YAxis>
          <Line
            key="time"
            type="monotone"
            dataKey="height"
            stroke="#ff7300"
            dot={false}
            strokeOpacity="100"
            strokeDasharray=""
          >
          </Line>
        </LineChart> */}
      </div>
    </div>
  );
}

Graph.propTypes = {};

Graph.defaultProps = {};

export default Graph;
