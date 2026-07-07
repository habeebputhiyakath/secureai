const fs = require('fs');
try {
  let html = fs.readFileSync('trackpro_product.html', 'utf-8');
  // strip script and style
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  html = html.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  // strip all tags
  let text = html.replace(/<[^>]+>/g, ' ');
  // remove extra whitespace
  text = text.replace(/\s+/g, ' ');
  console.log(text.substring(0, 3000));
} catch (e) {
  console.error(e);
}
