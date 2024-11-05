function bookTicket() {
    const movie = document.getElementById('movie').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    if (movie && date && time) {
        const confirmationMessage = `Ви забронювали квиток на фільм ${movie} на ${date} о ${time}.`;
        document.getElementById('confirmation').innerText = confirmationMessage;
        saveBooking(movie, date, time);
    } else {
        alert('Будь ласка, заповніть всі поля');
    }
}

function saveBooking(movie, date, time) {
    // TODO: Збереження даних у Firebase
    console.log(`Зберігається бронювання: ${movie}, ${date}, ${time}`);
}

