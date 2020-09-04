const mongoose = require("mongoose")

const ExpenseSchema = mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    supplier: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    pricePerUnit: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    dateOfExpense: {
        type: Date,
        required: true
    },
    submittedBy: {
        type: String,
        required: true
    }
})

const Expense = module.exports = mongoose.model("Expense", ExpenseSchema)

module.exports.addExpense = (newExpense, callback) => newExpense.save(callback);

module.exports.getAllExpenses = (callback) => Expense.find({}, callback);

module.exports.editExpenseById = (id, updatedExpense, callback) => {
    Expense.findByIdAndUpdate(id,
        {
            item: updatedExpense.item,
            supplier: updatedExpense.supplier,
            amount: updatedExpense.amount,
            unit: updatedExpense.unit,
            pricePerUnit: updatedExpense.pricePerUnit,
            totalPrice: updatedExpense.totalPrice,
            submittedBy: updatedExpense.submittedBy
        }, callback)
}

module.exports.deleteExpenseById = (id, callback) => Expense.findByIdAndDelete(id, callback);

module.exports.getDailyExpenses = (date, callback) => {
    let oneDay = 60 * 60 * 24 * 1000;
    Expense.find({dateOfExpense: {$gte: date, $lte: new Date(date.getTime() + oneDay)}}, callback)
}

module.exports.getExpenseByItem = (item, startDate, endDate, callback) =>
    Expense.find({item: item, dateOfExpense: {$gte: startDate, $lte: endDate}}, callback)

module.exports.findAllDistinctItems = (startDate, endDate, callback) =>
    Expense.distinct('item', {dateOfExpense: {$gte: startDate, $lte: endDate}}, callback)
