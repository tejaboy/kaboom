loadSprite("mark", "/pub/img/mark.png");

init();

scene("main", () => {
	const mark = add([
		sprite("mark"),
		pos(100, 100),
	]);
});

start("main");