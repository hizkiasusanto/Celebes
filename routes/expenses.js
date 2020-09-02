const express = require("express")
const router = express.Router()
const Expense = require("../models/expense")
const User = require("../models/user")

router.post('/add-expense', User.authenticate(), (req, res) => {
    let newExpense = new Expense({
        item: req.body.item,
        supplier: req.body.supplier,
        amount: req.body.amount,
        unit: req.body.unit,
        pricePerUnit: req.body.pricePerUnit,
        totalPrice: req.body.totalPrice,
        dateOfExpense: req.body.dateOfExpense,
        submittedBy: req.body.submittedBy
    })
    Expense.addExpense(newExpense, (err) => {
        if (err) {
            res.json({success: false, msg: `Failed to add expense`})
        } else {
            res.json({success: true, msg: `Expense added successfully`})
        }
    })
})

router.patch('/edit-expense/:_id', User.authenticate(), (req, res) => {
    let updatedExpense = new Expense({
        item: req.body.expense.item,
        supplier: req.body.expense.supplier,
        amount: req.body.expense.amount,
        unit: req.body.expense.unit,
        pricePerUnit: req.body.expense.pricePerUnit,
        totalPrice: req.body.expense.totalPrice,
        dateOfExpense: req.body.expense.dateOfExpense,
        submittedBy: req.body.expense.submittedBy
    })
    Expense.editExpenseById(req.params._id, updatedExpense, (err) => {
            if (err) {
                res.json({success: false, msg: `Failed to edit expense`})
            } else {
                res.json({success: true, msg: `Expense edited successfully`})
            }
        }
    )
})

router.get('/get-all-expenses', User.authenticate(), (req, res) => {
    Expense.getAllExpenses((err, expenses) => {
        if (err) {
            res.send({success: false, msg: 'Failed to retrieve expenses'});
        } else {
            res.send({success: true, expenses});
        }
    })
})

router.get('/get-daily-expenses-in-range', User.authenticate(), (req, res) => {
    let sent = false;

    let expenses = [];

    let dates = [new Date(req.query.startDate)];
    while(dates[dates.length-1] < new Date(req.query.endDate)) {
        dates.push(new Date(dates[dates.length-1].getTime() + 60*60*24*1000));
    }
    dates.forEach((date) => {
        Expense.getDailyExpenses(date, (err, expense) => {
            if (err) {
                res.send({success:false,msg:'Failed to retrieve daily expenses'})
                sent = true;
            } else {
                if (expense.length > 0) {
                    let total = 0;
                    for (const exp of expense) {
                        total += exp.totalPrice
                    }
                    expenses.push({date, expense: total});
                } else {
                    expenses.push({date, expense: 0});
                }
                if (!sent && expenses.length === dates.length) {
                    res.send({success:true,expenses})
                }
            }
        })
    })
})

router.get('/get-expenses-by-item/:item', User.authenticate(), (req, res) => {
    let startDate = new Date(req.query.startDate);
    let endDate = new Date(new Date(req.query.endDate).getTime() + 60*60*24*1000);
    Expense.getExpenseByItem(req.params.item, startDate,endDate,(err, expenses) => {
        if (err) {
            res.send({success:false, msg: 'Failed to retrieve expenses'})
        } else {
            let total = 0;
            for (const exp of expenses) {
                total += exp.totalPrice;
            }
            res.send({success: true, expense: total})
        }
    })
})

router.get('/find-all-distinct-items', User.authenticate(), (req, res) => {
    let startDate = new Date(req.query.startDate);
    let endDate = new Date(new Date(req.query.endDate).getTime() + 60*60*24*1000);
    Expense.findAllDistinctItems(startDate, endDate, (err, items) => {
        if (err) {
            res.send({success: false, msg: 'Failed to retrieve distinct items'})
        } else {
            res.send({success: true, items})
        }
    })
})

router.delete('/delete-expense/:_id', User.authenticate(), (req, res) => {
    Expense.deleteExpenseById(req.params._id, (err,expense) => {
        if (err) {
            res.send({success:false, msg: 'Failed to delete expense'})
        } else {
            res.send({success:true, expense})
        }
    })
})

module.exports = router
