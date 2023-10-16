import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMedicinesAction } from '../../../redux/slices/medicines/medicineSlices';


const MedicineFilters = () => {

   //dispatch
   const dispatch = useDispatch();
  const[name,setName]=useState("");
  const[category,setCategory]=useState("");
  const[price,setPrice]=useState("");
  let medicineUrl = `medicines`;

  if(name){
    medicineUrl=`medicines?name=${name}`
  }
  if(price){
    medicineUrl=`medicines?price=${price}`
  }
  
  useEffect(()=>{
    dispatch(fetchMedicinesAction({
      url:medicineUrl
    }))
  },[dispatch,medicineUrl])


  const {
    medicines,
    loading,
    error,
  } = useSelector((state) => state?.medicines);

  console.log(medicines)
  return (
    <div>MedicineFilters</div>
  )
}

export default MedicineFilters