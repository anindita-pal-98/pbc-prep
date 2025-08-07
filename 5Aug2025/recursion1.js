function printName (n) {
    if(n>5) return;
    console.log(n,"Anindita");
    printName(n+1);
    return;
}

printName(1);