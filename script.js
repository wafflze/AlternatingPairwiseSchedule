document.addEventListener("DOMContentLoaded", function () {
    const scheduleForm = document.getElementById('schedule-form');
    const generateScheduleBtn = document.getElementById('generate-schedule-btn');
    const scheduleContainer = document.getElementById('schedule');

    generateScheduleBtn.addEventListener('click', function (event) {
        // Prevent default form submission behavior (page refresh)
        event.preventDefault();

        const players = document.getElementById('players').value.split(',');
        const schedule = generateAlternatingPairwiseSchedule(players);

        scheduleContainer.innerHTML = schedule;
    });

    function generateAlternatingPairwiseSchedule(players) {
        let schedule = '';
        for (let i = 0; i < players.length - 1; i++) {
            schedule += `Round ${i+1}: ${players[i]}&${players[(i+1)%players.length]}, ${players[(i+2)%players.length]? 'Sits' : ''}
`;
        }
        return schedule;
    }
});
	
