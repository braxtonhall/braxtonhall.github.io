```eval
$("p").each((_, element) => {
	const $element = $(element);
	const href = $element.text();
	if (href.startsWith("https://open.spotify.com")) {
		const $iframe = $('<iframe height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>');
		$iframe.attr("src", href);
		$element.replaceWith($iframe);
	} else if (href.startsWith("https://www.youtube.com")) {
		const $iframe = $('<iframe height="100" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>');
		$iframe.attr("src", href);
		$element.replaceWith($iframe);
	}
});
```
