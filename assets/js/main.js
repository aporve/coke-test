window.addEventListener('message', function (eventData) {
    console.log("CHECKING FOR EVENT");
    console.log(eventData);
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            console.log('Event~~~~~~~~~>>',event)
            console.log('Coke Event~~~~~~>>',event.data.code)
            console.log('coke Data~~~~~~~~~~>>',event.data.data)


            let cEvent = event.data.code;
            let cEventData = event.data.data;
            


            var frame = document.getElementById("ymIframe");
            console.log("In Frame~~~~~~~~~~~>>" ,frame);
        }

    } catch (error) {
        console.log(error, 'Error~~~~~~~~~>>')
        return;
    }
}, false);




var frame = document.getElementById("ymIframe");
console.log("Frame~~~~~~~~~~~>>" ,frame);


frame.postMessage('Event to child', "*");



// let data = {
//     "name": "aporve",
//     "email": "aporvep@gmail.com"
// }

// window.data = data;
// console.log(window.config);

// console.log('obj~~~~~~~~>>', obj)

// parent.postMessage('obj', obj);