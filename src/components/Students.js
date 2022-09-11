import React from "react";
//import { Link } from "react-router-dom";

class Students extends React.Component {
  state = {
    students: []
  };

  componentDidMount() {
    this.getAllStudents();
  }

  fetchStudents = (items) => {
    let students = [];
    items.forEach(c => {
      const obj = {
          id: c.id,
          code: c.code,
          name: c.name,
          dni: c.dni
      }
      students.push(obj);

    })
    this.setState({students: students})
  }

  getAllStudents() {
    fetch('http://localhost:9000/api/students')
    .then(res => res.json())
    .then((data) => {
      this.fetchStudents(data);
    })
    .catch(console.log);
  }

  render() {
    return (
        <div class="wrapper">
          <div class="alert alert-primary" role="alert">
            Students List
          </div>
          {
          this.state.students.map((s) => {
            return <li key={s.id.toString()}>
                <div >
                  <span > {s.id} </span>
                  <span > {s.code} </span>
                  <span > {s.name} </span>
                  <span > {s.dni} </span>
                </div>
            </li>
          })
        }
      </div>
    );
  }
}
export default Students;