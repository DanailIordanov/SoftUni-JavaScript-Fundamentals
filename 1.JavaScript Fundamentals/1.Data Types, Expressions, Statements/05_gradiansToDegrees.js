function calculateDegrees(gradians) {
    let degrees = (gradians * 0.9) % 360;
    if(degrees < 0){
        degrees += 360;
    }
    console.log(degrees);
}