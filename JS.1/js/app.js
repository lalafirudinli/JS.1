let hour = new Date().getHours()

if (hour>6 && hour<12){
    alert("Good Morning")
    document.body.style.backgroundImage="url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)"
}
else if(hour=>12 && hour<=18){
    alert("Good Afternoon")
    document.body.style.backgroundImage="url(https://images.unsplash.com/photo-1561283890-5d858c23b2ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80)"
}
else{
    alert("Good Night")
    document.body.style.backgroundImage="url(https://images.unsplash.com/photo-1506606401543-2e73709cebb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)"
}
