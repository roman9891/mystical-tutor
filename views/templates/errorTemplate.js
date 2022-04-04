module.exports = (message) => {
  const errorImageAddress =
    'https://64.media.tumblr.com/293cfd0e67e5dd22d31cb6c4736a363d/22ee064215397254-0c/s1280x1920/54a562f4a0d29be29471b3022ab66b399edd29e1.png'
  return `
  UH OH ${message}
  <figure class="image is-315x230"><img src="${errorImageAddress}"/></figure>
  `
}
