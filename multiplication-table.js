let create,x,y;
create="<table style='margin: auto' border='1' width='1000' cellspacing='0' cellpadding='3'>";
x=1;
y=2;
while(x<=9)
{
    create=create+"<tr>";
    while(y<=9)
    {
        create=create+"<td style='color: red;border: >"+y+"*"+x+"="+y*x+"</td>";
        y++;

    }
    create=create+"</tr>";
    y=2;
    x=x+1;

}
create=create+"</table>";
document.write(create);