// * ~ MONSTER CUBE ~ *
(function(){
	// array of monster divs and the cube div
	var monsters = [];
	for (var i = 0; i < 6; i++)
		monsters.push(document.getElementById("monster" + (i+1).toString()));
	var monster = monsters[Math.floor(Math.random() * 6)];
	var cube = document.getElementsByClassName("cube")[0];
	
	// is node obj inside otherNode obj?
	function isInside(node, otherNode) {
	    for (; node != null; node = node.parentNode)
	      if (node == otherNode) return true;
	}
	
	function monsterUp(event) {
		if (!isInside(event.relatedTarget, cube)) {
			monster = monsters[Math.floor(Math.random() * 6)];
			monster.style.visibility = "visible";
		}
	}
	// ^^ If not coming from monster to cube, 
	// set new monster to visible, 
	// as coming from outside to cube
	
	function monsterDown(event) {
		if (!isInside(event.relatedTarget, cube))
			monster.style.visibility = "hidden";
	}
	// ^^ If not coming from monster to cube, 
	// set current monster to hidden, 
	// as coming from cube to outside.
	
	cube.addEventListener("mouseover", monsterUp);
	cube.addEventListener("mouseout", monsterDown);
})();


// * ~ GLOWING LETTERS ~ *
(function(){
	var phrase = document.getElementById("phrase");
	var number = 0, lastTime = null;
	function animate(time) {
		if (lastTime != null)
			number += ((time - lastTime) % 360) * 0.03;
		lastTime = time;
		phrase.style.color = "hsl(" + number + ", 100%, 60%)";
		phrase.style.textShadow = "1px 0px 30px hsl(" + number + ", 100%, 60%)";
		requestAnimationFrame(animate);
	}
	requestAnimationFrame(animate);
})();


// * ~ PRIMES ~ *
(function(){
	// returns array of primes less than or equal to n
	function primesleq(n) {
		var a = [];
		for (var i = 2; i <= n; i++)
			a.push(i);
			
		// sieve of eratosthenes
		var p = 2, m; // current prime and current multiple of prime
		for (;;) {
			m = p;
			while (m + p <= n) {
				m = m + p;
				if (a.indexOf(m) != -1)
					a.splice(a.indexOf(m), 1);
			}
			if (a[a.indexOf(p) + 1])
				p = a[a.indexOf(p) + 1];
			else
				break;
		}
		return a;
	}
	
	// append numbers to paragraph
	var table = document.getElementById("primesTable");
	var row, numberNode, content;
	var max = 500;
	var primes = primesleq(max);
	
	for (var i = 1; i<= max; i++) {
		if (i % 10 == 1)
			row = table.appendChild(document.createElement("tr"));
		numberNode = document.createElement("td");
		numberNode.className = "number";
		content = document.createTextNode(" " + i.toString() + " ");
		numberNode.appendChild(content);
		
		if (primes.indexOf(i) != -1)
			numberNode.className += " prime";
		row.appendChild(numberNode);
	}
})();