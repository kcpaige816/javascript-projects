// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pageCount, timesCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pageCount = pageCount;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }

    checkout(uses=1) {
        this.timesCheckedOut += uses;
    }
}

class Manual extends Book {
    constructor(title, author, copyright, ISBN, pageCount, timesCheckedOut, discarded) {
        super(title, author, copyright, ISBN, pageCount, timesCheckedOut, discarded);
    }

    dispose(currentYear){
        if (currentYear-this.copyright > 5) {
            this.discarded = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyright, ISBN, pageCount, timesCheckedOut, discarded) {
        super(title, author, copyright, ISBN, pageCount, timesCheckedOut, discarded);
    }

    dispose(){
        if (this.timesCheckedOut > 100) {
            this.discarded = 'Yes'
        }
    }
}

let newNovel = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 111111111111, 432, 32, 'No')

let newManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '000000000000', 1147, 1, 'No')

// Code exercises 4 & 5 here:

newNovel.dispose(2024);
newManual.checkout(5);