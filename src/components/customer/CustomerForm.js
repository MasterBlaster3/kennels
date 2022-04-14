import React from "react";
import { useState, useEffect } from "react";
import { addCustomer } from "../../modules/CustomerManager";
import { useNavigate } from "react-router-dom";
import "./CustomerForm.css";
import { getAllLocations } from "../../modules/LocationManager";

export const CustomerForm = () => {
  //State will contain both customer dat form inputs with useState()

  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    locationId: 0,
    iamge: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  //you well need the getAll in the LocationsManager and CustomersManager to complete this bit
  const [locations, setLocations] = useState([]);
  const [customers, setCustomers] = useState([]);

  const navigate = useNavigate();

  //when a field changes, update the state. The return will re-render and display based on the values in state
  //NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
  //Controlled component

  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
    const newCustomer = { ...customer };
    let selectedVal = event.target.value;
    // forms always provide values as strings. But we want to save the ids as numbers.
    if (event.target.value.includes("Id")) {
      selectedVal = parseInt(selectedVal);
    }
    /* customer is an object with properties.
		Set the property to the new value
		using object bracket notation. */
    newCustomer[event.target.id] = selectedVal;
    // update state
    setCustomer(newCustomer);
  };

  useEffect(() => {
    getAllLocations().then(setLocations);
  }, []);

  const handleClickSaveCustomer = (event) => {
    event.preventDefault();

    if (
      customer.locationId === 0 ||
      customer.name === "" ||
      customer.address === ""
    ) {
      window.alert(
        "That's gonna be a no from me dawg, unless you fill out this handy form."
      );
    } else {
      setIsLoading(true);
      addCustomer(customer).then(() => navigate("/customers"));
    }
  };

  return (
    <form className="customerForm">
      <h2 className="customerForm__title">New Customer</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Customer name:</label>
          <input
            type="text"
            id="name"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Customer name"
            value={customer.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Customer address:</label>
          <input
            type="text"
            id="address"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Customer address"
            value={customer.address}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select
            value={customer.locationId}
            name="locationId"
            id="locationId"
            onChange={handleControlledInputChange}
            className="form-control"
          >
            <option hidden disabled value="0">
              Select a location
            </option>
            {locations.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button
        type="button"
        className="btn btn-primary"
        disabled={isLoading}
        onClick={handleClickSaveCustomer}
      >
        Save Customer
      </button>
    </form>
  );
};
