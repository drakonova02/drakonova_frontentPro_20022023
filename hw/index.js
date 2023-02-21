function done() {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve('Готово');
        }, 2000);
    })
}

done().then(result => console.log(result))