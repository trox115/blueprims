export const apiUrls = {
  // SCHEDULE
  shedule: '/schedule',
  // LOGS
  logs: '/schedule/logs',
};

export const replaceUrls = (url, obj) => {
  const pattern = /:[\w]+/ig; // :property
  return url.replace(pattern, (token) => obj[token.substr(1)] || '');
};
