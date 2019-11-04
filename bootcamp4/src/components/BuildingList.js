import React from "react";

class BuilingList extends React.Component {
  render() {
    const { data, selected, filter, remove } = this.props;

    const buildingList = data
      .filter(
        name =>
          name.code.toLowerCase().includes(filter.toLowerCase()) ||
          name.name.toLowerCase().includes(filter.toLowerCase())
      )
      .map(directory => {
        return (
          <tr key={directory.id}>
            <td onClick={event => selected(directory.id)}>{directory.code} </td>
            <td onClick={event => selected(directory.id)}>
              {" "}
              {directory.name}{" "}
            </td>
            <td>
              <button
                onClick={event => {
                  remove(directory.id);
                }}
                type="button"
                class="close"
                aria-label="Close"
                style={{ color: "red" }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });

    return <div>{buildingList}</div>;
  }
}
export default BuilingList;
