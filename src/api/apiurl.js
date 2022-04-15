export const apiUrls = {
  // SCHEDULE
  schedule: '/schedules',
  // LOGS
  logs: '/schedule/logs',
};

export const replaceUrls = (url, obj) => {
  const pattern = /:[\w]+/ig; // :property
  return url.replace(pattern, (token) => obj[token.substr(1)] || '');
};
