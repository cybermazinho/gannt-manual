const days = document.querySelector(".days")

const dataGannt = [{
    lotes : [{
        name : "454545",
        initialDate : "2020-10-09",
        endDate : "2020-10-10"
    }],
    product : "89898887",
    end: "9839584" 
},
{
    lotes : [{
        name : "454545",
        initialDate : "2020-10-09",
        endDate : "2020-10-10"
    }],
    product : "89898887",
    end: "9839584" 
},
{
    lotes : [{
        name : "454545",
        initialDate : "2020-10-09",
        endDate : "2020-10-10"
    }],
    product : "89898887",
    end: "9839584" 
},
{
    lotes : [{
        name : "454545",
        initialDate : "2020-10-09",
        endDate : "2020-10-10"
    }],
    product : "89898887",
    end: "9839584" 
},
{
    lotes : [{
        name : "454545",
        initialDate : "2020-10-09",
        endDate : "2020-10-10"
    }],
    product : "89898887",
    end: "9839584" 
}
]

function createdOp(){
    dataGannt.forEach( opItem => {
        const op = document.createElement("div")
        op.className = "op"
        op.innerText = opItem.product
        days.appendChild(op)
    });
}

const year = [
    { nome: "janeiro", days: [...Array(31).keys()].map(x => ++x) },
    { nome: "fevereiro", days: [...Array(28).keys()].map(x => ++x) },
    { nome: "março", days: [...Array(31).keys()].map(x => ++x) },
    { nome: "abril", days: [...Array(30).keys()].map(x => ++x) },
    { nome: "maio", days: [...Array(31).keys()].map(x => ++x) },
    { nome: "junho", days: [...Array(30).keys()].map(x => ++x) },
    { nome: "julho", days: [...Array(31).keys()].map(x => ++x) },
    { nome: "agosto", days: [...Array(31).keys()].map(x => ++x) },
    { nome: "setembro", days: [...Array(30).keys()].map(x => ++x) },
    { nome: "outubro", days: [...Array(31).keys()].map(x => ++x) },
    { nome: "novembro", days: [...Array(30).keys()].map(x => ++x) },
    { nome: "dezembro", days: [...Array(31).keys()].map(x => ++x) }
  ];

function createdDay(){
    year[0].days.forEach( number => {
        const day = document.createElement("div")
        day.className = "day"
        day.innerText = number
        days.appendChild(day)
    });
}

createdDay()

