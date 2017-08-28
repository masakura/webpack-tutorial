/**
 * 一定ミリ秒待機します
 * @param {Number} milliseconds 待機するミリ秒
 * @returns {Promise}
 */
export default function wait(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}