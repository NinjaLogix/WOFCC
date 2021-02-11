export const formatPhone = phone => {
  const ph = phone.toString();

  if (ph.length === 10)
    return (
      '(' +
      ph.substring(0, 3) +
      ') ' +
      ph.substring(3, 6) +
      '-' +
      ph.substring(6, 10)
    );
  else return '';
};

export const getIframeSettings = (fs, width, height) => {
  const options = fs.match(/src=".*"/)[0].split('" ');

  const settings = {};

  options.forEach(option => {
    if (option.includes('src=')) {
      const src = option.replace('src="', '');
      settings['src'] = src.replace(/width=[0-9]{3}/g, 'width=720');
    } else if (option.includes('allow=')) {
      settings['allow'] = option.replace('allow="', '');
    } else if (option.includes('style=')) {
      const current = option.replace('style="', '');
      const style = {};

      current.split(';').forEach(c => {
        const f = c.split(':');
        style[f[0]] = f[1];
      });

      settings['style'] = style;
    } else {
      const pair = option.split('=');
      settings[pair[0]] = pair[1].replace(/"/g, ``);
    }
  });

  settings.width = width;
  settings.height = height;

  return settings;
};
