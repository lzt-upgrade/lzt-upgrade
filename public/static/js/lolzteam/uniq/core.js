function setIconColor(color, attribute) {
	const divs = $.find('div#LZTUPCustomUniqIcon');

	let updated = false;

	Array.from(divs).forEach(div => {
		for (const svg of Array.from(div.querySelectorAll('svg'))) {
			if (svg.attributes.fill !== undefined) {
				if (color !== '') svg.setAttribute(attribute, color)
				else svg.removeAttribute(attribute)
				updated = true
			}

			const elements = svg.querySelectorAll('*')

			for (const element of Array.from(elements)) {
				if (element.attributes.fill === undefined) continue;

				if (color !== '') element.setAttribute(attribute, color)
				else element.removeAttribute(attribute)

				updated = true
			}
		}
		if (!updated) for (const svg of Array.from(div.querySelectorAll('svg'))) {
			if (color !== '') svg.setAttribute(attribute, color)
			else svg.removeAttribute(attribute)
		}
	})
}