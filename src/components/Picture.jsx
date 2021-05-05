import React from "react";

export default class Picture extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <picture>
          <source media="(min-width: 768px)" 
                  srcset={this.props.pcimg + ' 1x,' + this.props.pcimg + ' 2x'} ></source>
          <img src={this.props.spimg} />
        </picture>
      </>
    )
  }
}
