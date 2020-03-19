export default function auth ( { next } ) {
  if ( !window.$cookies.isKey('user') ) {
    return next({
      name: 'login'
    })
  }

  next()
}