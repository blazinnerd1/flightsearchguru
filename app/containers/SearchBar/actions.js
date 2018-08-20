/*
 * SearchBar Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_METAFLIGHTCHOICE,
  CHANGE_METADEST,
  CHANGE_METADEPARTING,
  CHANGE_METALENGTH,
  CHANGE_METAENDING,
} from './constants';

export function changeMetaType(flightType) {
  return { type: CHANGE_METAFLIGHTCHOICE, flightType: flightType.value };
}

export function changeMetaDest(dest) {
  return { type: CHANGE_METADEST, dest: dest.value };
}
export function changeMetaDeparting(departing) {
  return { type: CHANGE_METADEPARTING, departing: departing.value };
}
export function changeMetaLength(length) {
  return { type: CHANGE_METALENGTH, length: length.value };
}
export function changeMetaEnding(ending) {
  return { type: CHANGE_METAENDING, ending: ending.value };
}
