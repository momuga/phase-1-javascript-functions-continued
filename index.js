// code your solution here

function saturdayFun(roller_skate = "roller-skate")
{
	return roller_skate;
}

function mondayWork(roller_skate = "go to the office")
{
	return roller_skate;
}

function wrapAdjective(punctuation = "*")
{
	return function (adjective = "special") {
		return `You are ${punctuation}${adjective}`;
	};
}