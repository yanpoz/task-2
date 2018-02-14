(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        // todo: подсчитать кол-во островов на карте
        var islands = 0;				//текущее количество просчитанных островов
        	
        function agent(y, x) {			//рекурсивная функция, помечает островные клетки
        
        	if (map[y] == null ||		//условия выхода из рекурсии
        		map[y][x] == null ||	//при "спавне" за пределами карты
        		map[y][x] == WATER ||	//на клетке с водой
        		map[y][x] == 2) {       //на помеченной клетке		
        		return; }
        	else {      	     	 
       	 		map[y][x] = 2;			//пометка клетки
       	 		agent(y, x+1);			//рекурсивный "спавн" функции в соседние клетки
       	 		agent(y, x-1);
        		agent(y+1, x);
        		agent(y-1, x);
        		}
        }
        
        for (y = 0; y < map.length; y++) {		  //проверка всей карты
        for (x = 0; x < map[0].length; x++) {
        	if (map[y][x] == ISLAND) {			  //проверка достижения непомеченной земли
        		//setTimeout(agent, 2500, y, x);  //попытка создания анимации
        		agent(y, x);					  //"спавн" функции
        		islands++;
        	}
        }}

        for (y = 0; y < map.length; y++) {		  //возврат земли в ячейки
        for (x = 0; x < map[0].length; x++) {
            if (map[y][x] == 2) {
                map[y][x] = ISLAND;
            }
        }}
       
       return islands;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);

