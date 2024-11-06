console.time();

const decoder = new TextDecoder();
const response = await fetch("http://localhost:4000/");
const data = await response.text();

console.timeEnd();

let i = 0;

for await (const chunk of response.body) {
  i++;
  console.log(decoder.decode(chunk));
  if (i === 1) {
    console.timeEnd();
  }
}
