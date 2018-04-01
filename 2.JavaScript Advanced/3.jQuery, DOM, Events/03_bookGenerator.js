function createBook(selector, title, author, isbn) {
    let container = $(selector);

    let bookContainer = $('<div>');
    bookContainer.prop('id', 'book1').css('border', 'medium none');

    let titleParagraph = $('<p>').text(title).addClass('title');
    let authorParagraph = $('<p>').text(author).addClass('author');
    let isbnParagraph = $('<p>').text(isbn).addClass('isbn');

    let selectBtn = $('<button>').text('Select');
    let deselectBtn = $('<button>').text('Deselect');

    selectBtn.on('click', () => bookContainer.css('border', '2px solid blue'));
    deselectBtn.on('click', () => bookContainer.css('border', ''));

    titleParagraph.appendTo(bookContainer);
    authorParagraph.appendTo(bookContainer);
    isbnParagraph.appendTo(bookContainer);
    selectBtn.appendTo(bookContainer);
    deselectBtn.appendTo(bookContainer);

    bookContainer.appendTo(container);
}