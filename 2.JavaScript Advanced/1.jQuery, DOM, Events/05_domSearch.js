function domSearch(selector, isCaseSensitive) {
    let container = $(selector);

    let addInput = $('<input>').prop('type', 'text');
    let addLabel = $('<label>').text('Enter text:').append(addInput);
    let addLink = $('<a>').addClass('button').text('Add').css('display', 'inline-block');
    let addControls = $('<div>').addClass('add-controls');

    addControls.append(addLabel);
    addControls.append(addLink);
    
    let searchInput = $('<input>').prop('type', 'text');
    let searchLabel = $('<label>').text('Search:').append(searchInput);
    let searchControls = $('<div>').addClass('search-controls');

    searchControls.append(searchLabel);

    let list = $('<ul>').addClass('items-list');
    let resultControls = $('<div>').addClass('result-controls');

    resultControls.append(list);

    container.append(addControls);
    container.append(searchControls);
    container.append(resultControls);

    addLink.on('click', function () {
        let anchor = $('<a>').addClass('button').text('X');
        anchor.on('click', function () {
            anchor.parent().remove();
        });

        $('<li>').addClass('list-item')
            .append(anchor)
            .append($('<strong>').text(addInput.val()))
            .appendTo(list);
        addInput.val('')
    });

    searchInput.on('keyup', function () {
        let listItems = $('li strong');
        let listItemsStrings = listItems.map((i, el) => $(el).text()).get();
        if (isCaseSensitive) {
            for (let key in listItemsStrings) {
                if (!listItemsStrings[key].includes(searchInput.val()) && searchInput.val() !== '') {
                    $(listItems[key].parentNode).css('display', 'none');
                } else {
                    $(listItems[key].parentNode).css('display', '');
                }
            }
        } else {
            for (let key in listItemsStrings) {
                if (!listItemsStrings[key].toLowerCase().includes(searchInput.val().toLowerCase())
                    && searchInput.val() !== '') {
                    $(listItems[key].parentNode).css('display', 'none');
                } else {
                    $(listItems[key].parentNode).css('display', '');
                }
            }
        }
    });
}