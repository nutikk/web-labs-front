function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    out.innerHTML = `
        <div class="frame">
            <div>Дата и время для локали России: ${today.toLocaleString('ru-RU')}</div>
            <div>Дата и время для локали Греции: ${today.toLocaleString('el-GR')}</div>
            <div>Дата и время для локали Швейцарии: ${today.toLocaleString('fr-CH')}</div>
            <div>Дата и время для локали Албании: ${today.toLocaleString('sq-AL')}</div>
            <div>Дата и время для локали Макао, Китай: ${today.toLocaleString('zh-MO')}</div>
            <div>Дата и время для локали Словакии: ${today.toLocaleString('sk-SK')}</div>
            <div>Текущий год: ${today.getFullYear()}</div>
            <div>Текущий месяц: ${today.getMonth()}</div>
            <div>Текущая дата: ${today.getDate()}</div>
            <div>День недели: ${weekDays[today.getDay()]}</div>
        </div>
    `;
}
function getDayWeek() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value - 1; // Месяца в JavaScript считаются с 0
    let year = document.getElementById('year').value;
    let date = new Date(year, month, day);
    let weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let dayOfWeek = weekDays[date.getDay()];
    document.getElementById('day-of-week').textContent = 'День недели: ' + dayOfWeek;
}