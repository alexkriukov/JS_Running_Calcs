/**
 * This function helps people calculate their HR zones after they insert their threshold HR metric
 * @param {*} thresholdValue - threshold heart rate value
 * @returns logs to console the cardio zones based on the threshold value
 */
function calculateCardioByThreshold(thresholdValue) {
    const zones = {};
    
    const percents = [
        [0.55, 0.68],
        [0.69, 0.84],
        [0.85, 0.93],
        [0.94, 1],
        [1, 1.08]
    ]

    for (i = 0; i < percents.length; i++) {
        const start = Math.floor(thresholdValue * percents[i][0]);
        const end = Math.floor(thresholdValue * percents[i][1]);

        zones[`zone${i+1}Start`] = start;
        zones[`zone${i+1}End`] = end;
    }

    console.log (`Your HR zones by the threshold value = ${thresholdValue}: 
        zone 1: ${zones.zone1Start} - ${zones.zone1End},
        zone 2: ${zones.zone2Start} - ${zones.zone2End},
        zone 3: ${zones.zone3Start} - ${zones.zone3End},
        zone 4: ${zones.zone4Start} - ${zones.zone4End},
        zone 5: ${zones.zone5Start} - ${zones.zone5End}
    `);
}
