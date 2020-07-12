import React from "react";

export default class List extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <>
        {list.map((elemen, index) => {
          return (
            <div key={index}>
              <h1>Elemen Ke - {index}</h1>
              <p>{elemen}</p>
            </div>
          );
        })}
      </>
    );
  }
}
