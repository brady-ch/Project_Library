let booksMethods = require("./books.js");

function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  [borrowed, notBorrowed] = booksMethods.partitionBooksByBorrowedStatus(books);
  return borrowed.length;
}

function getMostCommonGenres(books) {
  let myObject = {};
  books.forEach(({ genre }) => {
    myObject[genre]
      ? (myObject[genre].count += 1)
      : (myObject[genre] = { count: 1, name: genre });
  });
  return toArraySortAndSplice(myObject);
}

function getMostPopularBooks(books) {
  let myObject = {};
  books.forEach(({ title, borrows }) => {
    myObject[title] = { count: borrows.length, name: title };
  });
  return toArraySortAndSplice(myObject);
}

function getMostPopularAuthors(books, authors) {
  let myObject = {};
  books.forEach(({ authorId, borrows }) => {
    author =
      booksMethods.findAuthorById(authors, authorId).name.first +
      " " +
      booksMethods.findAuthorById(authors, authorId).name.last;
    myObject[author]
      ? (myObject[author].count += borrows.length)
      : (myObject[author] = { count: borrows.length, name: author });
  });
  return toArraySortAndSplice(myObject);
}

function toArraySortAndSplice(inputObject) {
  returnArray = [];
  Object.keys(inputObject).forEach((element) => {
    returnArray.push(inputObject[element]);
  });
  returnArray.sort((a, b) => b.count - a.count);
  returnArray.splice(5);
  return returnArray;
}
module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
