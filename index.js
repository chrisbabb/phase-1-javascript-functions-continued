// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(doSomething = 'go to the office') {
    return `This Monday, I will ${doSomething}.`
}

function wrapAdjective(wrapper = "*") {
    return function theAdj(myAdj) {
        return `You are ${wrapper}${myAdj}${wrapper}!`
    }
}