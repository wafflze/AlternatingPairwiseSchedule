document.addEventListener("DOMContentLoaded", function () {
    const scheduleForm = document.getElementById('schedule-form');
    const generateScheduleBtn = document.getElementById('generate-schedule-btn');
    const scheduleContainer = document.getElementById('schedule');
    const playersInput = document.getElementById('players');

    generateScheduleBtn.addEventListener('click', function () {
        const players = playersInput.value.split(',');
        const schedule = generateAlternatingPairwiseSchedule(players);

        scheduleContainer.innerHTML = schedule;
    });

    function generateAlternatingPairwiseSchedule(players) {
        let schedule = '';
        for (let i = 0; i < players.length; i++) {
            const partnerIndex = (i + 1) % players.length;
            const opponentIndex1 = (i + 2) % players.length;
            const opponentIndex2 = (i + 3) % players.length;
            const sittingPlayerIndex = (i + 4) % players.length;

            if (opponentIndex2 < players.length) {
                schedule += `Round ${i+1}: ${players[i]}&${players[partnerIndex]} vs ${players[opponentIndex1]}&${players[opponentIndex2]}, ${players[sittingPlayerIndex]? players[sittingPlayerIndex] + 'its' : ''}
`;
            } else {
                schedule += `Round ${i+1}: ${players[i]}&${players[partnerIndex]}, ${players[sittingPlayerIndex]? players[sittingPlayerIndex] + 'its' : ''}
`;
            }
        }
        return schedule;
    }
});
