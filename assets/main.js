const main = document.querySelector('.main');
const con = document.querySelector('.con');
const txt = document.querySelector('#txt');
const yes = document.querySelector('#yesBtn');
const no = document.querySelector('#noBtn');
const button = document.querySelector('.btn');
yes.addEventListener('click', () => {
	no.style.display = 'none';
	yes.style.display = 'none';

	main.style.backgroundColor = '#f27b7b';

	con.style.border = '2px solid #fff';
	con.style.backgroundColor = '#f27b7b';
	con.style.boxShadow = '#d95454 15px 15px 20px inset, #d95454 -15px -15px 20px inset, #cf1e1e 0 0 100px';

	txt.innerHTML = 'NOW NALANG KASIII HAHAHAHAHA';

	txt.style.color = 'fff';
	txt.style.textShadow = '1px 1px #f44d4d, -1px -1px #f444d4d, 0 0 20px red';
});

no.addEventListener('click', function handleClick() {
  no.textContent = 'YES LANG PWEDE PINDUTIN';
});


no.addEventListener('click', () => {
	no.style.display = 'none';
	yes.style.display = 'none';

	main.style.backgroundColor = '#f27b7b';

	con.style.border = '2px solid #fff';
	con.style.backgroundColor = '#f27b7b';
	con.style.boxShadow = '#d95454 15px 15px 20px inset, #d95454 -15px -15px 20px inset, #cf1e1e 0 0 100px';

	txt.innerHTML = 'HAHAHAHAAHAHAH KINIKILIG AKO SHSDJSJSDHSHDSAKSJSDJ';

	txt.style.color = 'fff';
	txt.style.textShadow = '1px 1px #f44d4d, -1px -1px #f444d4d, 0 0 20px red';
});


