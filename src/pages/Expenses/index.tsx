import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { CloseExpenseFormButton, CreateExpenseForm } from "./style";

export const expenseTypes = ["Bot", "Tool", "Proxies", "Gmails", "Server", "Other"];
export const expenseSchedule = ["Onetime", "Monthly", "Yearly", "Lifetime"];

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [formOpen, setOpenForm] = useState(false);

    // New expense being created
    const [expense, setValues] = useState({
        expense: "", type: "", price: 0, recurring: "", details: ""
    });

    useEffect(() => {
        // load the expenses
    });

    const saveExpense = () => {
    }

    return (
        <>
            <CreateExpenseForm style={formOpen ? {display:"block"} : {display:"none"}}>
                <CloseExpenseFormButton icon={faXmark} onClick={ () => setOpenForm(false) }/>
                <form>
                    <label>Expense</label>
                    <input 
                        value={expense.expense}
                        type="text" 
                        name="expense" 
                        placeholder="Leaf Proxies" 
                        onChange={ (e) => setValues({ ...expense, expense: e.target.value }) } 
                        required
                    />

                    <label>Type</label>
                    <select 
                        value={expense.type} 
                        name="expense-types" 
                        onChange={ (e) => setValues({ ...expense, type: e.target.value }) }
                        required
                    >
                        { expenseTypes.map((x) => <option key={x.toLowerCase()}>{x}</option>) }
                    </select>

                    <label>Price</label>
                    <input 
                        value={expense.price}
                        type="number" 
                        name="price" 
                        placeholder="10.00" 
                        onChange={ (e) => setValues({ ...expense, price: Number(e.target.value) }) }
                        required
                    />

                    <label>Recurring</label>
                    <select 
                        value={expense.recurring} 
                        name="expense-recurring" 
                        onChange={ (e) => setValues({ ...expense, recurring: e.target.value }) }
                        required
                    >
                        { expenseSchedule.map((x) => <option key={x.toLowerCase()}>{x}</option>) }
                    </select>

                    <label>Details</label>
                    <input 
                        value={expense.details}
                        type="text"
                        name="expense-details"
                        placeholder="Purchased a total of 200 proxies."
                        onChange={ (e) => setValues({ ...expense, details: e.target.value }) }
                        required
                    />

                    <input type="submit" value="Submit" onClick={saveExpense}/>
                </form>
            </CreateExpenseForm>

            <button onClick={ () => setOpenForm(true) }>Show form</button>
        </>
    );
}

export default Expenses;