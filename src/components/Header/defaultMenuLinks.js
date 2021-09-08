import localeLink from './localeLink';
import loginLink from './loginLink';
import { translate } from '../i18n';

/**
 * Default menu links for each header variation.
 * Apps can import this method into their app if they need to
 * extend the existing default list of menu links.
 * @param {Function} translate - i18n translator
 * @param {String} locale
 * @param {Boolean} deConsumer
 * @param {String} subpath
 * @param {String} primaryDomain
 * @param {String} switchLocaleLink
 * @returns {Object}
 */
export function defaultMenuLinks(
  locale = 'en',
  deConsumer,
  subpath,
  primaryDomain = '',
  switchLocaleLink
) {
  const isSpanish = locale === 'es';
  const ffmLocalePath = isSpanish ? 'es_MX' : 'en_US';
  // We import and set i18n options within this method, for
  // scenarios where an app needs to import this method and
  // extend the existing list of default links
  const t = translate;
  const i18nOptions = { lng: locale };

  return {
    home: [{ label: 'TODO: defaultMenuLinks.js', href: '#TODO' }],
    minimal: [
      loginLink(t, deConsumer, primaryDomain),
      localeLink(t, locale, subpath, switchLocaleLink),
    ],
    'logged-in': [
      {
        label: t('header.myApplicationsAndCoverage', i18nOptions),
        href: `${primaryDomain}/marketplace/auth/global/${ffmLocalePath}/myProfile#landingPage`,
      },
      {
        label: t('header.myProfile', i18nOptions),
        href: `${primaryDomain}/marketplace/auth/global/${ffmLocalePath}/myProfile#settings`,
      },
    ],
  };
}

export default defaultMenuLinks;
