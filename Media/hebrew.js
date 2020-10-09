
function convertTextToHebrew(e)
{
	console.log('Processing ' + e.target.value.length)
	const transliterate_table = {a: 'א', b: 'ב', c: 'כ', d: 'ד',  
								 e: 'ע', f: 'פ', g: 'ג', h: 'ה',
								 i: 'י', j: 'ח', k: 'ק', l: 'ל',
								 m: 'מ', n: 'נ', o: 'ו', p: 'פ',
								 q: 'ק', r: 'ר', s: 'ס', t: 'ת',
								 u: 'ו', v: 'ו', w: 'ש', x: 'צ',
								 u: 'ו', v: 'ו', w: 'ש', x: 'צ',
								 y: 'י', z: 'ז', T: 'ט', C: 'ך',
								 M: 'ם', N: 'ן', P: 'ף', X: 'ץ'									 
								}

	let letters = /^[a-zA-Z]+$/;
	text = ''
	for(let i = 0; i < e.target.value.length; i++){
		 
		console.log('Converting  ' + e.target.value[i])
		 
		if (e.target.value[i].match(letters)){
			console.log(`Processing  ${e.target.value[i]}`);
			let letter = e.target.value[i];
			let hebrew =eval(`transliterate_table.${letter}`)
			console.log(`Converted ${text[i]} to ${hebrew}`);
			text = text + hebrew
		}
		else{
			text = text + e.target.value[i] 
		}
		
	}
	e.target.value = text
}

function play(audio_file) {
	let audio = document.getElementById(audio_file);
	audio.play();
}

function toggle_answer_display(answer_text) {
	let answer = document.getElementById(answer_text);
	if (answer.style.display !== "inline") {
		answer.style.display = "inline";
	} else {
		answer.style.display = "none";
	}
}

function hide_answers() {
	answers = document.getElementsByClassName("answer_text");
	l = answers.length;
	for (i = 0; i < l; i++) {
	  answers[i].style.display = "none";
	} 
}