import React from "react";

export const ExpenseTracker = () => {
  return (
    <React.Fragment>
        <style>
            {`
                /* Style to body tag*/
                body { 
                    display: flexbox; 
                    text-align: center; 
                    align-items: center; 
                } 
                  
                /* Style to expense summary */
                .summary { 
                    width: 25rem; 
                    display: flex; 
                    flex-direction: column; 
                    text-align: center; 
                    margin: auto; 
                    margin-bottom: 40px; 
                    padding: 1%; 
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
                } 
                  
                  
                .total { 
                    display: flex; 
                    flex-direction: row; 
                    margin: auto; 
                } 
                  
                .total>div { 
                    width: 200px; 
                } 
                  
                /* Style for the expense table and input form*/
                .root { 
                    width: fit-content; 
                    background-color: white; 
                    display: flex; 
                    margin: auto; 
                    padding: 2%; 
                    padding-top: 1%; 
                    justify-content: center; 
                    text-align: center; 
                    border-width: 6px; 
                    border: 6px grey; 
                    box-sizing: content-box; 
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
                    min-height: 30vh; 
                } 
                  
                  
                /* Style for the verticle bar*/
                .vertical { 
                    color: rgb(35, 35, 106); 
                    margin: 0 2%; 
                    border-width: 2px; 
                } 
                  
                /* Style for table*/
                #table { 
                    border-collapse: collapse; 
                    width: 50vw; 
                    border: 1px solid #ddd; 
                    font-size: 18px; 
                } 
                  
                /* Table */
                #table th, 
                #table td { 
                    text-align: left; 
                    padding: 12px; 
                } 
                  
                /* Table row */
                #table tr { 
                    border-bottom: 1px solid #ddd; 
                } 
                  
                /* Headings*/
                #table tr.titles { 
                    background-color: lightgreen; 
                } 
                  
                /* Style for each input item */
                .inputitem { 
                    display: flex; 
                    flex-direction: row; 
                    font-weight: bolder; 
                    font-size: large; 
                    padding: 1%; 
                } 
                  
                input, 
                select, 
                option { 
                    padding: 2%; 
                    border-radius: 5px; 
                    margin: 2%; 
                } 
                  
                button { 
                    font-size: large; 
                    border-radius: 5px; 
                    padding: 1%; 
                } 
                  
                .zoom { 
                    color: black; 
                    transition: transform .2s; 
                  
                } 
                  
                .zoom:hover { 
                    transform: scale(1.23); 
                  
                    color: green; 
                }
            `}
        </style>
      <div>
        <h1 style="color: green;">GeeksforGeeks</h1>
        <h3>Expense Tracker Using JavaScript</h3>
      </div>
      <div class="summary">
        <div>
          <h1>
            ✔ Balance:
            <span id="updatedBal">7000</span>
          </h1>
        </div>
        <br />
        <div class="total">
          <div>
            Total Income:
            <div>
              <h2 style="color: green;" id="updatedInc">
                25000
              </h2>
            </div>
          </div>
          <hr class="verticle" />
          <div>
            Total Expenses:
            <div>
              <h2 style="color: red;" id="updatedExp">
                18000
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="root">
        <div id="items">
          <h2>Expenses</h2>
          <table id="table">
            <tr class="titles">
              <th>S.no.</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Delete</th>
            </tr>
          </table>
        </div>
        <hr class="vertical" />
        <div id="new">
          <h2>Add new</h2>

          <div class="inputs">
            <div class="inputitem">
              <p style="width: 9rem">Entry type:</p>
              <select id="itemType">
                <option value="0">Expense</option>
                <option value="1">Income</option>
              </select>
            </div>
            <div class="inputitem">
              <p style="width: 9rem">Name:</p>
              <input id="name" type="text" value="" placeholder="name" />
            </div>
            <div class="inputitem">
              <p style="width: 9rem">Amount:</p>
              <input
                value="0"
                id="amount"
                name="mod"
                type="number"
                placeholder="amount"
              />
            </div>
          </div>
          <button onclick="addItem()">Add Expense</button>
        </div>
      </div>
    </React.Fragment>
  );
};
