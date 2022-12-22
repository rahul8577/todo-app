printdata();
function printdata(data = "data not fund") {
    const content = document.createElement('div');
    const output = document.getElementById('content');

    var cos = `<table>
    <thead>
    <th>title</th>
    <th>description</th>
    <th>duedate</th>
    <th>notes</th>
    </thead>
    <tbody>
    <tr><td></td></tr>`;

    if (localStorage.length <= 0) {
        let cos = `<tr><td>Data not found</td></tr> `;

    } else {
        for (let i = 0; i < localStorage.length; i++) {
            console.log(localStorage.length);
            var items = localStorage.getItem(localStorage.key(i))
            var par = JSON.parse(items);
            console.log(par);
            var tr = `<tr>`
            for (let k in par) {
                tr += "<td>" + par[k] + "</td>";
            }
            tr += `</tr>`;
            cos+=tr;

        }
    }

    cos += `</tbody></table>`;
    console.log(cos);
    output.innerHTML = "";
    content.innerHTML += cos
    output.appendChild(content);
}

module.exports=printdata;