import firebase from '../config/firebase-config'

const socialMediaAuth = (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      return result.user
    })
    .catch(error => {
      return error
    })
}

export default socialMediaAuth