
const languages = [
    { id: 'pt', title: 'Portuguese' },
    { id: 'it', title: 'Italian', isDefault: true },
  ];
  
  const i18n = {
    languages,
    base: languages.find((item) => item.isDefault)?.id,
  };
  
  export { i18n };