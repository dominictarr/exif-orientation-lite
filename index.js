module.exports = function (buffer) {
  var view = new DataView(new Uint8Array(buffer).buffer)
  if (view.getUint16(0, false) !== 0xFFD8) return -1
  var length = view.byteLength
  var offset = 2
  while (offset < length) {
    var marker = view.getUint16(offset, false)
    offset += 2
    if (marker === 0xFFE1) {
      if (view.getUint32(offset += 2, false) !== 0x45786966) return -1
      var little = view.getUint16(offset += 6, false) === 0x4949
      offset += view.getUint32(offset + 4, little)
      var tags = view.getUint16(offset, little)
      offset += 2
      for (var i = 0; i < tags; i++) {
        if (view.getUint16(offset + (i * 12), little) === 0x0112) {
          return view.getUint16(offset + (i * 12) + 8, little)
        }
      }
    } else if ((marker & 0xFF00) !== 0xFF00) {
      break
    } else {
      offset += view.getUint16(offset, false)
    }
  }
  return -1
}


