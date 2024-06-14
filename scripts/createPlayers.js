for (i = 0; i < 5; i++) {
    let div = document.getElementById(`player${i}div`)

    div.innerHTML = 
    `
    <img src="imgs/0.webp" alt="rank" id="imgplayer${i}" class="playerimg">
    <p id="player${i}rank" class="playersmmr-rank">UNRANKED</p>
    <p id="player${i}MMR" class="playersmmr-text">SEM MMR</p>
    <label for="player${i}select" class="playersmmr" id="player${i}">
        <select id="player${i}select" class="rankingSelect">
            <option value="0" selected>UNRANKED</option>
            <option value="10">HERALD 1</option>
            <option value="154">HERALD 2</option>
            <option value="308">HERALD 3</option>
            <option value="462">HERALD 4</option>
            <option value="616">HERALD 5</option>
            <option value="770">GUARDIAN 1</option>
            <option value="924">GUARDIAN 2</option>
            <option value="1078">GUARDIAN 3</option>
            <option value="1232">GUARDIAN 4</option>
            <option value="1386">GUARDIAN 5</option>
            <option value="1540">CRUSADER 1</option>
            <option value="1694">CRUSADER 2</option>
            <option value="1850">CRUSADER 3</option>
            <option value="2010">CRUSADER 4</option>
            <option value="2170">CRUSADER 5</option>
            <option value="2320">ARCHON 1</option>
            <option value="2470">ARCHON 2</option>
            <option value="2620">ARCHON 3</option>
            <option value="2785">ARCHON 4</option>
            <option value="2930">ARCHON 5</option>
            <option value="3080">LEGEND 1</option>
            <option value="3234">LEGEND 2</option>
            <option value="3388">LEGEND 3</option>
            <option value="3542">LEGEND 4</option>
            <option value="3696">LEGEND 5</option>
            <option value="3850">ANCIENT 1</option>
            <option value="4004">ANCIENT 2</option>
            <option value="4158">ANCIENT 3</option>
            <option value="4312">ANCIENT 4</option>
            <option value="4466">ANCIENT 5</option>
            <option value="4620">DIVINE 1</option>
            <option value="4820">DIVINE 2</option>
            <option value="5020">DIVINE 3</option>
            <option value="5220">DIVINE 4</option>
            <option value="5420">DIVINE 5</option>
            <option value="5680">IMMORTAL</option>
        </select>
    </label>
    `
}
