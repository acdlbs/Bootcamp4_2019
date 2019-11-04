import React from "react";
import Search from "./components/Search";
import ViewBuilding from "./components/ViewBuilding";
import BuildingList from "./components/BuildingList";
import Credit from "./components/Credit";
import AddBuilding from "./components/AddBuilding";
import Modal from "./components/Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      selectedBuilding: 0,
      show: false,
      code: "",
      name: "",
      address: "",
      data: props.data
    };
  }

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  test = updatedData => {
    this.setState({
      data: updatedData
    });
  };
  remove = targetId => {
    const removed = this.state.data.filter(data => data.id !== targetId);
    console.log(removed);
    this.setState({
      data: removed
    });
    console.log(this.state.data);
  };

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    });
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    });
  }

  render() {
    return (
      <div className="bg">
        <div className="row">
          <div style={{ textAlign: "center" }}>
            <h1>UF Directory App</h1>
            <button
              class="toggle-button"
              id="centered-toggle-button"
              onClick={e => {
                this.showModal(e);
              }}
            >
              {" "}
              Add Building{" "}
            </button>
          </div>
        </div>

        <Search
          filterVal={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <Modal onClose={this.showModal} show={this.state.show}>
            <AddBuilding test={this.test} data={this.state.data} />
          </Modal>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    selected={this.selectedUpdate.bind(this)}
                    filter={this.state.filterText}
                    test={this.test}
                    remove={this.remove}
                    selectedBuilding={this.state.selectedBuilding}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                data={this.state.data}
                selectedBuilding={this.state.selectedBuilding}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
