function findAccountById(accounts, myId) {
  return accounts.find(({ id }) => myId === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((elA, elB) => {
    return elB.name.last > elA.name.last ? -1 : 1;
  });
}

function numberOfBorrows(account, books) {
  return books.reduce((acc, element) => {
    acc += element.borrows.filter(({ id }) => {
      return id === account.id;
    }).length;
    return acc;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return (checkedOut = books.filter((book) => {
    let bookHolder = book.borrows.some(
      (element) => element.id === account["id"] && element["returned"] === false
    );
    if (bookHolder)
      book["author"] = authors.find((element) => element.id === book.authorId);
    return bookHolder;
  }));
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
