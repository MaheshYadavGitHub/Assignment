import React from "react";
import Styles from "./TableRow.module.css";

const TableRow = ({ data }) => {
  return (
    <tr style={{ width: "1732px", height: "60px" }}>
      <td className={`${Styles["patient-details"]}`}>
        <img
          className={Styles["patient-image"]}
          src={data.patient.image}
          alt="user icon"
        />
        <div>
          <p className={Styles[`patient-name`]}>{data.patient.name}</p>
          <p className={Styles[`patient-clinic`]}>{data.patient.clinic}</p>
        </div>
      </td>
      <td className={`${Styles["font-style"]} align-middle`}>
        {data.planType}
      </td>
      <td className={`${Styles["font-style"]} align-middle`}>
        {data.paymentDate}
      </td>

      <td className={`${Styles["font-style"]} align-middle`}>
        <div>${data.balance.amount}</div>
        <div className={Styles["fade-font"]}>
          {data.balance.installments} payment(s)
        </div>
      </td>
      <td className={`${Styles["font-style"]} align-middle`}>
        <div>${data.paymentAmount.amount}</div>
        <div className={Styles["fade-font"]}>
          ${data.paymentAmount.financed} financed
        </div>
      </td>
      <td className="align-middle" style={{ marginRight: "32px" }}>
        <span
          className={`${Styles.status} ${
            Styles[`${data.status.toLowerCase().replace(" ", "")}-color`]
          }`}
        >
          <span
            className={`${
              Styles[`${data.status.toLowerCase().replace(" ", "")}-dot`]
            } rounded-circle`}
            style={{ width: "6px", height: "6px", margin: "6px" }}
          ></span>
          <div>{data.status}</div>
        </span>
      </td>
    </tr>
  );
};

export default TableRow;
