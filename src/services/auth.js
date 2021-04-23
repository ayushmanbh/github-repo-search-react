import firebase from '../config/firebase-config'

const socialMediaAuth = (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result.user);
      return result.user
    })
    .catch(error => {
      console.log(error);
      return error
    })
}

export default socialMediaAuth