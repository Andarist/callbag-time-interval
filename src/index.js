import defer from 'callbag-defer'
import loop from 'callbag-loop'

export default function timeInterval(source) {
  return defer(() =>
    loop((last, v) => {
      const current = Date.now()
      return [current, [current - last, v]]
    }, Date.now())(source),
  )
}
