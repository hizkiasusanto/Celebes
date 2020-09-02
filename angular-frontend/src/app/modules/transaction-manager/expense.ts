export interface Expense {
  item: string,
  supplier: string,
  amount: number,
  unit: string,
  pricePerUnit: number,
  totalPrice: number,
  dateOfExpense: Date,
  submittedBy: string
}

