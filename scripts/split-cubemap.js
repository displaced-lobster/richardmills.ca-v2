import sharp from 'sharp'

const SIZE = 2048
const CUBEMAP = `./assets/cubemap-${SIZE}x${SIZE}.png`
const OUTPUT = './static/'

for (let i = 0; i < 6; i++) {
    sharp(CUBEMAP)
        .extract({
            width: SIZE,
            height: SIZE,
            left: 0,
            top: i * SIZE
        })
        .toFile(`${OUTPUT}env-${i}.png`)
}
