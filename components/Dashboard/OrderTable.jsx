import * as React from "react";
import Table from "@mui/joy/Table";

export default function TableAlignment({ data }) {
  return (
    <Table sx={{ "& tr > *:not(:first-child)": { textAlign: "right" } }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Model</th>
          <th>Serial Number</th>
          <th>Purchase Date</th>
          <th>Manufacturer</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {data.map((machine) => (
          <tr key={machine.id}>
            <td>{machine.name}</td>
            <td>{machine.type}</td>
            <td>{machine.model}</td>
            <td>{machine.serialNumber}</td>
            <td>{new Date(machine.purchaseDate).toLocaleDateString()}</td>
            <td>{machine.manufacturer}</td>
            <td>{machine.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
