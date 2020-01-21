import React from 'react';

const prixInfo = () => {
    return (
<div>
  <div className="pl-table">
    <div className="pl-tbody">
      <div className="row">
        <div className="col">Total Organisme</div>
        <div className="col">0DH</div>
      </div>
      <div className="row">
        <div className="col">Total Client</div>
        <div className="col">8.60DH</div>
      </div>
    </div>
    <div className="pl-thead">  
      <div className="row">
        <div className="col total">Total</div>
        <div className="col total">8.60DH</div>
      </div>
    </div>  
  </div>
  <br/>
  <p className="text-center font-weight-bold">Arrêté la présente facture à la somme de : huit DHS et soixante centimes</p>
</div>

    );
}

export default prixInfo;
