async function(properties, context) {
    
    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
      const hex = x.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }).join('')
    
  const ColorThief = require('colorthief');

  const url = properties.imageurl;

  console.log("url", url);
    
  const palette = await ColorThief.getPalette("https:" + url, 5)

  const hexPalette = palette.map(color => rgbToHex(color[0],color[1],color[2]))
    
  console.log("palette", hexPalette);

  return { palette:hexPalette };
}