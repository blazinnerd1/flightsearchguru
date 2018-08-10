/*
 * Home Actions
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


export function changeMetaflightchoice(metaflightchoice) {
  return { type: CHANGE_METAFLIGHTCHOICE, metaflightchoice };
}

export function changeMetadest(metadest) {
  return { type: CHANGE_METADEST, metadest };
}
export function changeMetadeparting(metadeparting) {
  return { type: CHANGE_METADEPARTING, metadeparting };
}
export function changeMetalength(metalength) {
  return { type: CHANGE_METALENGTH, metalength };
}
export function changeMetaending(metaending) {
  return { type: CHANGE_METAENDING, metaending };
}