
function onClick() {
    let first = parseInt(document.querySelector("#first").value);
    let last = parseInt(document.querySelector("#last").value);
    if (first > last) {
        for (let i = first; i >= last; i--) {
            console.log(i);
        }
    } else{
        for (let i = first; i <= last; i++) {
            console.log(i);
        }
    }

}
