// code your solution here
function superbowlWin(footballStats) {
    const winningStat = footballStats.find(football => football.result === 'W');
    return winningStat ? winningStat.year : undefined
    }