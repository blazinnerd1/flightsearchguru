/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_METAFLIGHTCHOICE = 'flightsearchguru/HomePage/CHANGE_METAFLIGHTCHOICE';
export const CHANGE_METADEST= 'flightsearchguru/HomePage/CHANGE_METADEST';
export const CHANGE_METADEPARTING = 'flightsearchguru/HomePage/CHANGE_METADEPARTING';
export const CHANGE_METALENGTH = 'flightsearchguru/HomePage/CHANGE_METALENGTH';
export const CHANGE_METAENDING = 'flightsearchguru/HomePage/CHANGE_METAENDING';