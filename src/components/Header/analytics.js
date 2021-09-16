import { sendLinkEvent } from '@cmsgov/design-system';

export function sendHeaderEvent(linkText, linkUrl) {
  sendLinkEvent({
    event_name: 'header_click',
    event_type: 'ui interaction',
    category: 'consistent header',
    ga_eventAction: 'click',
    ga_eventCategory: 'consistent header',
    ga_eventLabel: linkText,
    text: linkText,
    ...(linkUrl ? { link_url: linkUrl } : {}),
  });
}