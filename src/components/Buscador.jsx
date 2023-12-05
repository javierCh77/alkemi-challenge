import React from "react";

export default function Buscador() {
  return (
    <form className="d-flex align-items-center">
      <label className="form-label mb-0 mx-2">
        <input className="form-control " type="text" name="keywird"/>
      </label>
      <button className="btn btn-success " type="submit">
        Buscar
      </button>
    </form>
  );
}
