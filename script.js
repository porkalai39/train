function bookTicket() {
    const trainName = document.getElementById('train-name').value;
    const departureDate = document.getElementById('departure-date').value;
  
    fetch('/book_ticket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        trainName: trainName,
        departureDate: departureDate,
      }),
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('message').innerText = data.message;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  