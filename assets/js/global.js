/*

This file should be included in all pages and contains useful functions.
It should be linked before all other scripts

*/

// Replace all occurrences of the first string with the second string
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}