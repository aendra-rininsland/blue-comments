### Bluesky-based commenting system

Heavily inspired by https://graysky.app/blog/2024-02-05-adding-blog-comments

## Quickstart

You effectively need to set two variables, the DID and the RKEY. Drop the following into your page:

```
const DID = 'did:plc:...'; // YOUR BSKY DID; see: internect.info
const RKEY = '...'; // RKEY OF THE POST (the string after `/post/` in the URL) HERE

import('https://esm.sh/blue-comments@^1');
var el = document.createElement('blue-comments');
el.setAttribute('uri', `at://${DID}/app.bsky.feed.post/${RKEY}`);
document.body.appendChild(el);
```

If using Ghost, in the post editing sidebar, use the "code injection" option to add the above
to your footer.

## Slightly-more-involved usage

This is better if you're wanting to use this on multiple pages.

#### In your `<head>` section:

```
<script type="module" async defer src="https://esm.sh/blue-comments"></script>
```

#### Where you want to put comments:

```
<blue-comments uri="at://did:plc:.../app.bsky.feed.post/...">
    <h3>You can replace the default comments header section by specifying children</h3>
</blue-comments>
```
