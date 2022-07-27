let game = [['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','','']];

let win_message = document.querySelector('#win-message')

function check_game()
{
    for (line of game)
    {
        for (let i = 0; i < 4; i++)
        {
            if (line[i] && line[i] === line[i+1] && line[i+1] === line[i+2] && line[i+2] === line[i+3])
            {
                return line[i];
            }
        }
    }
    for (let i = 0; i < 7; i++)
    {
        for (let o = 0; o < 3; o++)
        {
            if (game[o][i] && game[o][i] === game[o+1][i] && game[o+1][i] === game[o+2][i] && game[o+2][i] === game[o+3][i])
            {
                return game[o][i];
            }
            if (game[o][i] && game[o][i] === game[o+1][i+1] && game[o+1][i+1] === game[o+2][i+2] && game[o+2][i+2] === game[o+3][i+3])
            {
                return game[o][i];
            }
            if (game[o][i] && game[o][i] === game[o+1][i-1] && game[o+1][i-1] === game[o+2][i-2] && game[o+2][i-2] === game[o+3][i-3])
            {
                return game[o][i];
            }
        }
    }
    return false;
}

circles = Array.from(document.querySelectorAll('td button'));

let clicks = 0;

for (circle of circles)
{
    circle.line = Math.floor(circles.indexOf(circle) / 7);
    circle.column = circles.indexOf(circle) % 7;
    circle.style.background = 'gray';
    circle.addEventListener('click',function()
    {
        if (game[0][this.column] === '' && !check_game())
        {
            for (let o = 5; o >= 0; o--)
            {
                if (circles[7*o + this.column].style.background == 'gray')
                {
                    if (clicks % 2 === 0)
                    {
                        circles[7*o + this.column].style.background = 'blue';
                        game[o][this.column] ='Blue';
                    }
                    else
                    {
                        circles[7*o + this.column].style.background = 'red';
                        game[o][this.column] ='Red';
                    }
                    break;
                }
            }
        clicks++;
        }
        if (check_game())
        {
            win_message.children[0].textContent = `${check_game()} won.`;
            win_message.style.display = 'block';
            window.scrollTo(0,document.body.scrollHeight);
        }
    })
}

restart = document.querySelector('#restart-button');

restart.addEventListener('click',function()
{
    clicks = 0;
    game = [['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','','']];

    for (circle of circles)
    {
        circle.style.background = 'gray';
    }
    if (win_message.children[0].textContent)
    {
        win_message.children[0].textContent = '';
        win_message.style.display = 'none';
        window.scrollTo(0,0);
    }
})