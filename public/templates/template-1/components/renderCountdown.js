export function renderCountdown(container, data, countdownFunction) {
    if (data) {
        if (data.mainEventDate) {
            const eventDate = new Date(data.mainEventDate);

            countdownFunction('.simply-countdown-one', {
                year: eventDate.getFullYear(),
                month: eventDate.getMonth() + 1, // getMonth() dimulai dari 0
                day: eventDate.getDate(),
                enableUtc: false,
                hours: 0,
                minutes: 0,
                seconds: 0,
            });
        }

    }
    
  }
  