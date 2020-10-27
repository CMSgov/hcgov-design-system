import defaultMenuLinks, {
  defaultMenuLinks as namedExportDefaultMenuLinks,
} from './defaultMenuLinks';

describe('MenuList', function () {
  it('includes a named export', () => {
    // Some apps may need to import the default menu links in order to extend them
    expect(typeof namedExportDefaultMenuLinks).toBe('function');
  });

  describe('English', () => {
    it('returns array of menu list objects', () => {
      expect(defaultMenuLinks()).toMatchSnapshot();
    });

    it('returns array of menu list objects with subpath', () => {
      expect(defaultMenuLinks('en', false, 'tax-tool/')).toMatchSnapshot();
    });

    it('returns array of menu list objects with absolute URLs', () => {
      expect(
        defaultMenuLinks('en', false, undefined, 'https://www.healthcare.gov')
      ).toMatchSnapshot();
    });

    it('returns array of menu list objects with custom locale switch link', () => {
      expect(
        defaultMenuLinks(
          'en',
          false,
          undefined,
          undefined,
          'https://ayudalocal.cuidadodesalud.gov/es'
        )
      ).toMatchSnapshot();
    });
  });

  describe('Spanish', () => {
    it('returns array of menu list objects', () => {
      expect(defaultMenuLinks('es')).toMatchSnapshot();
    });

    it('returns array of menu list objects with subpath', () => {
      expect(defaultMenuLinks('es', false, 'tax-tool/')).toMatchSnapshot();
    });

    it('returns array of menu list objects with absolute URLs', () => {
      expect(
        defaultMenuLinks('es', false, undefined, 'https://www.healthcare.gov')
      ).toMatchSnapshot();
    });

    it('returns array of menu list objects with custom locale switch link', () => {
      expect(
        defaultMenuLinks(
          'es',
          false,
          undefined,
          undefined,
          'https://localhelp.healthcare.gov'
        )
      ).toMatchSnapshot();
    });
  });
});
