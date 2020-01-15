import React from "react";
import { Spinner } from "reactstrap";

export default function Loading() {
  return (
    <div className="loading">
      <Spinner color="danger" />
    </div>
  );
}
