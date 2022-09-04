import React from 'react'
import './result.css'
const Result = (props) => {

    const display = Object.keys(props.result).map((d, key)=>{
            if(d !== "details") {
                return <div className="result__item" key={key}>
            <h3>{d}</h3>
            <table>
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Credit Hrs</th>
                  <th>Mid</th>
                  <th>Total Marks</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                <ResultRows result_row ={ props.result[d] } />
              </tbody>
            </table>
          <h3>GPA : {props.result["details"]["cgpa"][d]}</h3>
          </div>
            }
    })
  return (
      <>
        <div className="stu__details__container">
            <h1>{props.result["details"]["student_details"][0]}</h1>
            <h4>{props.result["details"]["student_details"][1]}</h4>
            <h2>CGPA ~ {props.result["details"]["student_details"][2]}</h2>
        </div>
        {display}
      </>
  )
}


const ResultRows = (props) => {

    const result_row_prop = props.result_row
    const row = Object.keys(result_row_prop).map((d, key)=>{
        return <tr key={key}>
            <td>{result_row_prop[d][3]}</td>
            <td>{result_row_prop[d][5]}</td>
            <td>{result_row_prop[d][6]}</td>
            <td>{result_row_prop[d][10]}</td>
            <td>{result_row_prop[d][11]}</td>
        </tr>
    })

    return row
}


export default Result