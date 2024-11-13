document.addEventListener("DOMContentLoaded", function () {
    const scheduleForm = document.getElementById('schedule-form');
    const generateScheduleBtn = document.getElementById('generate-schedule-btn');
    const scheduleContainer = document.getElementById('schedule');

    generateScheduleBtn.addEventListener('click', function (event) {
        event.preventDefault();

        const players = document.getElementById('players').value.split(',');
        let schedule = '';

        // Alternating Pairwise Schedule logic (similar to Go program)
        for (let i = 0; i < players.length - 1; i++) {
            const nextPlayer = (i + 1) % players.length;
            const nextNextPlayer = (i + 1) % players.length;
            const sittingPlayer = (i + 2) % players.length? players[nextPlayer] + 'its' : '';
            schedule += `Round ${i+1}: ${players[i]}&${players[nextPlayer]}, ${sitttingPlayer}
`;
        }
        scheduleContainer.innerHTML = schedule;
    });
