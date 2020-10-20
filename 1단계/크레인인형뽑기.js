// https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
// 크레인 작동 시 인형이 집어지지 않는 경우는 없으나 
//만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 
//아무런 일도 일어나지 않습니다. 또한 바구니는 모든 인형이 
//들어갈 수 있을 만큼 충분히 크다고 가정합니다. (그림에서는
// 화면표시 제약으로 5칸만으로 표현하였음)

// 게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 
// 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.
function solution(board, moves) {
	var answer = 0;
	const trunk = [];
	for(let i =0; i<moves.length; i++){
		let move = moves[i] -1;
		for(let l =0; l<board.length;l++){
			if(board[l][move]!==0){
				if(trunk[trunk.length-1] === board[l][move]){
					trunk.pop();
					answer+=2;
				}else{
					trunk.push(board[l][move]);
				}
				board[l][move]=0;
				break;
			}
		}
	}
  return answer;
}