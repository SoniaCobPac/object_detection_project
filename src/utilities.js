export const drawRect = (dectections, ctx) => {
  dectections.forEach(obj => {
    // Get prediction results
    const { bbox, class: className } = obj;
    const [x, y, width, height] = bbox;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);
    ctx.font = "16px sans-serif";
    ctx.fillStyle = "red";
    ctx.fillText(className, x, y);
  });
}