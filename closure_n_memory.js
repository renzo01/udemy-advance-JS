//Memory efficient
// function heavyDuty(index){
//     const bigArray = new Array(7000).fill(":)");
//     console.log('created!');
//     return bigArray[index];
// }

// heavyDuty(7);

// const getHeavyDuty = heavyDuty2();
// getHeavyDuty(300);
// getHeavyDuty(500);


// function heavyDuty2(){
//     const bigArray = new Array(7000).fill(":)");
//     console.log('created! again');
//     return function(index){
//         return bigArray[index];
//     }
// }

//encapsulation
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'BOOOMMMM'
    };
    setInterval(passTime,1000);
    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton();
ohno.totalPeaceTime();