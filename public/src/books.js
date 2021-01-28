function findAccountById(accounts, myId) {
  return accounts.find(({ id }) => myId === id);
}

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let isBorrowed = books.filter((book) => !book.borrows[0].returned);
  let isntBorrowed = books.filter((book) => book.borrows[0].returned);
  return [isBorrowed, isntBorrowed];
}

function getBorrowersForBook(book, accounts) {
  let toReturn = [...book.borrows];
  book.borrows.forEach((element, index) => {
    let myAccount = findAccountById(accounts, element.id);
    toReturn[index] = { ...element, ...myAccount };
  });
  while (toReturn.length > 10) {
    toReturn.pop();
  }
  return toReturn;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
