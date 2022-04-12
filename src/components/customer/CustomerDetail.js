import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCustomerById } from "../../modules/CustomersManager";
import './CustomerDetails.css';


export const CustomerDetails = () => {
  const [customer, setCustomer] = useState({ name: '', address: ''})

  const {customerId} = useParams()

  useEffect(() => {
    getCustomerById(customerId)
      .then(customer => {
        console.log(customer);
        setCustomer(customer);
      });
  }, [customerId]);

  return (
    <section className="customer">
      <picture>
        <img src={customer.image} alt="customer" className="customerPhoto"/>
      </picture>
    <h3 className="customer__name">{customer.name}</h3>
    <div className="customer__address">Address: {customer.address}</div>
    {/* What's up with the question mark???? See below.*/}
    <div className="customer__vetLocation">Current Vet: {customer.location?.name}</div>
  </section>
  )


}