import React from "react";
import { patientData } from "../../PatientData";
import TableRow from "../TableRow";

const DataTable = () => {
  return (
    <div
      className="col-lg-12 grid-margin stretch-card"
      style={{
        position: "absolute",
        width: "1734px",
        height: "1303px",
        left: "128px",
        top: "190px",

        background: "#FFFFFF",
        border: "1px solid rgba(52, 61, 86, 0.04)",
        boxSizing: "border-box",
        boxShadow: "0px 16px 24px rgba(52, 61, 86, 0.1)",
        borderRadius: "8px",
      }}
    >
      <div className="card border-start-0 border-end-0 border-top-0">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead style={{ height: "80px" }}>
                <tr
                  className="align-middle"
                  style={{
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "12px",
                    lineHeight: "17px",
                    color: "rgba(52, 61, 86, 0.5)",
                  }}
                >
                  <th className="border-0" style={{ paddingLeft: "32px" }}>
                    Patient Name
                  </th>
                  <th className="border-0"> Payment Type </th>
                  <th className="border-0"> Payment Date </th>
                  <th className="border-0"> Remaining balance </th>
                  <th className="border-0"> Payment Amount </th>
                  <th className="border-0"> Status </th>
                </tr>
              </thead>
              <tbody className="border-top-0">
                {patientData.map((patient, i) => (
                  <TableRow key={i} data={patient} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
