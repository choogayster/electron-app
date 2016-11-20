app.service('QuestionsSrv', function(){

	this.getQuestions = function() {
		return this.questions;
	}

	this.getQuestion = function(variant) {
		return this.questions[parseInt(variant)];
	}

	this.questions = [
		{
			questions : [
				{
					type : 'test',
					title : 'Вкажіть найбільший спільний дільник чисел 60 і 24',
					answers : ['24', '12', '6', '4'],
					input : -1,
					trueAnswer : 1
				},
				{
					type : 'test',
					title : 'Знайдіть невідомий член пропорції 5/16 = x/48',
					answers : ['24', '30', '20', '15'],
					input : -1,
					trueAnswer : 3
				},
				{
					type : 'test',
					title : 'Укажіть правильну нерівність',
					answers : ['-3,7 < -3,6', '-5 < -5,1', '0 < -7', '-2,8 > -2,6'],
					input : -1,
					trueAnswer : 0
				},
				{
					type : 'test',
					title : 'Обчисліть значення виразу (4,6 - 7,4):(-0,4)',
					answers : ['0,7', '-0,7', '7', '-7'],
					input : -1,
					trueAnswer : 2
				},
				{
					type : 'input',
					title : 'Виконійте дії (5/21 + 3/14)*21/19',
					input : '',
					trueAnswer : '1/2'
				},
				{
					type : 'input',
					title : 'У будинку є 16 трикімнатних квартир, що становить 4/21 кількості всіх квартир у будинку. Скільки квартир в цьому будинку?',
					input : '',
					trueAnswer : 84
				}
			]
		},
		{
			questions : [
				{
					type : 'test',
					title : 'Вкажіть найбільший спільний дільник чисел 39 і 26',
					answers : ['26', '3', '13', '1'],
					input : -1,
					trueAnswer : 2
				},
				{
					type : 'test',
					title : 'Знайдіть невідомий член пропорції 18/27 = 6/x',
					answers : ['12', '9', '18', '24'],
					input : -1,
					trueAnswer : 1
				},
				{
					type : 'test',
					title : 'Укажіть правильну нерівність',
					answers : ['-7,5 < -7,6', '-3,4 < -4', '-2,9 > -2,7', '0 > -10'],
					input : -1,
					trueAnswer : 3
				},
				{
					type : 'test',
					title : 'Обчисліть значення виразу (5,6 - 7,2):(-0,2)',
					answers : ['8', '-8', '12', '-12'],
					input : -1,
					trueAnswer : 0
				},
				{
					type : 'input',
					title : 'Виконійте дії (4/15 + 3/10)*20/17',
					input : '',
					trueAnswer : '2/3'
				},
				{
					type : 'input',
					title : 'За тиждень будо відремонтовано 16 км дороги, що становить 4/9 довжини всієї дороги. Яка довжина дороги?',
					input : '',
					trueAnswer : 36
				}
			]
		},
		{
			questions : [
				{
					type : 'test',
					title : 'Вкажіть найбільший спільний дільник чисел 70 і 28',
					answers : ['7', '14', '28', '2'],
					input : -1,
					trueAnswer : 1
				},
				{
					type : 'test',
					title : 'Знайдіть невідомий член пропорції х/56 = 3/8',
					answers : ['24', '18', '28', '21'],
					input : -1,
					trueAnswer : 2
				},
				{
					type : 'test',
					title : 'Укажіть правильну нерівність',
					answers : ['4,1 < -4,8', '-2,5 < -3', '-9,8 > -10,1', '-7,6 > -7,2'],
					input : -1,
					trueAnswer : 2
				},
				{
					type : 'test',
					title : 'Обчисліть значення виразу (4,3 - 6,7):(-0,6)',
					answers : ['4', '-4', '0,4', '-0,4'],
					input : -1,
					trueAnswer : 0
				},
				{
					type : 'input',
					title : 'Виконійте дії (5/12 + 7/18)*36/29',
					input : '',
					trueAnswer : '1'
				},
				{
					type : 'input',
					title : 'У класі 12 хлопчиків, що становить 3/8 усіх учнів. Скільки всього учнів у класі?',
					input : '',
					trueAnswer : 32
				}
			]
		}
	];
});