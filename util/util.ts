export const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
export const pwRegexp = /^([a-zA-Z0-9!@#$%^&*\-_]{8,})$/
export const usernameExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/

export const backend = () =>
  typeof window !== 'undefined'
    ? `http://${window.location.host.split(':')[0]}:5676`
    : 'http://yeahplanner.kro.kr:5676'
