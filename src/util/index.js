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
