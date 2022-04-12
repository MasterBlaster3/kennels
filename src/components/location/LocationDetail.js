import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./LocationDetail.css"
import { getLocationById } from "../../modules/LocationsManager";
import { deleteLocation } from "../../modules/LocationsManager";

export const LocationDetail = () => { 
  const [location, setLocation] = useState({ name: "", address: "" })
  const [isLoading, setIsLoading] = useState(true)

  const {locationId} = useParams()
  const navigate = useNavigate()

  const handleDelete = () => { 
    setIsLoading(true)
    deleteLocation(locationId).then(() => {
      navigate("/locations")
    })
   }

  useEffect(() => {
    console.log('locationId', locationId);
    getLocationById(locationId)
    .then(location => {
      setLocation(location);
    });
    setIsLoading(false)
  }, [locationId])

  return (
    <section className="location">
      <picture>
        <img src={location.image} alt="vet storefront" className="locationPhoto"/>
      </picture>
    <h3 className="location__name">{location.name}</h3>
    <div className="location__address">{location.address}</div>
    <button type="button" onClick={handleDelete} disabled={isLoading}>See Ya</button>
    </section>
  )
}