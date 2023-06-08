const canvas = document.getElementById('canvasWrapper');
const ctx = canvas.getContext('2d');
// const getData = async () => {
//     const url = 'https://query1.finance.yahoo.com/v8/finance/chart/IBM?range=20d&interval=1d';
//     options = {
//         method: 'GET',
//         crossorigin: true,
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//    }
//     }
//     const response = await fetch( url, options)
//     return response;
// }
// -----------------------------------------------------------------------------------------
//I did write this method but api has CORS Policy so I will to make a server to get the data,
// I'm going to use hardcoded data got from their api in postman...
// -----------------------------------------------------------------------------------------
const close = [
    120.9000015258789,
    122.83999633789062,
    123.36000061035156,
    123.45999908447266,
    125.70999908447266,
    126.1500015258789,
    127.26000213623047,
    127.5,
    128.17999267578125,
    125.68000030517578,
    126.76000213623047,
    128.88999938964844,
    129.47999572753906,
    128.58999633789062,
    129.82000732421875,
    132.4199981689453,
    132.63999938964844,
    132.69000244140625,
    134.3800048828125,
    134.85000610351562]
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const minPrice = Math.min(...close);
const maxPrice = Math.max(...close);

const priceRange = maxPrice - minPrice;
const pricePerPixel = canvasHeight / priceRange;

const days = close.length;
const pixelsPerDay = canvasWidth / (days - 1);

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(0, canvasHeight - ((close[0] - minPrice) * pricePerPixel));

for (let i = 1; i < days; i++) {
    const x = i * pixelsPerDay;
    const y = canvasHeight - ((close[i] - minPrice) * pricePerPixel);
    ctx.lineTo(x, y);
}

ctx.lineWidth = 1;
ctx.stroke();

