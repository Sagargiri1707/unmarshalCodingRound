const fs = require("fs");
const PrintData = require("./Print");
const Rating = require("./rating");
let pageMap = new Map();
let queryMap = new Map();

try {
  var data = fs.readFileSync("input.txt", "utf8");
  mapValueToData(data.split("\r\n"));
} catch (e) {
  console.log("Error:", e.stack);
}


function mapValueToData(data) {
  let queryCount = 1;
  let postsCount = 1;
  data.forEach((element) => {
    let els = element.split(" ");
    let pages = els.slice(1);
    if (els[0] === "P") {
      pageMap.set(postsCount++, pages);
    } else {
      queryMap.set(queryCount++, pages);
    }
  });
  for (let [key, value] of queryMap.entries()) {
    result = getResults(key, value);
    //console.log(result)
    PrintData(result);
  }
}

function getResults(query_key, query_value) {
  let result = {};
  let matchedPages = {};
  for (let [key, page] of pageMap.entries()) {
    let strength = 0;
    query_value.forEach((query_val) => {
      if (page.includes(query_val)) {
        strength += Rating(
          page.indexOf(query_val),
          query_value.indexOf(query_val)
        );
      }
    });
    matchedPages[key] = strength;
    result[query_key] = matchedPages;
  }
  return result;
}
