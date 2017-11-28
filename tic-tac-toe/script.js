(function() {

  document.addEventListener('DOMContentLoaded', function() {
    var grid = buildGrid();
        vinCombs = getWinCombs();

    var userX = [],
        user0 = [],
        activeUser = 'x';

    // Attach a single event listener, to a parent grid element (event
    grid.addEventListener("mouseup", fire);
    grid.addEventListener("click", finishGame);

    function fire(event) {
      var elem = event.target,
          delta = elem.getAttribute('data-delta');

      // Process a clicking on TD element only. The processed items should be
      // ignored as well.
      if (elem.tagName != 'TD' || elem.classList.contains('processed')) {
        return;
      }

      elem.setAttribute('class', 'processed processed-by-' + activeUser);
      elem.innerHTML = activeUser;

      // Build the combinations in accordance with ticked cells.
      switch (activeUser) {
        case 'x':
          userX.push(delta);
          userX.sort();
          activeUser = '0';
          break;

        case '0':
          user0.push(delta);
          user0.sort();
          activeUser = 'x';
          break;
      }
    }

    function finishGame(event) {
      if (vinCombs.indexOf(+userX.join('')) > -1) {
        alert('X WON!!!');
      }
      if (vinCombs.indexOf(+user0.join('')) > -1) {
        alert('O WON!!!');
      }      
    }

    document.body.appendChild(grid);

  });

  /**
   * Builds a grid (3x3).
   */
  function buildGrid() {
    var table = document.createElement('table'),
        tbody = document.createElement('tbody');

    // This delta is used to generate combinations. We will compare them with
    // winning combinations to to determine the winner.
    var delta = 1;

    for (var i = 0; i < 3; i++) {
      var row = document.createElement('tr');

      for (var j = 0; j < 3; j++) {
        var cell = document.createElement('td');

        cell.setAttribute('data-delta', delta);
        row.appendChild(cell);

        // Each cell has own delta.
        delta++;
      }

      tbody.appendChild(row);
    }

    table.appendChild(tbody);
    return table;
  }

  /**
   * Get winning combinations.
   */
  function getWinCombs() {
    return [123, 456, 789, 147, 258, 369, 159, 357];
  }

})();
