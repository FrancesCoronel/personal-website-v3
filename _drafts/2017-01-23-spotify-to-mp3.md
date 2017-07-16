# **Convert a Spotify Playlist to MP3 Files **🎵

**slug** spotify-to-mp3
**Excerpt** Want to convert all your favorite tunes from your Spotify playlist to mp3 files that can be imported to iTunes? Look no further.
**Tags** spotify, playlists, mp3, playlistbuddy, youtube-dl, download mp3, spotify download, spotify download mp3


> Disclaimers: I am subscribed to Spotify Premium.

## Want to convert all your favorite tunes from your Spotify playlist to mp3 files that can be imported to iTunes? Look no further than this short and sweet tutorial.

Cause I'm about to show you how to convert your favorite Spotify playlist to a bunch of mp3 files in just **5 simple steps**.

❗ *Some Terminal experience is required.*

**🛠   ***This tutorial is certifiably macOS & developer friendly.*

## 1. Create a playlist of songs you want to download on Spotify.

Here in this playlist called Tutorial, I have 5 songs I want to download for later listening.

IMAGE HERE

## 2. Go to [_playlistbuddy.com_](http://playlistbuddy.com/) and login with your Spotify account.

Here, convert your desired playlist to a YouTube playlist.


> I'd recommend selecting the filter Lyric Videos so you don't get that annoying music video dialogue/sound effects.


IMAGE HERE

## 3. Install Homebrew

[Homebrew](http://brew.sh/) allows us to install, remove and updated applications and packages. To install it, paste the following command in your Terminal (located under **Applications/Utilities/Terminal**)

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## 4. Install `youtube-dl` and `libav`

Now that you have Homebrew, it'll be super easy to perform the following commands in order to install the command-line program [youtube-dl](https://rg3.github.io/youtube-dl/) and [libav](https://libav.org/).

To convert music to different audio formats, `youtube-dl` needs either `ffmpeg` or `avconv`, and their helper programs `ffprobe` or `avprobe`. We can just install `libav` for all this.

```bash
brew install youtube-dl

# necessary dependency
brew install libav
```

## 5. Download your music!

Now that we have all the necessary packages installed, let's explore what command to use!

If you want to download the MP3 file(s) of a YouTube video or playlist and place it in our `Downloads` folder, then we will use the following command:

```bash
youtube-dl --extract-audio --audio-format mp3 -o '~/Downloads/%(title)s.%(ext)s' video_playlist_link
```

And that's it! Now all those songs I wanted are in my **Downloads** folder, ready to use!

---

## Troubleshooting

1. If you have any videos that were deleted from the YouTube Playlist due to copyright infringement, then there will be an error so you should remove those from the playlist before trying the command again.
2. If you already have a file in your `Downloads` folder called `Song.mp3` and there is a video called `Song` in the YouTube Playlist, then that file in your `Downloads` folder will be **overwritten**.