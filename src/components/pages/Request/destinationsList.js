var destinationsList = new Array();
fetch("https://yalepool.com/destinations")
    .then((res) => res.json())
    .then((data) => {
        for (var item in data) {
            destinationsList.push(data[item]);
        }
    })

export default destinationsList;




    