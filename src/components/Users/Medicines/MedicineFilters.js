import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMedicinesAction } from "../../../redux/slices/medicines/medicineSlices";
import SectionTitle from "../../SectionTitle/SectionTitle";
import MedicineCard from "./MedicineCard";

const MedicineFilters = () => {
  //dispatch
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  let medicineUrl = `medicines`;
  if (name) {
    medicineUrl = `medicines?name=${name}`;
  }
  
  useEffect(() => {
    dispatch(
      fetchMedicinesAction({
        url: medicineUrl,
      })
    );
  }, [dispatch, medicineUrl]);

  const { medicines, loading } = useSelector((state) => state?.medicines);

  return (
    <section className="section-padding min-h-screen">
      <div className="wrapper space-y-10">
        <SectionTitle title="Medicines" subtitle="Browse all Medicines" />
       <div>
       <input
          onChange={(e) => setName(e.target.value)}
          className=" w-80 border border-blue-200 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="search medicine"
        />
       </div>
        {loading && <h2 className="text-2xl  text-center">Loadding ........</h2>}
        {medicines?.medicines.length === 0 && (
          <h2 className=" w-full text-2xl  text-center text-red-400 font-semibold">medicine not found</h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {medicines?.medicines?.map((medicine) => (
            <MedicineCard key={medicine._id} medicine={medicine} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicineFilters;
