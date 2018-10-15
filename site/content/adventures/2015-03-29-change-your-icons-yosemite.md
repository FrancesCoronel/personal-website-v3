---
title: "Change Your Icons on Yosemite with Scripting 🔧"
date: 2015-03-29
description: I got tired of Yosemite's icons and decided to take some initiative without the usual dependency on an app. It took about 2 days for me to perfect this strategy and now it's time to make your process a lot easier than mine.
aliases:
  - /2015/03/29/change-your-icons-yosemite/
image: https://i.imgur.com/7lkPqpY.png
categories:
  - blog
---

> for all you machines out there

1.  [Intro](#section-intro)
2.  [Tools](#section-tools)
3.  [Step 1 - Get Your Icons](#section-step1)
4.  [Step 2 - Get The Command](#section-step2)
5.  [Step 3 - Execute Command](#section-step3)

## Intro

So maybe you got tired of Yosemite's icons. That's cool.

Even without apps like the once legendary [`CandyBar`](https://www.panic.com/blog/candybar-mountain-lion-and-beyond/ "CandyBar") or [`LiteIcon`](https://www.freemacsoft.net/liteicon/ "LiteIcon"), you can still change all your icons. No more dependencies!

I got tired of Yosemite's icons and decided to take some initiative without the usual dependency on an app. It took about 2 days for me to perfect this strategy and now it's time to make your process a lot easier than mine.

## Tools

- `Terminal`
- your favorite set of icons
- some patience

# Step 1 - Get Your Icons

[DeviantArt](https://www.deviantart.com "DeviantArt") is my go-to place for icons sets, but you can also try [IconArchive](https://www.iconarchive.com/ "IconArchive") for a broader range of options.

If you like the app icons I show in these pictures, then you're welcome to download them from my Dropbox.

![Bubble Icons - Default Apps](https://lh3.googleusercontent.com/ZPT-ecledTwHu7pqotisSH9q7RbLlSaDTLzoLSi90sh2kbn3oqh_jCns3EqyrG97So7rx-npbkSPl1WJI1yvfGB964U3gDliJNoAm1ZeU2KzSS4Ahn5HleAxQuxCTlDaR84yAv91f-KMcoO3tdLYtn2DQEy2A_fQDDxOEgGSNDzOpVv1AvW7A10G7ZgPCkb9jJSsSUkwYz3eQvdjUypBffAkXZnQyG4Ehzwg5VaqGusVV7FRuMr8ROcijh9eVJqrdoRylq2ympROAdiG9qkHu29cFiI2jzalJmhZpNgw3PgyG492XN-LBVeP0NDjtKjADOybWbobo2Q6nEXep_7i5U9nFRPagzmvFIM8EJbUABxjPXTHFTl3e_AlYyZSfDw0stiizwUH4SBZnROnbGOZrUkvwQVpZwlJD5cBUlX38RRNuQWidnP8wWecNwDyjo6Wgh7gskJwSECkkX56_ISq6UkVzv7Kh4fJchm88qb1urREK-XSInaWU7VedkDq0IHMwAFqG5R6CbsWuYgHqSJtD3VPh_Z-FemaOaOIPPEEylJLPYfH9ApwTR6f4h7A_CY5H_qlICXdZt-kQ6Z0u1ZRWRo2Dzchc6f-3Sw3Gx5RTkZpBtaoJGViX1s3CBNMazGt=w352-h220-no)

![Bubble Icons - Utility](https://lh3.googleusercontent.com/pCtmh4zJuZAa0JyL53JuicE-3aIacDVTaG1XT65sgHUdsjznD84tTc4kPx4M2Qh-_lTznRvoY5qBQLqLyuZ9-Kz-vvz4z1O1gZcnC1PkGzOT2y4UgrmEq2syzMr4Yz1N0zKQ7GQJ19GaEITHEx21W4EzWZpkoNEXSdGFuirF2YVixb1Yxuk9dxiJshWI0TsgDVryDOc54ygtH66ikkL-HnUeR1rAwa1vOqx7Jn_QTAaSisGD0EMoWCzVNSegiRP1g3SmAr2aiLfTDRsAcyvE0NxnUtfz34h0zdVRoA1tDQ1MBWbVQT2CsoB1wVNWYEmu37SGQktQrLTeOlS2Z1lOeiNwuq18hNFkZtK7J6MZTDDCjmWp5XF5rqd-PJnRIx7dlkc9_d4BWYXWcMI2xsuWw6ZkTkS6k3Iap64s_qycslKab6TnVH5wrb-_Di0WuJiqujp3tNc60kGNTS7lZEthMbPVoCMrf60c7FIIPYMl86-Ga62e2N9w5LMIqlgpkmSvE4XOce7jpESPOeqpjTY5iKeuGxv_IbYFo70QgMsd83gP4_Haz8yxAjzpznoZSG0MKgz6CZnlmTAFPJmaoAqvxuHlsX1h2ozl8LCHy6IpomvBnTxq5atjfL06ApM8Loj3=w352-h220-no)

## [Here is a `ZIP` file of the icons and commands used in this tutorial.](https://github.com/fvcproductions/customize-icons "Icons")

_A special thanks to these guys for the amazing circular icons that I use in this how-to._

- [Sebastian de With](https://dewith.com/ "deWith")
- [All the contributors to `Yoios` on GitHub](https://github.com/mmarfil/yoios "Yoios")

# Step 2 - Get The Command

I include this command file in the [`ZIP` file](https://github.com/fvcproductions/customize-icons "Icons") mentioned in **Step 1**, but for reference, here is the code for the `ChangeIcons.command`.

```ruby
#!/usr/bin/env ruby

require 'json' require 'shellwords'

if ENV['USER'] != 'root' puts "You'll be prompted once to enter you administrator password." end

Dir.chdir(File.dirname(__FILE__)) do

 file = File.read(%Q(.set_icons/icon_data.json)) icon_data = JSON.parse(file)

 icon_data.each do |key, value|

 app_path = "/Applications/#{key}"

 if Dir.exists?(app_path) and File.exists?("#{value}.icns") puts "Changing icon for #{app_path}" `sudo .set_icons/setfileicon "#{value}.icns" "#{app_path}"` end

 end

 puts "Restarting Finder and the Dock" # `killall Dock` # `killall Finder`

 puts %Q(Finished!)

end
```

Now here comes the tricky part. This command relies on a `JSON` file that is named `icon-data.json` and a `UNIX Executable File` called `setfileicon`.

![All The Icons Folder Screenshot - 1](https://lh3.googleusercontent.com/lSWmxQZqIvK0BpZPOAdlxHx_XDy5EaltsEejehe2fwchwjWe56DcCog3TpibQN8L0xlValZJeytrlXYs5lCnXAqtoEjjQQzB9uMM1dCFEwZsHBvmuVCWmX2B0aZC9Ks13JhiNofdzbFwAAIpFZkiDkKD4wB-EJnGM7XZ1nMqvos6CRUKrPCK6bt1rAaqBom8GBaN3YDK4jdkRXWAT-DS-pfWjZRc4N-X_AabFuokiqWkNZCcGouzjDwfAol7uEC0rb01nu6zrxkTTAkyzhtgL3ZBsC0rGpI17lNJqPH69c2VySwDfCg_gPWX4aYL4Ibv7IDrSYt2yZVUWxkC1aEBm9ng8cmQ6DyrNSCUg62ocUKmi6peC4KJK9cQoststeOpH8E3zFjJYW3qF3IYv3moiZxPAwq2C1jwWrHXLEJFN_V8aveGxlXy_Co1rqsK2DPvuOnhwvXLcqYIxS92_P1KOOyuu0bPG30Vgu8jJcye7Q2uW7FonndD5kPknqYxrKlyvxXtnXlypAaxgw6Z6W4Vpmg0Mrla7ZHs2oyhSwz0AjgjRdjrqCONqWN9791zNJwPOSFbj-tHQytVLV6LXZcz6Snl3hDHxL-FOjqxXU78kN0tEshhoTHcTpZBGN9E9_45=w403-h272-no)

![All The Icons Screenshot - 2](https://lh3.googleusercontent.com/dGSFh4eNr-l9hl_YMq7lOOW8QFySHE3rkVW8weQzw9HIJY8u_tMkYw5PBwPOddx2PyFpt3E8n4gGWRdNJCFkQ_SACW3aHhzzzMY882OCYIzbDLxYlZCjtSYxGUbdoqQmBJly64bluI9dGnbt0y59MR5bZ_kZlRYaEqePaPm1_SFVkDFpswTuLfutXlIAzXIzppCUDDzmn5rMjw0DoUYODXwUDnqQ0mQqRVzpa3q1kqnO-gxa3BWiziMlGu4Z_x5KuAuOwA-fVrsrhZXtB7-_9NXl8FXg5yZr6P4Yg8aWpyazvR4orT41_4umdGUDxHDr2RCQG8x6jAr8hQPrWpesAp-uOmw5DA_G_h1Rl04fvnORH1IlAkLwK5AKcPGdcHxzPLsvQfizmD9jsxH7mk0HwsEQAs8c603Zz8ENwnFGgHFCXmDUuKGL2QrDgJEwd9sEHBuPY-z6RHE1Uc08askghUezvIqwPozI8Uu44qIgjP--mXi0DQu0t43JcUD5coufUlkF4iBT1tmzA-9YANNw30UJkkiaCbON1itIFQCSn64FNuIhqsBjCkiijTy00P96VhHkox-1RbF11gf8kHg3WLZ7mJeKqPm8p7jERVso4UW0reHBXs2f1ETwHjkyqDac=w413-h163-no)

These files are both included in a folder called `set_icon` in the [`ZIP` file](https://github.com/fvcproductions/customize-icons "Icons") provided in **Step 1**.

The `icon-data.json` file looks something like this:

```json
{
  "1Password 5.app": "1Password 5",
  "Alfred 2.app": "Alfred 2",
  "Amphetamine.app": "Amphetamine"
}
```

It is formatted with the name of the app first in quotes followed by a semi-colon and then the name of the `icns` file.

Edit this `icon-data.json` file to include your own apps or create it yourself using your favorite text-editor.

Here is how the `JSON` file for the Utilities looks like.

![JSON file](https://lh3.googleusercontent.com/huSFEI6n6ZGaIaAjWw3GpCCZSxl1dXNsfsIbGzF_u8F4whBWpwmDx-IavxFLHWzslrwP2bza8NxsVGFSQrENtHX99UrKVeRtHWkxC_qEOZEkjP73nk7ROVPP29iE9TAH-BJJHIZR8tEhZ6AFJoiUTWU0jYd3SmVDH5KA2HVI0Gmhl2wvB7wwxJWyGuFh1WJ3LE7LWmjVImU0GzdxA7jF0Ag8tIFdP5KjIwkj_LnbZYmzZzEvwD651iH6W99JJScddSIlKN1NTvXOgT3OH5U4j196tIrBor6HAZuiU4VjdkJasMfBT8zoqL2NtOWzztnKM8nDj0ZlQm1WaBxapEBzdIIEfeML9pGh2xzm94lpGTox4b7_TNVybXa33_gYEiZMWCTASIeRLEREKOV1cqCHe8DJ0V2-lXgF8KM5iD9KMSofek09z2vWRu3Noply1yip7cTSy6N9AiPzY4QOmFJ-79FCLJtiF6uOmMlMP3JR41gb_dwDKGLwvw7TFavx4cxDSOCZzNeQO3JKcZ5wXmG0Gsc77HFUgQm3_wN40Jp_ZbuNhIut7gF-inPaBO680N_3pTW2BPldm-zl3O0QStrTjUNq_7B44aqORYSl1b40HMBaVj0Ovwzu2QuqQn3_wEbb=w352-h220-no)

It is `case-sensitive`, so make sure to type everything correctly to suit what the app is called and what you named the corresponding `icns` file.

> When you are editing this file to add on your own apps, make sure there's not a comma on the last line or there will be an error.

Now, using `Terminal`, type in the following: `defaults write com.apple.finder AppleShowAllFiles YES`. Once you press `Enter`, this command will show all the hidden files on your Mac. Don't mess with any of these hidden files. The reason Apple hides them is so that the user has less of a chance of messing things up.

> To make the files hidden again later, type in the same command but with a NO at the end like this: `defaults write com.apple.finder AppleShowAllFiles NO`.

After that, type in `killall Finder` into Terminal for the command to restart the Finder and have the hidden files be revealed in your Finder.

![Show Hidden Files Command in Terminal](https://lh3.googleusercontent.com/K8a7c1Xffn1B2FpOO--jdLtzWm2YQgePclyCQXnO1PhW1wwWpIF6J0l3ES8wtmU8IP3CVmrJ9uEVjc_nJHsiHPyd5Yl3TFTjokPMIR5Q84tg9U2p3D4BnmbcFJNBWYfyI3erglQPQUCGi9KKhRFcZHNRK_3HjQXdYSw5ggf0lO3FEtDmau0D8AWoncS23dDyLUpuKYWoDWNfZBKAufs1RowFemmp-ItWzbXCGXPcJRKkaK7_GDz3TQtuGbG-pXlJnNVHQNcAIdzdjMCpvBK6KHudwapI5HM1jlvebeqTA4GYYb-rK6rwQcxIi-4fs7CWY1WE9fA90hycTtT8Eh8oIrA2kt_bHGxQiQo7bGw6WUFuxFqRAbMxz8bk8Pql5sVDVGKY-B_CnFuQX08GOy63s4iKQWm1m0CEb2m2vfA4zkyaksUGiUNyBPvZpZTOYnxXv6OjVKFB9Ai8BphgElFXoPMR5AZfQZOBaRi4CU-KD7CQR0Pm6tgJb25ogOYxYmsY8lUIV5xJYA6BMRx_yuSzC1-f8Vzc8rL2XdcOh1aY29S7ZrhehvGseLiPzDoYKHFfyqj1OnkDDxaM9bWMdTuqqdLqTLtSDtqfFTeYmvs7miHtgiQvcgFQokEA9-4uQADm=w763-h139-no)

Now that you have your Finder revealing all the hidden files - in the folder where you have all your icons properly named, copy and paste the folder `set_icons` from the [`ZIP` file](https://github.com/fvcproductions/customize-icons "Icons") mentioned in **Step 1**, and rename it to `.set_icons`. Adding a period in front of the folder name makes it hidden and you will therefore not be able to see it anymore.

It looks exactly like the `.set_icons` folder already included within the folder called `Utilities` that can be found in the [`ZIP` file](https://github.com/fvcproductions/customize-icons "Icons").

![Utility Sub-Folder](https://lh3.googleusercontent.com/B2FQ2J9N2Pse27HQcc2ZjdBOWRZK9FTBLGgvk3QOemu0hfys1Tp4AiyUosQ1cSq3i5B4LPovp_op4GmvbOpbQglkUdJ5lqIBZ6SIhcUQRuDvMfe1GsOSnfI8BrMICNMGnqkFkvI1VSGRhrh7oWVz9B3-q3AzEyA5NVtPwvic1rgDLFkBi3MqZadv4fOwWPKrR77-iIX63BOIl9PSdSSBOgFRwczcsx-0CQHmmzyFfTY1R0PM7KdMxiWRXajLro2fcztB5OtD14SiT8wWws3yl2XTSdOFA8kRGqM6KhN4tJIECmlUBkIN_EPwO6DKlAtUM33WL_SyE61wvS28AdIw97fNPCdCBlmzXsubxtKtrBJoBhv_O7YT-NTSH9Q7OEsfRw4lV6SGdPj8JeTJQogC6Kkf9xx32TOYqGToDQbyFLLw_U80EFAfeqT7xH0vHRgKtcyDpponUhn0ojZAByTzkMhz2Ok9wS-KCAfUbGOTjrxRxu4rFfjwfezZeY_RTjp0zSaoITKDLd077I-RcBjOWl38uX9AMH9GowQrrl61b5y2ZEvLdWickAqnFmn7Y6Pv3UgT-SH9norHhLfVpQnHZ-fse43tPKcuSN-CiRMuM8NwPXdFGL97XuYfvHhQbEBZ=w421-h605-no)

So if you want to change your Utility icons as well, the `.set_icons` folder located in the sub-folder `Utilities` already has the `json` file with all the necessary modifications.

> The only difference between the `ChangeIcons.command` within the `All The Icons` folder and the `ChangeUtilityIcons.command located within the`Utilities folder`is that on Line 36, the app path is listed as`app_path = "/Applications/Utilities/\#{key}"\`.

_A special thanks to [James Moore](https://twitter.com/foozmeat "James Moore"), who created the `ChangeIcons.command` to replace all the icons and Damien Bobillot who created the `setfileicon` UNIX Executable File._

# Step 3 - Execute Command

> otherwise known as `TLDR`

Now you probably have something like the following:

- a folder called `All The Icons` with - all the icons you want to replace your old ones (in `icns` format) - the `ChangeIcons.command` that was included in this [`ZIP` file](https://github.com/fvcproductions/customize-icons "Icons") - a _hidden_ sub-folder called `.set_icons` with - a modified `icon-data.json` file to include your own personal apps - the `setfileicon` UNIX executable file

At this point, if you've done everything right, you can "hide" your hidden files again in your Finder by executing the command `defaults write com.apple.finder AppleShowAllFiles NO` in `Terminal`. Make sure to execute `killall Finder` as well so that your Finder restarts and shows the changes.

Now go ahead and click the `ChangeIcons.command` to change all your icons simultaneously.

![ChangeIcons.command in Terminal](https://lh3.googleusercontent.com/FJ6kBJzH-vW92UXQpXIogQYmiJYlLgDu4SxLgBd3G98nruD00A_0jd7Veh1AGsE1RTYoLaqqXkG9PYEP79jt7TX4u7rYbilwPxxDjAkgJpXp_X9tYUfmCOnq-Stj2Q8IW3woyWrap69_9sQeNFs-5BkuXbHohJ1E4gpRLmdaHScpBdSitMoWw_SCzjbZj9W9BfdZb7ZzUMlfsEldeCOHGkJm5rieCvQi1E1ky8jO5D4xxweLkSNiiQrPei07DR4A_iTT2FyjQPF0MQ6i5XZYYTWewScaQniAZdXxBz1jQ8_USgj0YyrDnI5ui6drW6s17DOWOMBdQHSudJMF60d91fdkUcudIS73UxRkFh9HWgJFzSMXH62R-jIgz7nlywN6XDsgJa_kAYNEBWHuAtqskC7KCoMafBzgcc5g1cSDPKQk1s3EeipD9Ft5aX_Djg94_jtldWhp_AOfY1LM85rHh7RBkH4z3hsClugpN1brglE4yl17mxBguPnq465VlOsNatl2L09_uRmP9B2zQKXFR8G6r_TuOuSFM2LkpWsX0WxAxT8I584FtWxv4oMRFQeUDQuHNbYnHkzc0Osb9J3uBxofrgZ6EoDmKL2e_u1yKrOZkKETHKGGj-f0hO5VEcHr=w239-h220-no)

You will be prompted to enter your password and _walla_ you have all your snazzy new icons in place in seconds!

> If you want to change your Utility icons as well, go ahead and click `ChangeUtilityIcons.command` too within the sub-folder called `Utilities`, assuming you properly named all the icons so that it works with the `json` file that is shown in **Step 2**.

## **Possible Errors You May Encounter**

- You tried to edit the command files and now have a syntax error, like in the form of quotes - just make sure to use _straight quotes_. - You have a syntax error in your `icon-data.json` file, like a comma on the last line. - You forgot to include a certain app in your `icon-data.json` file and so the icon does not change when you execute the command. - An app is locked and, therefore, the icon cannot be changed. To unlock an app, go to the app, right click, `Get Info`. Uncheck the `Locked` button.

![Locked App Error In Terminal](https://lh3.googleusercontent.com/ofAiorFh34EmjrDaLJ1ilvIFhBEH79TC_0pPD1eWjTk1RXlU0dMZUHp18gHF9h5x9Gh1xC7Wd4Gx0b8MWt1SUYjfrMc6tClbjJFViCxYMJKmQnD0h8hL9fYy7uakwRnM7A4y2lns3UJ-sX5DwgckszoiaZeteh8go0ioYP9dlb706GqaylIbo_L_ux8w11gCEVmBFac55J8s7iXN1cDHQAbkXgB9kzzAJtb8B-d3mzumIa_KRvlCwZReXWxX6ZTA-Jd-L2puHVdLu7fxw2KiP33QEel3BuCpCeHlf0stFrAFt5CHjzcoRzin1gnh3TSqJt3FATsL-FSVK3_0dYus9qBSBWLvhDAy2MKk0DdN9ZoupiProDm6vAWK-mr-f8h3-7m0fnkJ1-D76025I30wpE1WEj28uERMLR-9AmydqUDEwDo0ghnrC5P9eaxVn4f10Bu95huiD5yOKW3wOa39fZ4eTkLaGpF3J9fWQkQCsJJG5J-HjSM3kAix-7Pu4YoRNwttcUxOUKh9oAiN9OPxUwXFHaz0Qw_fZ-PBJGtIDQfGu23cq_rG0ovUl2YoTtkxGndYg7CiBlB9j-QfesNCy1PDvaxmF8yenVSzSLWvmT0TWSqM_5RSSGYWl2iS0VNN=w455-h133-no)

![Locked App - Dropbox](https://lh3.googleusercontent.com/K8a7c1Xffn1B2FpOO--jdLtzWm2YQgePclyCQXnO1PhW1wwWpIF6J0l3ES8wtmU8IP3CVmrJ9uEVjc_nJHsiHPyd5Yl3TFTjokPMIR5Q84tg9U2p3D4BnmbcFJNBWYfyI3erglQPQUCGi9KKhRFcZHNRK_3HjQXdYSw5ggf0lO3FEtDmau0D8AWoncS23dDyLUpuKYWoDWNfZBKAufs1RowFemmp-ItWzbXCGXPcJRKkaK7_GDz3TQtuGbG-pXlJnNVHQNcAIdzdjMCpvBK6KHudwapI5HM1jlvebeqTA4GYYb-rK6rwQcxIi-4fs7CWY1WE9fA90hycTtT8Eh8oIrA2kt_bHGxQiQo7bGw6WUFuxFqRAbMxz8bk8Pql5sVDVGKY-B_CnFuQX08GOy63s4iKQWm1m0CEb2m2vfA4zkyaksUGiUNyBPvZpZTOYnxXv6OjVKFB9Ai8BphgElFXoPMR5AZfQZOBaRi4CU-KD7CQR0Pm6tgJb25ogOYxYmsY8lUIV5xJYA6BMRx_yuSzC1-f8Vzc8rL2XdcOh1aY29S7ZrhehvGseLiPzDoYKHFfyqj1OnkDDxaM9bWMdTuqqdLqTLtSDtqfFTeYmvs7miHtgiQvcgFQokEA9-4uQADm=w763-h139-no)

### Have fun with your new icons! 😍
