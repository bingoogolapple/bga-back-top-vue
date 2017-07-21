/**
 * Created by bingoogolapple on 2017/7/13.
 */

module.exports = {
  getGitHubUser (vue) {
    return vue.$http.get(`https://api.github.com/users/${vue.$store.getters.gitHubUsername}`)
  },
  getReadme (vue) {
    return vue.$http.get(`https://raw.githubusercontent.com/${vue.$store.getters.context}/master/README.md`)
  }
}
