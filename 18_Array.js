const names=["Youtub","Amazon","Facebook"];
for (const n in names){
    console.log(n);
}

for (const n in names){
    console.log(names[n]);
}

console.log("-------------------------");

const symbols = {
    yt: "YouTube",
    ig: "Instagram",
    fb: "Facebook",
    ico: "LearnCodeOnline.in",
};

for (const s in symbols)
{
    console.log(s);
}

for (const s in symbols)
{
    console.log(symbols[s]);
}

for (const s in symbols)
{
    console.log(`key is ${s} and value is ${symbols[s]}`);
}

console.log("-------------------------")

//Output is :
// 0
// 1
// 2
// Youtub
// Amazon
// Facebook
// -------------------------
// yt
// ig
// fb
// ico
// YouTube
// Instagram
// Facebook
// LearnCodeOnline.in
// key is yt and value is YouTube
// key is ig and value is Instagram
// key is fb and value is Facebook
// key is ico and value is LearnCodeOnline.in
// -------------------------