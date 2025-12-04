# Audio Files

## Adding Relaxation Music

To add background relaxation music to your website:

1. **Add your audio file here**: Place your audio file in this directory
2. **Supported formats**: MP3, WAV, OGG
3. **Recommended filename**: `relaxation-tune.mp3`

### Where to find free relaxation music:

1. **YouTube Audio Library**: https://www.youtube.com/audiolibrary
2. **Free Music Archive**: https://freemusicarchive.org/
3. **Incompetech**: https://incompetech.com/music/
4. **Pixabay**: https://pixabay.com/music/
5. **Bensound**: https://www.bensound.com/

### Recommended music styles for home interior website:
- Ambient music
- Soft piano
- Nature sounds
- Spa/meditation music
- Smooth jazz
- Lo-fi beats

### File requirements:
- **File size**: Keep under 5MB for fast loading
- **Duration**: 2-5 minutes (it will loop automatically)
- **Bitrate**: 128kbps recommended for web
- **Volume**: Normalize your audio to -14 LUFS

### Current configuration:
The website is looking for: `/audio/relaxation-tune.mp3`

If you want to use a different filename, update it in:
`src/app/page.tsx` → `<BackgroundMusic audioSrc="/audio/YOUR-FILE-NAME.mp3" />`

