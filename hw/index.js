function done() {
    return new Promise((resolve) => {
        setTimeout(function() {
            alert('Готово');
        }, 2000);
    })
}

done();