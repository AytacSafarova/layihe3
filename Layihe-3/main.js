
let fromValue = "RUB"
let toValue = "USD"
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let datam = document.querySelector('.data1')
let datam2 = document.querySelector('.data2')
let goturulendeyer = document.querySelectorAll('.secim1 li')
let istenendeyer = document.querySelectorAll('.secim2  li')


input1.addEventListener('keyup', func1())
input2.addEventListener('keyup', func2())


goturulendeyer.forEach((item) => {
    item.addEventListener("click", (e) => {
        goturulendeyer.forEach((item) => {
            item.classList.remove("benovseyi1");
            item.classList.add("usd")
        });
        fromValue = e.target.innerHTML;


        e.target.classList.add("benovseyi1");
        func1()
        func2()


    });
});

istenendeyer.forEach((item) => {
    item.addEventListener("click", (e) => {
        istenendeyer.forEach((item) => {
            item.classList.remove("benovseyi2");
            item.classList.add("usd")
        });
        toValue = e.target.innerHTML;


        e.target.classList.add("benovseyi2");
        func1()
        func2()

    });
});

function func1() {
    fetch(`https://api.exchangerate.host/latest?base=${fromValue}&symbols=${toValue} `)
        .then(res => res.json()).then(data => {
            let deyerler = data.rates
            let aa = deyerler[toValue]
            datam.innerHTML = '1' + fromValue + '=' + aa + toValue

            input2.value = (input1.value * aa).toFixed(2)
            let bb = (1 / deyerler[toValue]).toFixed(6)
            datam2.innerText = '1' + toValue + '=' + bb + fromValue
        })
}

function func2() {
    fetch(`https://api.exchangerate.host/latest?base=${toValue}&symbols=${fromValue} `)
        .then(res => res.json()).then(data => {
            let deyerler = data.rates


            let bb = deyerler[fromValue]

            datam2.innerText = '1' + toValue + '=' + bb + fromValue
            input1.value = `${input2.value * data.rates[fromValue]}`



        })
}







