
function Table(){
    return (
        <table id="MainTable">
          <tr >
            <th>Site Link</th>
            <th>Discription</th>
            <th>Repo Link</th>
            <th>Framework</th>
          </tr>
          <tbody>
            <tr>
              <td><a href="https://cis-371-project-3a.vercel.app "> Drink App</a></td>
              <td>API calls to search for drink recipes, dynamiclly generates table</td>
              <td> <a href="https://github.com/Chesten/CIS_371_Project_3">Link</a></td>
              <td>Pure JavaScript</td>
              {/**maybe make this a bit prettier */}
            </tr>
            <tr>
              <td><a href="https://vue-three-orcin.vercel.app"> Budget app</a></td>
              <td>This is a budgeting app with log in functionality</td>
              <td> <a href="https://github.com/Chesten/PersonalBuget2/tree/master/src">Link</a></td>
              <td>Vue.JS with TypeScript</td>
              {/**maybe make this a bit prettier, log in working, and some tutorial messages */}
            </tr>
            <tr>
              <td><a href="https://midterm-pt2.vercel.app"> Covid Tracking</a></td>
              <td>This uses an API to track the rates among countries covid rates</td>
              <td> <a href="https://github.com/Chesten/midterm_pt2"> Link</a></td>
              <td>Vue.JS with TypeScript</td>
              {/**Fix the Activity log for how to use app*/}
            </tr>
          </tbody>
        </table>
    )
}

export default Table;