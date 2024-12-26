const input = document.getElementsByTagName('input')[0];
const button = document.getElementsByClassName('button')[0];
const taskList = document.getElementById('task-list');
const completedTaskText = document.getElementById('completedtask');
const totalTaskText = document.getElementById('totaltasks');

let completedTask = 0;
let totalTask = 0;



function counter() {
    totalTaskText.textContent = `Total Tasks: ${totalTask}`;
    completedTaskText.textContent = `Completed Tasks ${completedTask}`;
}


button.addEventListener('click', function () {
    const newAnswer = input.value.trim();
    if (newAnswer !== '') {
        const textAnswer = document.createElement('li');
        textAnswer.textContent = newAnswer;

        const buttonDone = document.createElement('button');
        buttonDone.textContent = 'Complete';
        let isCompleted = false; // Added to track task completion status

        buttonDone.onclick = function () {
            if (!isCompleted) {
                textAnswer.style.textDecoration = 'line-through';
                completedTask++;
                isCompleted = true;
            } else {
                textAnswer.style.textDecoration = 'none';
                completedTask--;
                isCompleted = false;
            }
            counter();
        };

        const buttonUndone = document.createElement('button');
        buttonUndone.textContent = 'Delete';
        buttonUndone.onclick = function () {
            if (isCompleted) {
                completedTask--;
            }
            totalTask--;
            counter();
            taskList.removeChild(textAnswer);
        };

        textAnswer.appendChild(buttonDone);
        textAnswer.appendChild(buttonUndone);
        taskList.appendChild(textAnswer);

        totalTask++;
        counter();
    }
    input.value = "";
});

counter();



