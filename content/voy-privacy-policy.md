# Voy Privacy Policy

**Effective date:** October 30, 2026

## Who we are

Voy is a podcast player for iPhone that skips ads for you. It is published by Voyager Software Corporation ("Voyager", "we", "us"). This policy explains what information the Voy app and its supporting servers handle, why, and the choices you have.

We built Voy to collect as little as possible. You do not need an account, and Voy shows no ads inside the app. We do not sell your information. The one exception to "as little as possible" is advertising measurement: we advertise Voy on Facebook and Instagram, and the app tells Meta when it is installed and used, so we can see which of our ads work. You control whether that is linked to your device's advertising identifier (see "Advertising measurement with Meta").

## Information we handle

Voy has no accounts and does not ask for your name, email address, phone number, location, contacts, photos, or microphone. What it does handle falls into the groups below.

| What | Where it lives | Leaves your device? | Why |
| --- | --- | --- | --- |
| Listening history: which episodes you played, your position in each, finished or not, your 20 most recent shows | On your iPhone; your private iCloud if you are signed in | Only to your own iCloud account | Resume where you left off, on all your devices |
| Playback speed, whether you saw onboarding | On your iPhone | No | Remember your settings |
| Ad-skip data and cached audio for episodes you open | On your iPhone (temporary cache) | No | Find and skip ads |
| Requests for the show catalog and an episode's ad-skip data | Our servers receive them | Yes, to our servers | Deliver the catalog and skip data |
| Audio and artwork requests | The podcast's own host receives them | Yes, to the podcast's host | Play the episode and show its artwork |
| App install, app opens, three in-app events, and in-app purchase events | Meta receives them | Yes, to Meta | Measure our ads on Facebook and Instagram |
| Subscription and free trial | Apple | Handled by Apple | Sell the subscription |
| Problem reports you choose to send | Our support email | Only if you tap Send | Fix the problem you report |

A small diagnostic log stays on your iPhone: the current file and the one before it, about 2 MB each (4 MB at most), with the older one replaced as the log grows. It does not leave your device.

## How ad skipping works

Ad detection happens on your iPhone. Our servers analyze each episode ahead of time and publish where its ads are, plus an audio fingerprint of the episode. When you open or play an episode, the app downloads that data and compares it with the audio as it plays, all on the device.

- **No microphone.** Voy never listens to your surroundings. It only analyzes the episode audio it is already playing.
- **Nothing uploaded.** No audio, fingerprint, or listening data goes from your iPhone to us or to Shazam. Apple's ShazamKit is used only to match against the fingerprints we downloaded.
- **What our servers can see.** Requesting an episode's ad-skip data tells our servers which episode was requested, from what IP address, and when. To make playback start fast, the app also requests data for the three newest episodes when you open a show. These requests carry no account, user, or device identifier.
- **Podcast hosts.** Episode audio and artwork come straight from the podcast's own host or its hosting provider, as in any podcast app. Those hosts see your IP address, a user agent naming the app and iOS version, and which episode you requested. Some hosts insert their own ads into the audio; their privacy policies apply to that.

## iCloud sync and your subscription

