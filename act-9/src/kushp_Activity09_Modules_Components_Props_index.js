/**
 * Author: Kush Pamnani
 * ISU Netid: kushp@iastate.edu
 * Date: March 26th, 2024
 */


import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserCard } from './kushp_Activity09_Modules_Components_Props_UserCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';


// Replace 'root' with the actual ID of your root element if necessary
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <UserCard
      picture="https://freepngimg.com/thumb/mark_zuckerberg/70496-states-united-executive-world's-mark-zuckerberg-chief-thumb.png"
      name="Mark Zuckerberg"
      amount={3000}
      married={true}
      points={[100, 101.1, 202, 2]}
      address={{ street: "123 Bellmont Rd.", city: "Ames", state: "Iowa" }}
    />
    <UserCard
      picture="https://freepngimg.com/thumb/bill_gates/170351-gates-bill-face-hq-image-free.png"
      name="Bill Gates"
      amount={3500}
      married={true}
      points={[1, 2, 3, 4]}
      address={{ street: "5010 Av Some", city: "Tempe", state: "AZ" }}
    />
  </div>
);

// Filename: netId_Activity09_Modules_Components_Props_index.js
