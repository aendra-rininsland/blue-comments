# BlueComments

## Bluesky commenting system

Heavily inspired by https://graysky.app/blog/2024-02-05-adding-blog-comments

To use —

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
