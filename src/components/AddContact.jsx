import React from "react";

class AddContact extends React.Component {
  state = { name: "", contact: "" };
  addDetail = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.contact === "") {
      alert("All fields has to be filled");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", contact: "" });
  };
  render() {
    return (
      <div className="flex flex-col items-center mt-10">
        <div className="flex items-start mb-5">
          <h2 className="text-3xl font-bold">Add Contact</h2>
        </div>
        <form
          action=""
          onSubmit={this.addDetail}
          className="flex flex-col justify-center items-center w-[400px] p-5 bg-white shadow-lg rounded-lg"
        >
          <div className="flex flex-col items-start mb-4 w-full">
            <label htmlFor="name" className="text-lg mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col items-start mb-4 w-full">
            <label htmlFor="contact" className="text-lg mb-1">
              Number
            </label>
            <input
              type="number"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={this.state.contact}
              onChange={(e) => {
                this.setState({ contact: e.target.value });
              }}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 w-full hover:bg-blue-600"
          >
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
