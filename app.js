// 各要素を取得
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startButton = document.getElementById('start-button');
const choiceButtons = document.querySelectorAll('.choice-button');
const restartButton = document.getElementById('restart-button');

const resultText = document.getElementById('result-text');

// 画面切り替え関数
function showScreen(screen) {
    startScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    screen.classList.add('active');
}

// 「はじめる」ボタンをクリックした時
startButton.addEventListener('click', () => {
    showScreen(quizScreen);
});

// 選択肢ボタンをクリックした時
choiceButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const answer = e.target.dataset.answer;

        if (answer === 'A') {
            resultText.textContent = '正解!１不可説不可説転点！';
            resultText.style.color = '#28a745'; // 緑色
        } else {
            resultText.textContent = '残念!あなたはテンプルトン賞日本人受賞者を1人も覚えていません！';
            resultText.style.color = '#dc3545'; // 赤色
        }
        showScreen(resultScreen);
    });
});

// 「もう一度」ボタンをクリックした時
restartButton.addEventListener('click', () => {
    showScreen(startScreen);
});
