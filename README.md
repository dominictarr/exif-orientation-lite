# exif-orientation-lite

a tiny library 1k that only bothers with exif orientation


## example

``` js
var getOrientation = require('exif-orientation-lite')
var i = getOrientation(require('fs').readFileSync(image_jpg))

//machine readable orientation descriptions
console.log(require('exif-orientation-lite/machine')[i])

//human readable orientation descriptions
console.log(require('exif-orientation-lite/human')[i])
```

## command

for testing you can also `install -g exif-orientation-lite`
and then do `exif-orientation-lite images*.jpg`
a list of files and their orientations will be output.

## License

MIT
