module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const directMessages = document.querySelectorAll('.d-header-icons .unread-notifications').length
    let numOfMessages = 0

    if (directMessages > 0) {
      numOfMessages = parseInt(document.querySelector('.d-header-icons .unread-notifications').innerText)
    }

    Franz.setBadge(numOfMessages)
  }

  Franz.loop(getMessages)
}
