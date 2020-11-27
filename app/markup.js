module.exports = (jsx, props = {}) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/main.css" />
    <title>React with SSR</title>
  </head>
  <body>
    <div id="root-app">${jsx}</div>
    <script src="/vendor.js"></script>
    <script>window.__PRELOAD_STATE__=${JSON.stringify(props)}</script>
    <script src="/main.js"></script>
  </body>
  </html>`;
}