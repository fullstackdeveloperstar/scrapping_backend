/**
 * This is a controller, to control and handle all test route logic
 */

const Nightmare = require('nightmare')
const cheerio = require('cheerio');
const nightmare = Nightmare({
    show: false
});

exports.testEndpoint = (req, res) => {
    scrappingData = [];

    console.log("goto url");
    nightmare.goto('https://www.google.com/doubleclick/preview/dynamic/previewsheet/CLqMggUQk_vjBBigzNMcIIvrGw');

    console.log("waiting");

    nightmare.wait('cps-dynamic-preview-frame')

    console.log("evaluating");

    nightmare.evaluate(() => document.querySelector('body').innerHTML);
    nightmare.then(result => {
            data = getData(result);
            console.log(data);
            return res.status(200).json({
                data: data
            });

        })
        .catch(error => {
            console.error('Search failed:', error)
        });

    let getData = html => {
        data = [];
        const $ = cheerio.load(html);
        $('cps-dynamic-preview-frame').each((i, elem) => {

            // console.log(elem);
            strData = $(elem).attr('cps-dynamic-payload');
            strData = strData.replace(/\\"/g, '"');
            scrappingData.push(JSON.parse(strData));
        });
        return scrappingData;
    }


};