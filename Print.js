module.exports = function (data) {
  for (let [problemNo, vals] of Object.entries(data)) {
    const keysSorted = Object.keys(vals)
      .filter((a) => vals[a])
      .sort(function (a, b) {
        return vals[b] - vals[a];
      });
    console.log(
      `Q${parseInt(problemNo)}: ${
        keysSorted.length >= 1 ? "P" : ""
      }${keysSorted.slice(0, 5).join(" P")}`
    );
  }
};
