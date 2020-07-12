import React from "react";
import List from '../views/components/list';


class ListKeys extends React.Component {
  render() {
    const daftarAngka = [1,2,3,4,5];
    return (
      <div className="App">
        <header className="App-header">
          <List list={daftarAngka} />
          <List list={[6,7,8,9,10]}/>
        </header>
      </div>
    );
  }
}

export default ListKeys;
