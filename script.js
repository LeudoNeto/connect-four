let game = [['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','','']];

function check_game()
{
    for (line of game)
    {
        for (let i = 0; i < 4; i++)
        {
            if (line[i] && line[i] === line[i+1] && line[i+1] === line[i+2] && line[i+2] === line[i+3])
            {
                return true;
            }
        }
    }
    for (let i = 0; i < 7; i++)
    {
        for (let o = 0; o < 3; o++)
        {
            if (game[o][i] && game[o][i] === game[o+1][i] && game[o+1][i] === game[o+2][i] && game[o+2][i] === game[o+3][i])
            {
                return true;
            }
            if (game[o][i] && game[o][i] === game[o+1][i+1] && game[o+1][i+1] === game[o+2][i+2] && game[o+2][i+2] === game[o+3][i+3])
            {
                return true;
            }
            if (game[o][i] && game[o][i] === game[o+1][i-1] && game[o+1][i-1] === game[o+2][i-2] && game[o+2][i-2] === game[o+3][i-3])
            {
                return true;
            }
        }
    }
}

circles = Array.from(document.querySelectorAll('td button'));

let clicks = 0;
for (circle of circles)
{
    circle.line = Math.floor(circles.indexOf(circle) / 7);
    circle.column = circles.indexOf(circle) % 7;
    circle.addEventListener('click',function()
    {
        if (game[0][this.column] === '')
        {
            for (let o = 0; o < 6; o++)
            {
                if (clicks % 2 === 0)
                {
                    circles[7*o + this.column].style.background = 'blue';
                }
                else
                {
                    circles[7*o + this.column].style.background = 'red';
                }
            }
        clicks++;
        }
    })
}