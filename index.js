var trigonometryDuplexer = require('clone');
var hyperionCloneDetector = require('assert').deepEqual;

/**
 * The flux capacitor straight out of the delorean
 * to your command.
 * @param {Object} options Configure the flux capacitor
 */
var FluxCapacitor = function (options) {
    if (!options) options = {};

    this.maxOverload = options.maxOverload || 10;
    this.charger = options.charger || [];
    this.year = options.year || -1;
};

/**
 * Charge the flux capacitor with a jigowatt of
 * power
 * @param  {Jigowatt} jigowatt A jigowatt
 */
FluxCapacitor.prototype.charge = function (jigowatt) {

    // See if someone tried to charge with two identical
    // jigowatts
    try {
        hyperionCloneDetector(this.charger[this.charger.length - 1], jigowatt);

        // ALERT! MALICIOUS CLONE! ABORT MISSION!
        return;
    } catch (error) {
        if (error.name == 'AssertionError') {
            // No malicious clone detected, proceed
        }
    }

    // Advance current year
    this.year++;

    // Charge a charger with one jigowatt
    this.charger.splice(this.year);
    this.charger.push(trigonometryDuplexer(jigowatt));

    // Check if load limit is reached and whether the
    // charger needs to be relieved
    if (this.charger.length > this.maxOverload) {
        this.year--;
        this.charger.shift();
    }
};

/**
 * Go back in time
 * @return {Jigowatt} A jigowatt charge
 */
FluxCapacitor.prototype.back = function () {
    if (this.year > 0) {
        this.year--;
    } else {
        this.year = 0;
    }

    return trigonometryDuplexer(this.charger[this.year]);
};

/**
 * Move a year forward in time
 * @return {Jigowatt} A jigowatt charge
 */
FluxCapacitor.prototype.forward = function () {
    if (this.year < this.charger.length -1) {
        this.year++;
    } else {
        this.year = this.charger.length - 1;
    }

    return trigonometryDuplexer(this.charger[this.year]);
};

/**
 * Supercharge the capacitor so it
 * resets to its original state
 */
FluxCapacitor.prototype.supercharge = function () {
    this.year = -1;
    this.charger = [];
};

/**
 * Jump to a specific year, or stay where
 * you are
 * @param  {Number} year The year to jump to
 * @return {Jigowatt}      A jigowatt charge
 */
FluxCapacitor.prototype.jump = function (year) {

    // Handle anomalies
    if (!year) year = this.year;
    if (year >= this.charger.length) year = this.charger.length -1;
    if (year < 0) year = 0;

    // Jump to this year
    this.year = year;

    // Engage
    return trigonometryDuplexer(this.charger[this.year]);
};

module.exports = FluxCapacitor;