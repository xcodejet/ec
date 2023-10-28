const axios = require('axios');
const cheerio = require('cheerio');

let page = document.getElementsByClassName("page")

const printBook = (pastebinUrl,index) => {
    axios.get(pastebinUrl)
      .then(response => {
        //console.log(response.data)
        page[index].innerHTML = response.data
        /*if (response.status === 200) {
          // Load the HTML content of the page using cheerio
          const $ = cheerio.load(response.data);
    
          // Find and extract the content you need (e.g., the text inside the pre element)
          const content = $('pre').text();
    
          // Do something with the extracted content
          console.log(content);
        } else {
          console.error('Failed to retrieve data from Pastebin');
        }*/
      })
      .catch(error => {
        console.error('Error:', error);
      });
}
printBook(`https://pastebin.com/raw/WeZPJwbr`,0)
printBook(`https://pastebin.com/raw/rZCUekEr`,1)
printBook(`https://pastebin.com/raw/csjnE5JE`,2)
printBook(`https://pastebin.com/raw/Kpqr1Uqt`,3)