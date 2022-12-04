const quotes = [{
    quote: "행복은 우리에게 건강의 근본이 되는 에너지를 준다.",
    author: "앙리 프레데릭"
},
{
    quote: "인생에는 서두르는 것 말고도 더 많은 것이 있다.",
    author: "마하트마 간디"
},
{
    quote: `우리는 우리가 어른이 되는 것에서 도망치고 있다고 생각했다.<br>허나 이제 우리가 어른이 되어버렸다.`,
    author: "마가릿 애트우드"
},
{
    quote: "태양이 사라졌다고 생각하는 순간, 한 줄기의 빛이 내게 비춰졌다.",
    author: "커트 코베인"
},
{
    quote: `불가능이 무엇인가는 말하기 어렵다.<bR>어제의 꿈은 오늘의 희망이며 내일의 현실이기 때문이다.`,
    author: "로버트 고다드"
},
{
    quote: `꿈은 이루어진다.<br>이루어질 가능성이 없었다면 애초에 자연이 우리를 꿈꾸게 하지도 않았을 것이다.`,
    author: "존 업다이크"
},
{
    quote: "가장 현명한 사람은 자신만의 방향을 따른다.",
    author: "에우리피데스"
},
{
    quote: "사람을 존경하라, 그러면 그는 더 많은 일을 해 낼 것이다.",
    author: "제임스 오웰"
},
{
    quote: "내가 있는 곳이 낙원이라.",
    author: "볼테르"
},
{
    quote: "탁월한 능력은 새로운 과제를 만날 때마다 스스로 발전하고 드러낸다.",
    author: "발타사르 그라시안"
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = `<p>${todaysQuote.quote}</p>`
author.innerHTML = `<p>${todaysQuote.author}</p>`;

// quote.style.color = "white";
// author.style.color = "white";

