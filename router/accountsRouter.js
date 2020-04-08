const express = require("express");

const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", (req, res) => {
  //   db.select()
  //     .from("accounts")
  db.get()
    .then((accounts) => {
      res.json(accounts);
    })
    .catch((err) => {
      res.status(500).json({ message: "error retrieving accounts" });
    });
});

// router.get('/:id', (req, res)=>{
//     const {id}=req.params
//     db.select()
//     .from('accounts')
//     .where({id})
//     .then(accounts=>{
//         const accounts =

//     })

// })

router.post("/", (req, res) => {
  db("accounts")
    .insert(accountData)
    .then((account) => {
      res.status(201).json(account);
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to post new account" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db("accounts")
    .where({ id })
    .update(changes)
    .then((account) => {
      if (account) {
        res.json({ updated: account });
      } else {
        res.status(404).json({ message: "invalid ID" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "error updating", err });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db("accounts")
    .where({ id })
    .del()
    .then((account) => {
      res.status(201).json(account);
      // if(account >= 0){
      //     res.json({deleted: account})
      // }else{
      //     res.status(404).json({message: 'account not found'})
      // }
    })
    .catch((err) => {
      res.status(500).json({ message: "error deleting account" });
    });
});

module.exports = router;
