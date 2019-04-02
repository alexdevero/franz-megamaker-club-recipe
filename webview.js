module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const directMessages = document.querySelectorAll('.d-header-icons .unread-notifications').length
    const numOfMessages = parseInt(directMessages.innerHTML)

    Franz.setBadge(directMessages, numOfMessages)
  }

  Franz.loop(getMessages)
}
