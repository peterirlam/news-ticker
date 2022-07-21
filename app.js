function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function doGet(e) {
let html  = HtmlService.createTemplateFromFile("index");
 return html.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function DateDiffInDays(a, b) {
  let _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  let utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  let utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
