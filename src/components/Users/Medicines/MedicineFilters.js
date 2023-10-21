import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMedicinesAction } from '../../../redux/slices/medicines/medicineSlices';
import SectionTitle from '../../SectionTitle/SectionTitle';
import MedicineCard from './MedicineCard';


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
  } = useSelector((state) => state?.medicines);

  return (
    <section className='section-padding'>
      <div className="wrapper space-y-10">
          <SectionTitle title="Medicines" subtitle="Browse all Medicines"/>
          {loading && <h2 className=" w-full text-xl  text-center">Loadding ........</h2>}
          {medicines?.medicines.length===0&& <h2 className=" w-full text-xl  text-center">Loadding ........</h2>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {
        medicines?.medicines?.map((medicine)=>(
          <MedicineCard key={medicine._id} medicine={medicine}/>
        ))
      }
     </div>
      </div>
    </section>
  )
}

export default MedicineFilters