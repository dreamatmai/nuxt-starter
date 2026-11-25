# Voi Privacy Policy

**Effective date:** November 25, 2026

## Who we are

Voi is a free podcast player for the Mac that skips ads for you. It is published by Apollo Apps Inc ("Apollo Apps", "we", "us"). This policy explains what information the Voi app and its supporting servers handle, why, and the choices you have.

The short answer: Voi does not collect information about you. It has no accounts and no sign-in, no purchases, no advertising, no analytics and no tracking. We do not sell or share your information.

## Information we handle

Voi does not ask for your name, email address, phone number, location, contacts, photos, or microphone. What it does handle falls into the groups below.

| What | Where it lives | Leaves your Mac? | Why |
| --- | --- | --- | --- |
| Listening history: the shows and episodes you played recently, your position in each, finished or not | On your Mac | No | Resume where you left off |
| Playback speed, the window's size and the section you last looked at | On your Mac | No | Remember your settings |
| Copies of the show list, show artwork, ad-skip data and audio for episodes you open | On your Mac (cache) | No | Load quickly; find and skip ads |
| Requests for the show list and an episode's ad-skip data | Our servers receive them | Yes, to our servers | Deliver the show list and skip data |
| Audio and artwork requests | The podcast's own host receives them | Yes, to the podcast's host | Play the episode and show its artwork |
| Problem reports you choose to send | Our support email | Only if you send the email | Fix the problem you report |

A small diagnostic log stays on your Mac: the current file and the one before it, about 2 MB each, with the older one replaced as the log grows. It does not leave your Mac.

Voi contains no advertising or analytics software and no third-party software that reports on you.

## How ad skipping works

Ad detection happens on your Mac. Our servers analyze each episode ahead of time and publish where its ads are, plus an audio fingerprint of the episode. When you open or play an episode, the app downloads that data and compares it with the audio as it plays, all on your Mac.

- **No microphone.** Voi never listens to your surroundings. It only analyzes the episode audio it is already playing.
- **Nothing uploaded.** No audio, fingerprint, or listening data goes from your Mac to us or to Shazam. Apple's ShazamKit is used only on your Mac, to match against the fingerprints the app downloaded.
- **What our servers can see.** Requesting an episode's ad-skip data tells our servers which episode was requested, from what IP address, and when. To make playback start fast, the app also requests data for a show's three newest episodes when you open the show. These requests carry no account, user, or device identifier.
- **Podcast hosts.** Episode audio and artwork come straight from the podcast's own host or its hosting provider, as in any podcast app. Those hosts see your IP address, a user agent naming the app and macOS version (for example `Voi/1.0.0 (Macintosh; macOS 26.1)`), and which episode you requested. To make playback start fast, opening a show also starts downloading the audio of its newest unfinished episode from its host, before you press Play, so the host sees that request too. Some hosts insert their own ads into the audio; their privacy policies apply to that.

## Who receives information

We do not sell your personal information. The only parties that receive anything are in this table.

| Recipient | What they receive | Their policy |
| --- | --- | --- |
| Podcast hosts and their providers | Your IP address, user agent and the episode requested when you open a show (its artwork and the start of its newest unfinished episode), or play an episode | The policy of each podcast or host |
| Amazon Web Services | Hosts our servers in the United States and delivers data through its CloudFront network; processes requests on our behalf | [AWS Privacy Notice](https://aws.amazon.com/privacy/) |

You get Voi from Apple's Mac App Store; Apple handles the download under [Apple's Privacy Policy](https://www.apple.com/legal/privacy/). Voi itself sends Apple nothing about you.

We may also disclose information if the law requires it, to protect our rights or users' safety, or as part of a merger or sale of the business, in which case this policy continues to apply.

## How long we keep it

- **On your Mac:** listening history, settings, the cache and the log stay in Voi's own storage until you remove them. To remove everything, delete the app, and delete Voi's folder in `~/Library/Containers` if macOS left it there.
- **On our servers:** we do not store requests by user and do not keep access logs of IP addresses. Our servers record only slow requests, with the route and timing but no URL, address or identifier. These system logs rotate and are overwritten automatically.
- **Problem reports:** in our support mailbox for as long as needed to handle the report, then deleted.

## Security

The app talks to our servers over encrypted HTTPS connections. Our servers run on AWS with encrypted storage. Some podcast hosts still serve audio over plain HTTP; those requests are not encrypted. No system is perfectly secure, but we limit what we hold so there is little to expose.

## Your choices and rights

- **Delete everything:** delete the app and its folder in `~/Library/Containers`, as described above.
- **Access, deletion and other rights.** Depending on where you live (for example the EU, UK, or California), you may have the right to access, correct, delete, or port your personal information, to object to or restrict its use, and to complain to a data protection authority. Because we have no accounts and keep no per-user records, we usually hold nothing we can link to you; contact us and we will help. We will not treat you differently for using these rights.
- **Legal bases (EU/UK):** we process data to provide the app you asked for (contract) and for app security and operation (legitimate interests).

## Children

Voi is not directed to children under 13 (or the minimum age in your country), and we do not knowingly collect personal information from anyone, children included. If you believe a child has sent us information, contact us and we will delete it.

## International transfers

Our servers are in the United States. If you use Voi outside the U.S., requests to our servers are processed in the U.S.

## Problem reports

If you use **Report a Problem…** in Voi's About window, Voi opens an email to our support address (wzy@ihanghai.com) in your mail app, already filled in with the app and macOS versions, your Mac's model, the version of the show list, the episode that was loaded, and what the app did with its ads. You can read and edit it before sending, and nothing is sent unless you send it. We use it only to answer you and to fix the problem, and we receive your email address because you emailed us.

## Changes to this policy

If we change this policy, we will post the new version at this address and update the effective date.

## Contact

Questions or requests about privacy: **wzy@ihanghai.com**

Apollo Apps Inc
