/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const TEXT_SEARCH_STARTED = 'TEXT_SEARCH_STARTED';
const TEXT_SEARCH_RESULTS_LOADED = 'TEXT_SEARCH_RESULTS_LOADED';
const TEXT_SEARCH_PERFORMED = 'TEXT_SEARCH_PERFORMED';
const TEXT_SEARCH_RESULTS_PURGE = 'TEXT_SEARCH_RESULTS_PURGE';
const TEXT_SEARCH_RESET = 'TEXT_SEARCH_RESET';
const TEXT_SEARCH_ADD_MARKER = 'TEXT_SEARCH_ADD_MARKER';
const TEXT_SEARCH_TEXT_CHANGE = 'TEXT_SEARCH_TEXT_CHANGE';
const TEXT_SEARCH_LOADING = 'TEXT_SEARCH_LOADING';
const TEXT_SEARCH_ERROR = 'TEXT_SEARCH_ERROR';

function searchResultLoaded(results, append=false) {
    return {
        type: TEXT_SEARCH_RESULTS_LOADED,
        results: results,
        append: append
    };
}

function searchTextChanged(text) {
    return {
        type: TEXT_SEARCH_TEXT_CHANGE,
        searchText: text
    };
}

function searchTextLoading(loading) {
    return {
        type: TEXT_SEARCH_LOADING,
        loading
    };
}
function searchResultError(error) {
    return {
        type: TEXT_SEARCH_ERROR,
        error
    };
}


function resultsPurge() {
    return {
        type: TEXT_SEARCH_RESULTS_PURGE
    };
}

function resetSearch() {
    return {
        type: TEXT_SEARCH_RESET
    };
}

function addMarker(itemPosition) {
    return {
        type: TEXT_SEARCH_ADD_MARKER,
        markerPosition: itemPosition
    };
}

function textSearch(searchText) {
    return {
        type: TEXT_SEARCH_STARTED,
        searchText
    };
}


module.exports = {
    TEXT_SEARCH_STARTED,
    TEXT_SEARCH_LOADING,
    TEXT_SEARCH_ERROR,
    TEXT_SEARCH_RESULTS_LOADED,
    TEXT_SEARCH_PERFORMED,
    TEXT_SEARCH_RESULTS_PURGE,
    TEXT_SEARCH_RESET,
    TEXT_SEARCH_ADD_MARKER,
    TEXT_SEARCH_TEXT_CHANGE,
    searchTextLoading,
    searchResultError,
    searchResultLoaded,
    textSearch,
    resultsPurge,
    resetSearch,
    addMarker,
    searchTextChanged
};
