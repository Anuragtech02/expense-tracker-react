import React, { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import styles from "./AddTransaction.module.css";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div className={styles.container}>
      <h3>Add Transaction</h3>
      <div className={styles.underLine}></div>
      <form className={styles.formControl}>
        <h4>Description</h4>
        <TextField
          className={styles.input}
          label="Enter Description"
          variant="outlined"
          size="small"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h4>Amount</h4>
        <h4>(use '-' for debit and '+' for credit, ex. +200 )</h4>
        <TextField
          className={styles.input}
          label="Enter Amount"
          variant="outlined"
          size="small"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div>
          <Button
            className={styles.submitBtn}
            variant="contained"
            color="secondary"
          >
            Add Transaction
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