**iCloud.** If you are signed in to iCloud, Voy keeps your listening history and playback positions in your private iCloud database, so they follow you to your other devices. Apple stores this data under your Apple Account. We cannot read it, and it is covered by [Apple's Privacy Policy](https://www.apple.com/legal/privacy/). If you are not signed in, or you turn off iCloud for Voy in Settings, the data stays on your iPhone only.

**Subscription and free trial.** Voy offers an annual subscription with a free trial, sold through the App Store. Apple handles payment and billing; we never see your payment details, name, or Apple Account. The app checks your subscription status with Apple on the device, and we do not run our own receipt server. Meta's SDK may report trial starts, purchases and renewals to Meta to measure our ads; see "Advertising measurement with Meta".

## Advertising measurement with Meta

We advertise Voy on Facebook and Instagram. To learn which ads lead to installs and use, the app includes Meta's software development kit (SDK).

- **What is sent to Meta:** that the app was installed and opened, plus three events with no titles or names attached: a show page opened, an episode page opened, and playback started. Meta's SDK may also report in-app purchases automatically, such as the start of a free trial or a subscription purchase or renewal, with the product, price, currency, transaction and trial details. These reports never include your payment card or Apple Account details. Meta's SDK also sends device information such as model, iOS version, and app version, and may send crash data about its own code.
- **Your choice.** On first launch, iOS asks whether Voy may track you. If you tap **Allow**, the events include your device's advertising identifier (IDFA), which lets Meta link them to its own records about you. If you tap **Ask App Not to Track**, the IDFA is not sent; the events are still sent without it, and Meta measures campaigns in aggregate through Apple's SKAdNetwork. You can change your answer any time in Settings > Privacy & Security > Tracking.
- **How Meta uses it.** Meta processes these events to measure and improve our ad campaigns and may use them for its own advertising purposes under [Meta's Privacy Policy](https://www.facebook.com/privacy/policy/).
- Meta does not show ads inside Voy.

## Who receives information

We do not sell your personal information. We share it only as this table shows.

| Recipient | What they receive | Their policy |
| --- | --- | --- |
| Meta Platforms | Install, app-open, in-app and in-app purchase events; device information; the IDFA only if you allow tracking | [Meta Privacy Policy](https://www.facebook.com/privacy/policy/) |
| Apple | Your iCloud sync data and your purchase, as the provider of iCloud and the App Store | [Apple Privacy Policy](https://www.apple.com/legal/privacy/) |
| Podcast hosts and their providers | Your IP address, user agent and the episode requested when you play it or view its artwork | The policy of each podcast or host |
| Amazon Web Services | Hosts our servers in the United States (us-west-2) and delivers data through its CloudFront network; processes requests on our behalf | [AWS Privacy Notice](https://aws.amazon.com/privacy/) |

We may also disclose information if the law requires it, to protect our rights or users' safety, or as part of a merger or sale of the business, in which case this policy continues to apply.

Under some U.S. state laws, sending app events to Meta for advertising may count as "sharing" personal information for cross-context behavioral advertising. You can opt out by choosing **Ask App Not to Track** or turning off tracking for Voy in Settings, which stops the advertising identifier being sent.

## How long we keep it

- **On your iPhone:** listening history stays until you delete the app. Cached episode audio is limited to the two most recent plays, and ad-skip data to 100 MB, with the oldest removed first.
- **In your iCloud:** until you delete it (Settings > your name > iCloud > Manage Storage > Voy) or delete the app's iCloud data.
- **On our servers:** we do not store requests by user and do not keep access logs of IP addresses. Our servers record only slow requests, with the route and timing but no URL, address or identifier. These system logs rotate and are overwritten automatically.
- **Problem reports:** in our support mailbox for as long as needed to handle the report, then deleted.
- **Meta and Apple** keep what they receive under their own policies.

## Security

The app talks to our servers and to Apple over encrypted HTTPS connections. Our servers run on AWS with encrypted storage. Some podcast hosts still serve audio over plain HTTP; those requests are not encrypted. No system is perfectly secure, but we limit what we hold so there is little to expose.

## Your choices and rights

- **Tracking:** allow or refuse in the iOS prompt, and change it any time in Settings > Privacy & Security > Tracking.
- **iCloud sync:** turn it off for Voy in Settings > your name > iCloud.
- **Delete everything on the device:** delete the app. To remove synced data, also delete Voy's data from iCloud storage.
- **Subscription:** manage or cancel in Settings > your name > Subscriptions.
- **Access, deletion and other rights.** Depending on where you live (for example the EU, UK, or California), you may have the right to access, correct, delete, or port your personal information, to object to or restrict its use, and to complain to a data protection authority. Because we have no accounts and keep no per-user records, we usually hold nothing we can link to you; contact us and we will help, including with requests about data Meta received through our app. We will not treat you differently for using these rights.
- **Legal bases (EU/UK):** we process data to provide the app you asked for (contract), for app security and operation (legitimate interests), and for advertising measurement with your consent where the law requires it.

## Children

Voy is not directed to children under 13 (or the minimum age in your country), and we do not knowingly collect their personal information. If you believe a child has sent us information, contact us and we will delete it.

## International transfers

Our servers are in the United States. If you use Voy outside the U.S., requests to our servers and data sent to Meta are processed in the U.S. and other countries, under safeguards such as the EU Standard Contractual Clauses where required.

## Problem reports

If you use **Report a Problem**, Voy opens an email to our support address (dreamatmai@gmail.com) in your Mail app, already filled in with the app and iOS versions, your device model, the episode you were playing, and the ad times the app used. You can read and edit it before sending, and nothing is sent unless you tap Send. We use it only to fix the problem, and we receive your email address because you emailed us.

## Changes to this policy

If we change this policy, we will post the new version at this address and update the effective date. If a change significantly expands what we collect or share, we will also tell you in the app before it takes effect.

## Contact

Questions or requests about privacy: **dreamatmai@gmail.com**

Voyager Software Corporation
1908 Thomes Ave STE 12201
Cheyenne, WY 82001
USA
