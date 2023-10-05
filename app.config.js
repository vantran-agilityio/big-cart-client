module.exports = () => {
  if (process.env.STORYBOOK_ENABLED) {
    console.log('process.env.STORYBOOK_ENABLED', process.env.STORYBOOK_ENABLED);
    return require('./app.storybook.json');
  }

  console.log('out',);

  return require('./app.json');
};
