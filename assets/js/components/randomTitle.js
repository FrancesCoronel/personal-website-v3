// Changing title of tab

const title = document.title;

const altTitles = [
	'🔴 Do you read me, HAL?',
	'👽 E.T. phone home.',
	'🧐 Elementary, my dear Watson.',
	'⚡ Expecto patronum!',
	'🦁 Hakuna matata.',
	'💀 I see dead people.',
	'🖖🏽️ Live long and prosper.',
	'💍 My precious.',
	'🔬️ Wubba, lubba dub-dub!',
	"🔪 Here's Johnny!",
	"🤖️ I'll be back.",
	"🛳️ I'm king of the world!",
	"🏠 There's no place like home.",
	'🙃 Why you serious?',
	'🐶 Lassie, come home!',
	"😱 It's alive! It's alive!",
	'🚀 Houston, we have a problem.',
	'🌋 I lava you.',
	"🦀 I'm too shiny!",
	'❄️ Let it go! Let it go!',
	'👻 Ay de mí, llorona',
	'🛌 Once upon a dream',
	'🌺 Aloha e aloha e',
	"🐉 I'll make a man out of you.",
	"👸🏾️ I'm almost there!",
	'⛄ Do you want to build a snowman?',
	'🌹 And be with me for evermore',
	'🐧 Boogie Wonderland!'
];

window.onblur = () => {
	document.title = altTitles[Math.floor(Math.random() * altTitles.length)];
};

window.onfocus = () => {
	document.title = title;
};
