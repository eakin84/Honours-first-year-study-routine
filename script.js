function setAlarms() {
  const schedule = [
    { time: '7:30 AM', subject: 'Introduction to Ulumul Quran' },
    { time: '9:00 AM', subject: 'Tajweedul Quran (Memorizing & Translation)' },
    { time: '10:00 AM', subject: 'Functional Arabic Language' },
    { time: '11:00 AM', subject: 'Bangla Language' },
    { time: '6:30 PM', subject: 'Basic English' },
    { time: '7:30 PM', subject: 'Islamic Economics' },
    { time: '10:00 PM', subject: 'Bangladesh Studies' },
    { time: '11:00 PM', subject: 'General Knowledge' }
    ];

  schedule.forEach((item) => {
    const alarmTime = new Date();
    const [hour, minutePart] = item.time.split(':');
    const [minute, period] = minutePart.split(' ');
    alarmTime.setHours(period === 'AM' ? parseInt(hour) : parseInt(hour) + 12);
    alarmTime.setMinutes(parseInt(minute));
    alarmTime.setSeconds(0);

    const now = new Date();
    const timeUntilAlarm = alarmTime - now;

    if (timeUntilAlarm >= 0) {
      setTimeout(() => {
        alert(`Time for ${item.subject}`);
        playAlarm();
      }, timeUntilAlarm);
    }
  });
}

function playAlarm() {
  const audio = new Audio('ringtone.mp3');
  audio.play();
}

setAlarms();