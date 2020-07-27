// Array Helper Functions

// 1. WRITE YOUR OWN VERSION OF THE INCLUDES METHOD (do not use array.includes)
// Function Name:   includes
// Parameters:      item: the item to search for
//                  anArray: the array to search in
// Purpose:         Search anArray for item.  Return true if item is in anArray, else return false.
// Return Value:    true or false, depending on whether item is in anArray
function includes(item, anArray) {
    let arrayWith100 = 0;

    for (i = 0; i < anArray.length; i++) {
        if (anArray[i] == item) {
            arrayWith100++;
        } else {
            arrayWith100;
        }
    }

    if (arrayWith100 > 0) {
        return "true";
    } else {
        return "false";
    }

}


// 2. WRITE YOUR OWN VERSION OF MATH.MIN (do not use Math.min)
// Function Name:   minItem
// Parameters:      anArray: an array of numbers
// Purpose:         Determine the minimum value in anArray.
// Return Value:    The minimum value in anArray.
function minItem(anArray) {
    let minNum = anArray[0];

    for (i = 0; i < anArray.length; i++) {
        if (minNum > anArray[i]) {
            minNum = anArray[i];
        }
    }

    return minNum;
}


// 3. WRITE YOUR OWN VERSION OF MATH.MAX (do not use Math.max)
// Function Name:   maxItem
// Parameters:      anArray: an array of numbers
// Purpose:         Determine the minimum value in anArray.
// Return Value:    The mmaximum value in anArray.
function maxItem(anArray) {
    let maxNum = anArray[0];

    for (i = 0; i < anArray.length; i++) {
        if (maxNum < anArray[i]) {
            maxNum = anArray[i];
        }
    }

    return maxNum;
}


// 4. WRITE A FUNCTION TO DETERMINE THE AVERAGE OF ARRAY ITEMS
// Function Name:   arrayAverage
// Parameters:      anArray: an array of numbers
// Purpose:         Determine the average of the values in anArray.
// Return Value:    The average of the values in anArray.
function arrayAverage(anArray) {
    let itemAverage = 0;

    for (i = 0; i < anArray.length; i++) {
        itemAverage += anArray[i];
    }

    return itemAverage / anArray.length;
}