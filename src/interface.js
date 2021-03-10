interface ICookieConsent {
  globalCookieName?: string;
  bannerWrapper?: string;
  innerElemWrapper?: string;
  createButton(
    text: string,
    id: string,
    className: string,
    tabindex?: number
  ): void;
  createLink(
    text: string,
    url: string,
    id: string,
    className: string,
    tabindex?: number
  ): void;
  setCookie(
    name: string,
    value: string,
    options: { secure?: boolean, "max-age": number, domain?: string }
  ): void;
  checkCookie(name: string): boolean;
  deleteCookie(...cname: string[]): void;
}

export default ICookieConsent;
