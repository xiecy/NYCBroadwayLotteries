const directEnter = [
		"http://aladdinthemusical.com/lottery", // Aladdin
		"https://lottery.broadwaydirect.com/show/angels/", // Angels in America
		"https://lottery.broadwaydirect.com/show/sponge/", // SpongeBob SquarePants
		"https://lottery.broadwaydirect.com/show/wicked/" // Wicked
	];
const socialEnter = [
		"http://anastasiabroadwaylottery.com/", // Anastasia
		"http://www.thebandsvisitlottery.com/", // The Band's Visit
		"http://www.abronxtalethemusical.com/lottery/", // A Bronx Tale
		"http://www.dearevanhansenlottery.com/", // Dear Evan Hansen
		"http://myfairladylottery.com/", // My Fair Lady
		"http://www.phantombroadwaylottery.com/", // The Phantom of the Opera
		"http://schoolofrocklottery.com/" // School of Rock
	];
const bulkEnter = [
		"http://www.luckyseat.com/book-of-mormon/", // The Book of Mormon
		"https://www.luckyseat.com/hamilton-ny/", // Hamilton
		"http://lottery.kinkybootsthemusical.com/", // Kinky Boots
		"https://www.luckyseat.com/mean-girls/", // Mean Girls
		"http://www.luckyseat.com/springsteen-broadway/" // Springsteen on Broadway
	];

function run() {
	enterDirectLotteries();
	enterSocialLotteries();
	enterBulkLotteries();
}

function enterDirectLotteries() {
	let opened = [];
	for (const url of directEnter) {
		// Open the URL in a new tab/window and push the opened window object into the array
		opened.push(window.open(url, "_blank"));
	}
	for (const win of opened) {
		win.document.create
	}
}

function enterSocialLotteries() {

}

function enterBulkLotteries() {

}

run();