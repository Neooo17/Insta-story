var arr = [
    {dp:"https://images.unsplash.com/photo-1697729963392-28c771185b6d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1697729963392-28c771185b6d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1732734042420-1fa41185ad56?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1732734042420-1fa41185ad56?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1531327431456-837da4b1d562?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1531327431456-837da4b1d562?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1642418456009-c58a40035393?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1642418456009-c58a40035393?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

var clutter = ""

arr.forEach(function(value, index){
    console.log(value.dp, index);
    clutter += `<div class="story">
                <img id=${index} src="${value.dp}" alt="">
            </div>`
})

// console.log(cluttter);

document.querySelector('.stories').innerHTML = clutter

document.querySelector('.stories').addEventListener("click", function(details){
    console.log(arr[details.target.id].story);
    document.querySelector('.full-screen').style.display = "block" ;
    document.querySelector('.full-screen').style.backgroundImage = `url(${arr[details.target.id].story})`  ;

    setTimeout(function(){
        document.querySelector('.full-screen').style.display = "none" ;
    },2000)
})
