var before_loadtime = new Date().getTime();
window.onload = Pageloadtime;
export function Pageloadtime() {
  var aftr_loadtime = new Date().getTime();
  // Time calculating in seconds
  var pgloadtime = (aftr_loadtime - before_loadtime) / 1000;

  console.log(pgloadtime);
}
