function squareOfStars(num) {
    if (typeof num !== 'number') {
        num = 5;
    }
    let line = "*".repeat(num);
    console.log(`${line}\n`.repeat(num));
}

squareOfStars("5");
