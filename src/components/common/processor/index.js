import React, { Component } from "react";
import AutoSelect from "../autoselect";
import { GetProductDetails } from "../../services";

const Arrays = (data, fieldName, fieldValue) => {
  let arrayItem = [];
  if (data && Array.isArray(data)) {
    data.map((item, key) => {
      arrayItem.push({ label: item[fieldName], value: item[fieldValue] });
      return null;
    });
  }
  return arrayItem;
};

export default class Processor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getList: {},
      selectedType: "",
    };
  }
  async componentDidMount() {
    this.getLocation();
  }
  async getLocation() {
    let list = await GetProductDetails.getProcessorList();
    this.setState({ getList: list.data });
  }
  handleSelectChange = (name, selected) => {
    if (name === "processorId") {
      this.setState({
        processorlist: {
          ...this.state.processorlist,
          [name]: selected.value,
        },
        selectedType: selected,
      });
      this.props.onSelectProcessor(selected.value);

      this.setState({ changed: true });
    }
  };

  render() {
    const { selectedType, getList } = this.state;
    return (
      <div>
        <AutoSelect
          className="basic-single"
          value={selectedType}
          onChange={this.handleSelectChange}
          isSearchable={true}
          name="processorId"
          options={Arrays(getList, "name", "id")}
        />
      </div>
    );
  }
}
