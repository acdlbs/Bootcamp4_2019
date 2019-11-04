import React from "react";
class ViewBuilding extends React.Component {
  render() {
    const { selectedBuilding, data } = this.props;

    const codeGen = b => {
      if (b) {
        return (
          <div>
            <div class="container">
              <div class="row">
                <div class="col-sm-4">
                  <h3>Code</h3>
                  <p>{b.code}</p>
                </div>
                <div class="col-sm-4">
                  <h3>Name</h3>
                  <p>{b.name}</p>
                </div>
                <div class="col-sm-4">
                  <h3>Address</h3>
                  <p>{b.address}</p>
                </div>
                <div class="col-sm-4">
                  <h3>Coordinates</h3>
                  <p>
                    {b.coordinates.latitude},{b.coordinates.longitude}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            {" "}
            <i>Click on a name to view more information</i>
          </div>
        );
      }
    };

    return (
      <div>
        <p>
          {codeGen(
            data.find(targetBuilding => targetBuilding.id === selectedBuilding)
          )}
        </p>
      </div>
    );
  }
}
export default ViewBuilding;
