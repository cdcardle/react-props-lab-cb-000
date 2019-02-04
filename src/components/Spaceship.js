import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship-info">
        <table>
          <tr>
            <th>Name</th>
            <th>Speed</th>
            <th>Has Rockets?</th>
            <th>Colors</th>
          </tr>
          <tr>
            <td>{ this.prop.name }</td>
            <td>{ this.prop.speed || "slow"}</td>
            <td>{ this.prop.hasRockets || false }</td>
            <td>{ this.prop.colors || ['black', 'red'] }</td>
          </tr>
        </table>
      </div>
    )
  }
}
