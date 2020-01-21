import React from 'react';

const prixInfo = () => {
    return (
<div>
<div className="pl-table table-bordered">
  <div className="pl-tbody">
    <div className="row">
      <div className="col">Total Organisme</div>
      <div className="col">0DH</div>
    </div>
    <div className="row">
      <div className="col">Total Client</div>
      <div className="col">8.60DH</div>
    </div>
    <div className="row">
      <div className="col total">Total</div>
      <div className="col total">8.60DH</div>
    </div>
  </div>
</div>
<p className="text-center">Arrêté la présente facture à la somme de : huit DHS et soixante centimes</p>
</div>

    );
}

export default prixInfo;
