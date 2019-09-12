// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

const account = {
//   // Текущий баланс счета
  balance: 0,

  //   // История транзакций
  transactions: [],

  //   /*
  //    * Метод отвечающий за добавление суммы к балансу
  //    * Создает объект транзакции и вызывает addTransaction
  //    */
  deposit(amountTrans) {
    this.addTransaction({
      id: this.transactions.length,
      type: Transaction.DEPOSIT,
      amount: amountTrans,
    });
    this.balance += amountTrans;
  },

  //   /*
  //    * Метод отвечающий за снятие суммы с баланса.
  //    * Создает объект транзакции и вызывает addTransaction
  //    *
  //    * Если amount больше чем текущий баланс, выводи сообщение
  //    * о том, что снятие такой суммы не возможно, недостаточно средств.
  //    */
  withdraw(amountTrans) {
    this.addTransaction({
      id: this.transactions.length,
      type: Transaction.WITHDRAW,
      amount: amountTrans,
    });
    this.balance -= amountTrans;
  },

  //   /*
  //    * Метод добавляющий транзацию в свойство transactions
  //    * Принимает объект трназкции
  //    */
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  //   /*
  //    * Метод возвращает текущий баланс
  //    */
  getBalance() {
    return this.balance;
  },

  //   /*
  //    * Метод ищет и возвращает объект транзации по id
  //    */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].id === id) {
        return this.transactions[i];
      }
    }
    return null;
  },

  //   /*
  //    * Метод возвращает количество средств
  //    * определенного типа транзакции из всей истории транзакций
  //    */
  getTransactionTotal(type) {
    let totalForType = 0;
    this.transactions.forEach((element) => {
      if (element.type === type) {
        totalForType += element.amount;
      }
    });
    return totalForType;
  },
};

console.group('Task-07');

account.deposit(26000.25);
account.deposit(4000.75);
account.withdraw(6000.50);
account.withdraw(3000.50);

console.log(account.getBalance()); // 21000
console.log(account.getTransactionDetails(2)); // {id: 2, type: withdarw, amount: 6000.5}
console.log(account.getTransactionTotal(Transaction.DEPOSIT)); // 30000.1

console.groupEnd();
