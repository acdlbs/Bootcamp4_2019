import React from "react";
class ViewBuilding extends React.Component {
  render() {
    const { selectedBuilding, data } = this.props;

    const codeGen = building => {
      if (!building) {
        return (
          <div>
            {" "}
            <i>Click on a name to view more information</i>
          </div>
        );
      } else {
        return (
          <div>
            <div class="container">
              <div class="row">
                <div class="col-sm-4">
                  <h3>Code</h3>
                  <p>{building.code}</p>
                </div>
                <div class="col-sm-4">
                  <h3>Name</h3>
                  <p>{building.name}</p>
                </div>
                <div class="col-sm-4">
                  <h3>Address</h3>
                  <p>{building.address}</p>
                </div>
                <div class="col-sm-4">
                  <h3>Coordinates</h3>
                  <p>
                    {building.coordinates &&
                      `${building.coordinates.latitude}, ${building.coordinates.longitude}`}
                  </p>
                </div>
              </div>
            </div>
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
