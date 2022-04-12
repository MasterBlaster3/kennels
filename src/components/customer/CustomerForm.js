import React from "react";
import { useState, useEffect } from "react";
import { addCustomer } from "../../modules/CustomerManager";
import { useNavigate } from "react-router-dom";
import "./CustomerForm.css";
import { getAllLocations } from "../../modules/LocationManager";
 
export const CustomerForm = () => {
    const [customer, setCustomer] = useState({
        name: "",
        address: "",
        locationId: 0,
        iamge: ""
    })

    const [isLoading, setIsLoading] = useState(true)
    const [locations, setLocations] = useState([])
    const navigate = useNavigate()

    const handleControlledInputChange = (event) => {
        const newCustomer = {...customer}
        let selectedVal = event.target.value
        if (event.target.value.includes("I'd")){
            selectedVal = parseInt(selectedVal)
        }
        newCustomer[event.target.id] = selectedVal
        setCustomer(newCustomer)
    }
    useEffect(() => {
        getAllLocations().then(setLocations)
    }, [])

    const handleClickSaveCustomer = (event) => {
        event.preventDefault()

        if (customer.locationId === 0 || customer.name === "" || customer.address === "") {
            window.alert("That's gonna be a no from me dawg, unless you fill out this handy form.")
        } else {
            setIsLoading(true)
            addCustomer(customer).then(() = > {
                navigate("/customers")
            })
        }
    }

    return (
        
    )
}