import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: [],
    };

    this.onPick = this.onPick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.inputName = React.createRef();
    this.inputPekerjaan = React.createRef();
    this.inputAlamat = React.createRef();
    this.inputMakanan = React.createRef();
    this.inputTanggungan = React.createRef();
    this.inputCheck = React.createRef();
    this.inputFile = React.createRef();
    this.inputGender = React.createRef();
  }

  onPick(event) {
    let makanan = [...this.state.makanan];
    let idx = makanan.findIndex((elemen) => event.target.value === elemen);
    if (idx > 0) {
      makanan = [
        ...makanan.slice(0, idx),
        ...makanan.slice(idx + 1, makanan.length),
      ];
    } else if (idx === 0) {
      makanan = [...makanan.slice(idx + 1, makanan.length)];
    } else {
      makanan.push(event.target.value);
    }
    console.log(makanan);
    this.setState({ makanan });
  }

  onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    alert(
      `Namaku adalah ${this.inputName.current.value}, pekerjaanku sebagai ${this.inputPekerjaan.current.value}, rumahku di ${this.inputAlamat.current.value}`
    );
  }

  render() {
    return (
      <div className="container">
        <h1>Form</h1>

        <form onSubmit={this.onSubmit}>
          <label>
            Name:
            <input name="name" type="text" ref={this.inputName} />
          </label>
          <br />
          <label>
            Pekerjaan:
            <input name="pekerjaan" type="text" ref={this.inputPekerjaan} />
          </label>
          <br />
          <label>
            Jenis Kelamin:
            <br />
            <label>
              Jenis Kelamin:
              <br />
              <input
                type="radio"
                name="gender"
                value="male"
                ref={this.inputGender}
              />
              <label>Male</label>
              <br />
              <input
                type="radio"
                name="gender"
                value="female"
                ref={this.inputGender}
              />
              <label>Female</label>
            </label>
          </label>
          <br />
          <label>
            Alamat:
            <textarea name="alamat" ref={this.inputAlamat} />
          </label>
          <br />
          <label>
            Makanan:
            <select multiple ref={this.inputMakanan} onChange={this.onPick}>
              <option value="pizza">Pizza</option>
              <option value="burger">Burger</option>
              <option value="cilok">Cilok</option>
            </select>
          </label>
          <br />
          <label>
            Tanggungan:
            <input name="tanggungan" type="number" ref={this.inputTanggungan} />
          </label>
          <br />
          <label>
            File:
            <input name="file" type="file" ref={this.inputFile} />
          </label>
          <br />
          <label>
            Apakah anda MAUU?
            <input name="checkbox" type="checkbox" ref={this.inputCheck} />
          </label>
          <br />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default Form;
