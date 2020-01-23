module.exports = {
  detected: function() {
    const className = ['pub_300x250','pub_300x250m','pub_728x90','text-ad','textAd','text_ad','text_ads','text-ads'];
    let blockedElement = document.querySelector('.' + className.join('.'));
    if (!blockedElement) {
      blockedElement = document.createElement('div');
      blockedElement.className = className.join(' ');
      blockedElement.setAttribute('style', 'position: absolute; top: -10px; left: -10px; width: 1px; height: 1px;');
      document.body.appendChild(blockedElement);
    }

    return window.document.body.getAttribute('abp') != null ||
      blockedElement.offsetParent == null ||
      blockedElement.offsetHeight == 0 ||
      blockedElement.offsetLeft == 0 ||
      blockedElement.offsetTop == 0 ||
      blockedElement.offsetWidth == 0 ||
      blockedElement.clientHeight == 0 ||
      blockedElement.clientWidth == 0
  }
}
