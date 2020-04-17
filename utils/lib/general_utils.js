exports.covertArrayToJsonObject = function (array) {

    // convert array to string
    //var arrayToString = JSON.stringify(Object.assign({}, array));

    // convert string to json object
    var stringToJsonObject = JSON.parse(array);

    console.log(stringToJsonObject);

    return stringToJsonObject;
}