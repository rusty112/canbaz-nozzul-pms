import { addHours, subHours, addMonths, subMonths, format } from 'date-fns';

/**
 * Smart Compliance Logic
 * 
 * Generates a "random" but compliant Last OH Date based on the interval.
 * Ideally, we want the generated date to be such that the Last OH + Interval > Current Date.
 * So the item appears "compliant".
 */
export const generateComplianceData = (componentId, interval, unitIndex = 0) => {
    // Seed random generator with componentId + unitIndex to maintain consistency across re-renders if needed
    // But for simple "demo" feel, we can just use Math.random() or a hash.
    // Using a hash prevents the dates from changing on every render if we don't store them.
    // However, for this implementation, we will likely compute this once on mount or store in state.

    const now = new Date();
    let lastOH;
    let nextDue;

    // Interval parsing
    // Cases: "number" (hours), "6 mo", "5 yr", "1 yr", "1 mo"

    if (typeof interval === 'number') {
        // HOURS BASED
        // Assume vessel creates ~20 hours per day? Or just purely math based.
        // Let's assume we want to be e.g. 70-90% through the interval, or just randomly compliant.
        // To be safe compliant, Last OH should be typically: Now - (Interval * random(0.1, 0.9)) hours?
        // But this is hours, so we need to translate hours to approximate date?
        // Actually, usually in PMS, "Last OH Date" is displayed, and "Last OH Hours" is recorded.
        // If we only track hours:
        // Running Hours = Current Total Hours - Last OH Hours.
        // Dashboard usually shows "Running Hours".

        // For this specific request: "Last OH Date" and "Due Date".
        // Even for hour-based items, we can estimate a date if we assume average engine use.
        // Let's generate a "Last OH Date".

        // Let's assume the ship runs 24/7 for simplicity, or 20h/day.
        const hoursPerDay = 24;

        // We want the item to be "Good".
        // So Last OH + Interval > Now.
        // Means Last OH > Now - Interval (converted to time).

        // Let's pick a random point between "Just done" (Now - 1 day) and "Almost due" (Now - Interval + buffer).
        // Safe buffer: 10% of interval.

        const maxHoursAgo = interval * 0.9;
        const minHoursAgo = 24; // at least 1 day ago

        const randomHoursAgo = Math.floor(Math.random() * (maxHoursAgo - minHoursAgo + 1)) + minHoursAgo;

        lastOH = subHours(now, randomHoursAgo);

        // Next Due calculation (Date):
        // Based on remaining hours.
        // Remaining = Interval - randomHoursAgo.
        // Days to go = Remaining / 24.
        const hoursRemaining = interval - randomHoursAgo;
        nextDue = addHours(now, hoursRemaining);

    } else if (typeof interval === 'string') {
        // CALENDAR BASED
        let months = 0;
        if (interval.includes('mo')) months = parseInt(interval);
        if (interval.includes('yr')) months = parseInt(interval) * 12;

        if (months === 0) months = 6; // fallback

        // Similar logic. We want to be within the interval.
        // Max months ago = Interval * 0.9
        const maxMonthsAgo = months * 0.9;

        // Pick a random ratio between 0.1 and 0.9 of the interval
        const ratio = 0.1 + (Math.random() * 0.8);
        const monthsAgo = months * ratio;

        // Convert float months to days approx
        const daysAgo = Math.floor(monthsAgo * 30);

        lastOH = subMonths(now, Math.floor(monthsAgo));
        // Adjust slightly for days to make it look natural
        // lastOH = subDays(lastOH, (monthsAgo % 1) * 30);

        // Next Due
        nextDue = addMonths(lastOH, months);
    } else {
        // Unknown or "As Req"
        lastOH = subMonths(now, 1);
        nextDue = addMonths(now, 12);
    }

    return {
        lastOH: format(lastOH, 'dd MMM yyyy'),
        nextDue: format(nextDue, 'dd MMM yyyy'),
        isCompliant: true // By definition of our algorithm
    };
};

export const MOCK_COMPLIANCE_DATA = {}; // Will be populated in runtime or effect
